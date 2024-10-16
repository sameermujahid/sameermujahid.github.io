import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const pulse = keyframes`
  from { width: 50px; height: 50px; }
  to { width: 60px; height: 60px; }
`;

const bounce = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
`;

// Styles for Cursor Trail
const CursorTrail = styled.div`
  position: fixed;
  border: 2px solid #e0e1dd; /* Border color */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: ${pulse} 0.5s cubic-bezier(.51, 0, 0.4, .5) alternate infinite;
  transform: translate(-50%, -50%) scale(1);
  pointer-events: none;

  &.active {
    animation: ${bounce} 0.5s ease;
  }

  /* Dynamic background effect when hovering */
  background: rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease; /* Smooth transition for hover */
`;

// Styles for Glowing Dot
const GlowingDot = styled.div`
  position: fixed;
  width: 12px; /* Size of the dot */
  height: 12px; /* Size of the dot */
  background: #778da9; /* Default color */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1001;
  box-shadow: 0 0 8px 2px #0d1b2a; /* Glow effect */
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */

  /* Inverted color on hover */
  &.hovered {
    background: #e0e1dd; /* Inverted color */
    box-shadow: 0 0 12px 4px #00aaff; /* Glow effect */
  }
`;

const CustomCursor = () => {
  useEffect(() => {
    const cursorTrail = document.querySelector('.cursor-trail');
    const glowingDot = document.querySelector('.glowing-dot');

    let mouseX = 0;
    let mouseY = 0;

    let ballX = 0;
    let ballY = 0;

    const speed = 0.2; // Speed at which the cursor catches up

    const animate = () => {
      const distX = mouseX - ballX;
      const distY = mouseY - ballY;

      ballX += distX * speed;
      ballY += distY * speed;

      cursorTrail.style.left = ballX + 'px';
      cursorTrail.style.top = ballY + 'px';
      glowingDot.style.left = mouseX + 'px';
      glowingDot.style.top = mouseY + 'px';

      requestAnimationFrame(animate);
    };

    animate();

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Check the background color of the hovered element
      const hoveredElement = document.elementFromPoint(mouseX, mouseY);
      if (hoveredElement) {
        const bgColor = window.getComputedStyle(hoveredElement).backgroundColor;

        // Determine if the background is light or dark
        if (isLight(bgColor)) {
          glowingDot.classList.add('hovered'); // Apply hover effect
        } else {
          glowingDot.classList.remove('hovered'); // Remove hover effect
        }
      }
    });

    // Remove hover effect on mouse out
    document.addEventListener('mouseout', () => {
      glowingDot.classList.remove('hovered');
    });

    // Click animation
    document.addEventListener('click', (e) => {
      e.preventDefault();
      cursorTrail.classList.remove('active');

      // Trigger reflow to restart the animation
      void cursorTrail.offsetWidth;

      cursorTrail.classList.add('active');
    });
  }, []);

  // Helper function to check if a color is light or dark
  const isLight = (rgb) => {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
    return brightness > 186; // Threshold for light colors
  };

  return (
    <>
      <CursorTrail className="cursor-trail" />
      <GlowingDot className="glowing-dot" />
    </>
  );
};

export default CustomCursor;
