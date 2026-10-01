// SpotlightEffects.jsx
// Global mouse-following spotlight.
// Cards illuminate based on their distance from the cursor,
// including the gaps between cards.
//
// Usage:
// <Card data-spotlight>
//   <SpotlightGlow color="#2997ff" />
//   ...
// </Card>

import React, { useEffect } from 'react';
import styled from 'styled-components';

// ─── Spotlight Glow ───────────────────────────────────────────────────────────

const Glow = styled.span`
  position: absolute;
  inset: 0;

  z-index: 0;
  pointer-events: none;

  border-radius: inherit;

  opacity: var(--spotlight-opacity, 0);

  background:
    radial-gradient(
      300px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%),
      ${({ $color, theme }) => `${$color || theme.accent}35`} 0%,
      ${({ $color, theme }) => `${$color || theme.accent}20`} 20%,
      ${({ $color, theme }) => `${$color || theme.accent}0c`} 42%,
      transparent 72%
    );

  box-shadow:
    inset 0 0 0 1px
      ${({ $color, theme }) => `${$color || theme.accent}28`},
    0 0 30px
      ${({ $color, theme }) => `${$color || theme.accent}12`};

  /*
   * Very smooth fade.
   */
  transition:
    opacity 450ms cubic-bezier(0.22, 1, 0.36, 1);

  will-change:
    opacity,
    background;

  /*
   * Makes sure the glow doesn't interfere with
   * the card content.
   */
  transform: translateZ(0);
`;

const SpotlightGlow = ({ color }) => {
  return (
    <Glow
      aria-hidden="true"
      $color={color}
    />
  );
};

// ─── Global Spotlight Effect ──────────────────────────────────────────────────

export const SpotlightEffects = () => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    let animationFrame = 0;

    /*
     * All spotlight elements currently on the page.
     */
    let targets = [];

    /*
     * Current cursor position.
     */
    let mouseX = -9999;
    let mouseY = -9999;

    /*
     * Smoothed cursor position.
     */
    let currentMouseX = -9999;
    let currentMouseY = -9999;

    /*
     * Whether the mouse is currently inside
     * the document/window.
     */
    let mouseActive = false;

    /*
     * How smoothly the spotlight follows.
     */
    const FOLLOW_SPEED = 1;

    /*
     * Maximum distance from cursor at which
     * a card can receive illumination.
     *
     * Increase this for a wider effect.
     */
    const MAX_DISTANCE = 300;

    /*
     * How strong the illumination can become.
     */
    const MAX_OPACITY = 1;

    // ─────────────────────────────────────────────────────────────────────────

    const collectTargets = () => {
      targets = Array.from(
        document.querySelectorAll('[data-spotlight]')
      );
    };

    // ─────────────────────────────────────────────────────────────────────────

    const clamp = (value, min, max) => {
      return Math.min(
        Math.max(value, min),
        max
      );
    };

    // ─────────────────────────────────────────────────────────────────────────

    const easeOut = (value) => {
      return 1 - Math.pow(1 - value, 3);
    };

    // ─────────────────────────────────────────────────────────────────────────

    const animate = () => {
      /*
       * Smooth cursor movement.
       */
      currentMouseX +=
        (mouseX - currentMouseX) * FOLLOW_SPEED;

      currentMouseY +=
        (mouseY - currentMouseY) * FOLLOW_SPEED;

      /*
       * If the mouse is not active,
       * smoothly fade every spotlight out.
       */
      if (!mouseActive) {
        targets.forEach((target) => {
          target.style.setProperty(
            '--spotlight-opacity',
            '0'
          );
        });

        animationFrame =
          requestAnimationFrame(animate);

        return;
      }

      /*
       * Calculate illumination for every card.
       */
      targets.forEach((target) => {
        const rect =
          target.getBoundingClientRect();

        if (
          !rect.width ||
          !rect.height
        ) {
          return;
        }

        /*
         * Find the closest point inside the card
         * to the cursor.
         *
         * This is the important part:
         *
         * If the cursor is in the GAP between
         * two cards, both cards can still receive
         * illumination.
         */
        const closestX = clamp(
          currentMouseX,
          rect.left,
          rect.right
        );

        const closestY = clamp(
          currentMouseY,
          rect.top,
          rect.bottom
        );

        /*
         * Distance from cursor to the nearest
         * point of this card.
         */
        const dx =
          currentMouseX - closestX;

        const dy =
          currentMouseY - closestY;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        /*
         * Convert distance into opacity.
         *
         * 0 distance = maximum glow
         * MAX_DISTANCE = no glow
         */
        let intensity =
          1 -
          distance / MAX_DISTANCE;

        intensity = clamp(
          intensity,
          0,
          1
        );

        /*
         * Make the fade softer.
         */
        intensity = easeOut(intensity);

        /*
         * Slightly reduce the maximum intensity
         * so the effect doesn't become too bright.
         */
        const opacity =
          intensity *
          MAX_OPACITY;

        /*
         * Position the spotlight relative to
         * the CARD, not the viewport.
         *
         * This allows the light to remain visible
         * even when the cursor is outside the card.
         */
        const localX =
          currentMouseX - rect.left;

        const localY =
          currentMouseY - rect.top;

        target.style.setProperty(
          '--spotlight-x',
          `${localX}px`
        );

        target.style.setProperty(
          '--spotlight-y',
          `${localY}px`
        );

        target.style.setProperty(
          '--spotlight-opacity',
          opacity.toFixed(3)
        );
      });

      animationFrame =
        requestAnimationFrame(animate);
    };

    // ─────────────────────────────────────────────────────────────────────────

    const onPointerMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      mouseActive = true;
    };

    // ─────────────────────────────────────────────────────────────────────────

    const onPointerLeave = () => {
      mouseActive = false;
    };

    // ─────────────────────────────────────────────────────────────────────────

    const onWindowBlur = () => {
      mouseActive = false;
    };

    // ─────────────────────────────────────────────────────────────────────────

    /*
     * Recalculate cards when the DOM changes.
     */
    const observer =
      new MutationObserver(() => {
        collectTargets();
      });

    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true,
      }
    );

    // ─────────────────────────────────────────────────────────────────────────

    window.addEventListener(
      'pointermove',
      onPointerMove,
      { passive: true }
    );

    window.addEventListener(
      'pointerleave',
      onPointerLeave
    );

    window.addEventListener(
      'blur',
      onWindowBlur
    );

    window.addEventListener(
      'resize',
      collectTargets
    );

    // Initial collection.
    collectTargets();

    // Start animation.
    animationFrame =
      requestAnimationFrame(animate);

    // ─────────────────────────────────────────────────────────────────────────

    return () => {
      window.removeEventListener(
        'pointermove',
        onPointerMove
      );

      window.removeEventListener(
        'pointerleave',
        onPointerLeave
      );

      window.removeEventListener(
        'blur',
        onWindowBlur
      );

      window.removeEventListener(
        'resize',
        collectTargets
      );

      observer.disconnect();

      if (animationFrame) {
        cancelAnimationFrame(
          animationFrame
        );
      }

      /*
       * Clean up CSS variables.
       */
      targets.forEach((target) => {
        target.style.removeProperty(
          '--spotlight-x'
        );

        target.style.removeProperty(
          '--spotlight-y'
        );

        target.style.removeProperty(
          '--spotlight-opacity'
        );
      });
    };
  }, []);

  return null;
};

export { SpotlightGlow };
