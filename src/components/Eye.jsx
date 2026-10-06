// ```jsx
import React, { useEffect, useRef } from "react";

export default function InteractiveEyes({ compact = false }) {
  const containerRef = useRef(null);
  const eyesRef = useRef([]);
  const eyeRectsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const target = {
      x: 0,
      y: 0,
    };

    const current = {
      x: 0,
      y: 0,
    };

    let animationFrame = null;

    /*
     * ============================================================
     * TRACKING SPEED
     *
     * 0.075 = slow / soft
     * 0.18  = smooth
     * 0.28  = fast + smooth
     * 0.40  = very fast
     * 1.0   = instant
     *
     * 0.28 is a good balance for the TopBar.
     * ============================================================
     */

    const FOLLOW_SPEED = 0.28;

    /*
     * ============================================================
     * POINTER
     * ============================================================
     */

    const handlePointerMove = (event) => {
      const rect =
        container.getBoundingClientRect();

      if (
        !rect.width ||
        !rect.height
      ) {
        return;
      }

      /*
       * Normalize pointer position
       * relative to the eye container.
       *
       * Result:
       *
       * left   = -1
       * center =  0
       * right  = +1
       */

      target.x =
        (
          (event.clientX - rect.left) /
            rect.width -
          0.5
        ) * 2;

      target.y =
        (
          (event.clientY - rect.top) /
            rect.height -
          0.5
        ) * 2;
    };

    const handlePointerLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    /*
     * ============================================================
     * CACHE EYE POSITIONS
     *
     * Avoid calling getBoundingClientRect()
     * for every eye on every animation frame.
     * ============================================================
     */

    const updateEyeRects = () => {
      eyeRectsRef.current =
        eyesRef.current.map((eye) => {
          if (!eye) {
            return null;
          }

          const rect =
            eye.getBoundingClientRect();

          return {
            width: rect.width,
            height: rect.height,
            centerX:
              rect.left +
              rect.width / 2,
            centerY:
              rect.top +
              rect.height / 2,
          };
        });
    };

    /*
     * ============================================================
     * ANIMATION
     * ============================================================
     */

    const animate = () => {
      /*
       * Fast interpolation.
       *
       * This is the main change from
       * the previous version.
       */

      current.x +=
        (target.x - current.x) *
        FOLLOW_SPEED;

      current.y +=
        (target.y - current.y) *
        FOLLOW_SPEED;

      eyesRef.current.forEach(
        (eye, index) => {
          if (!eye) return;

          const cached =
            eyeRectsRef.current[index];

          if (!cached) return;

          /*
           * In compact mode, keep pointer
           * influence local so the eyes don't
           * jump excessively across the TopBar.
           */

          const influence = compact
            ? Math.min(
                window.innerWidth,
                window.innerHeight
              ) * 0.22
            : Math.max(
                window.innerWidth,
                window.innerHeight
              ) * 0.5;

          const pointerX =
            cached.centerX +
            current.x * influence;

          const pointerY =
            cached.centerY +
            current.y * influence;

          const dx =
            pointerX -
            cached.centerX;

          const dy =
            pointerY -
            cached.centerY;

          const angle =
            Math.atan2(dy, dx);

          /*
           * Maximum iris travel.
           */

          const maxDistance =
            cached.width * 0.22;

          const distance =
            Math.min(
              Math.sqrt(
                dx * dx +
                dy * dy
              ),
              maxDistance
            );

          const x =
            Math.cos(angle) *
            distance;

          const y =
            Math.sin(angle) *
            distance;

          /*
           * Update CSS variables directly.
           * React does not re-render.
           */

          eye.style.setProperty(
            "--x",
            `${x}px`
          );

          eye.style.setProperty(
            "--y",
            `${y}px`
          );

          eye.style.setProperty(
            "--iris-rotate",
            `${
              (x / maxDistance) * 4
            }deg`
          );
        }
      );

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    /*
     * ============================================================
     * INITIAL MEASURE
     * ============================================================
     */

    updateEyeRects();

    /*
     * Update cached positions if the
     * browser window changes size.
     */

    const handleResize = () => {
      updateEyeRects();
    };

    /*
     * ============================================================
     * EVENTS
     * ============================================================
     */

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    container.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    window.addEventListener(
      "resize",
      handleResize,
      {
        passive: true,
      }
    );

    /*
     * Start animation.
     */

    animationFrame =
      requestAnimationFrame(
        animate
      );

    /*
     * ============================================================
     * CLEANUP
     * ============================================================
     */

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      container.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      if (animationFrame) {
        cancelAnimationFrame(
          animationFrame
        );
      }
    };
  }, [compact]);

  return (
    <div
      ref={containerRef}
      className={`eyes-page ${
        compact
          ? "eyes-compact"
          : ""
      }`}
    >
      <div className="eyes">
        {[0, 1].map((eye) => (
          <div
            key={eye}
            ref={(el) => {
              eyesRef.current[eye] =
                el;
            }}
            className="eye"
          >
            {/* Soft inner glow */}

            <div className="eye-glow" />

            {/* Iris */}

            <div className="iris">
              {/* Iris texture */}

              <div className="iris-lines" />

              {/* Pupil */}

              <div className="pupil">
                <div className="pupil-depth" />
              </div>

              {/* Reflections */}

              <div className="reflection reflection-large" />

              <div className="reflection reflection-small" />
            </div>

            {/* Glass highlight */}

            <div className="eye-reflection" />
          </div>
        ))}
      </div>

      <style>{`

        /*
         * =========================================================
         * FULL EYES MODE
         * =========================================================
         */

        .eyes-page {
          min-height: 100vh;
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 50% 42%,
              rgba(
                255,
                255,
                255,
                0.055
              ),
              transparent 32%
            ),

            radial-gradient(
              circle at 50% 50%,
              #171717 0%,
              #080808 55%,
              #030303 100%
            );

          position: relative;

          isolation: isolate;
        }


        /*
         * =========================================================
         * COMPACT TOPBAR MODE
         * =========================================================
         */

        .eyes-page.eyes-compact {
          min-height: 0;

          width: auto;

          height: 42px;

          display: flex;

          align-items: center;

          justify-content: center;

          flex: 0 0 auto;

          overflow: visible;

          background: transparent;

          isolation: isolate;

          position: relative;

          pointer-events: auto;
        }


        /*
         * =========================================================
         * AMBIENT GLOW
         * =========================================================
         */

        .eyes-page::before {
          content: "";

          position: absolute;

          width: 520px;
          height: 260px;

          background:
            rgba(
              255,
              255,
              255,
              0.035
            );

          filter: blur(100px);

          border-radius: 50%;

          pointer-events: none;
        }


        .eyes-page.eyes-compact::before {
          width: 90px;
          height: 45px;

          background:
            rgba(
              255,
              255,
              255,
              0.045
            );

          filter: blur(20px);
        }


        /*
         * =========================================================
         * EYES CONTAINER
         * =========================================================
         */

        .eyes {
          display: flex;

          align-items: center;

          justify-content: center;

          gap:
            clamp(
              20px,
              4vw,
              48px
            );

          position: relative;

          z-index: 2;

          transform:
            translateZ(0);
        }


        /*
         * Compact TopBar spacing.
         */

        .eyes-compact .eyes {
          gap: 4px;

          height: 42px;
        }


        /*
         * =========================================================
         * EYEBALL
         * =========================================================
         */

        .eye {
          --x: 0px;
          --y: 0px;
          --iris-rotate: 0deg;

          width:
            clamp(
              95px,
              10vw,
              150px
            );

          height:
            clamp(
              95px,
              10vw,
              150px
            );

          position: relative;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 35% 28%,
              #ffffff 0%,
              #fafafa 38%,
              #e9e9e9 72%,
              #cfcfcf 100%
            );

          box-shadow:
            0 25px 70px
              rgba(
                0,
                0,
                0,
                0.55
              ),

            inset 0 0 25px
              rgba(
                0,
                0,
                0,
                0.16
              ),

            inset 0 -10px 25px
              rgba(
                0,
                0,
                0,
                0.08
              );

          transform:
            translateZ(0);

          will-change:
            transform;
        }


        /*
         * Compact eye size.
         */

        .eyes-compact .eye {
          width: 20px;
          height: 20px;

          box-shadow:
            0 5px 14px
              rgba(
                0,
                0,
                0,
                0.35
              ),

            inset 0 0 7px
              rgba(
                0,
                0,
                0,
                0.14
              ),

            inset 0 -3px 7px
              rgba(
                0,
                0,
                0,
                0.08
              );
        }


        /*
         * =========================================================
         * SCLERA DEPTH
         * =========================================================
         */

        .eye::before {
          content: "";

          position: absolute;

          inset: 0;

          border-radius:
            inherit;

          background:
            radial-gradient(
              circle at 50% 50%,
              transparent 50%,
              rgba(
                0,
                0,
                0,
                0.08
              ) 100%
            );

          pointer-events: none;
        }


        /*
         * =========================================================
         * SUBTLE VASCULAR DETAIL
         * =========================================================
         */

        .eye::after {
          content: "";

          position: absolute;

          inset: 12%;

          border-radius: 50%;

          background:
            radial-gradient(
              ellipse at 20% 55%,
              rgba(
                220,
                80,
                80,
                0.12
              ),
              transparent 7%
            ),

            radial-gradient(
              ellipse at 80% 42%,
              rgba(
                220,
                80,
                80,
                0.08
              ),
              transparent 6%
            );

          opacity: 0.55;

          pointer-events: none;
        }


        /*
         * =========================================================
         * IRIS
         * =========================================================
         */

        .iris {
          position: absolute;

          width: 43%;
          height: 43%;

          left: 50%;
          top: 50%;

          transform:
            translate(
              calc(
                -50% + var(--x)
              ),
              calc(
                -50% + var(--y)
              )
            )
            rotate(
              var(--iris-rotate)
            );

          border-radius: 50%;

          background:
            radial-gradient(
              circle at 50% 50%,
              #020202 0%,
              #070707 17%,
              #1a1a1a 19%,
              #303030 38%,
              #090909 66%,
              #020202 100%
            );

          box-shadow:
            0 0 8px
              rgba(
                0,
                0,
                0,
                0.5
              ),

            inset 0 0 10px
              rgba(
                255,
                255,
                255,
                0.06
              );

          will-change:
            transform;
        }


        /*
         * =========================================================
         * IRIS TEXTURE
         * =========================================================
         */

        .iris-lines {
          position: absolute;

          inset: 0;

          border-radius: 50%;

          background:
            repeating-conic-gradient(
              from 0deg,

              rgba(
                255,
                255,
                255,
                0.12
              )
              0deg,

              rgba(
                255,
                255,
                255,
                0
              )
              3deg,

              rgba(
                255,
                255,
                255,
                0.08
              )
              6deg
            );

          mask-image:
            radial-gradient(
              circle,
              transparent 0%,
              black 25%,
              black 85%,
              transparent 100%
            );

          opacity: 0.42;

          pointer-events: none;
        }


        /*
         * =========================================================
         * PUPIL
         * =========================================================
         */

        .pupil {
          position: absolute;

          width: 43%;
          height: 43%;

          left: 50%;
          top: 50%;

          transform:
            translate(
              -50%,
              -50%
            );

          border-radius: 50%;

          background:
            radial-gradient(
              circle at 35% 30%,
              #101010,
              #000 62%
            );

          box-shadow:
            inset 0 0 8px
              rgba(
                255,
                255,
                255,
                0.035
              );

          z-index: 2;
        }


        .pupil-depth {
          position: absolute;

          inset: 0;

          border-radius: 50%;

          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(
                255,
                255,
                255,
                0.04
              ),
              transparent 30%
            );

          pointer-events: none;
        }


        /*
         * =========================================================
         * REFLECTIONS
         * =========================================================
         */

        .reflection {
          position: absolute;

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              0.95
            );

          filter:
            blur(0.2px);

          z-index: 4;

          pointer-events: none;
        }


        .reflection-large {
          width: 19%;
          height: 19%;

          top: 22%;
          left: 25%;

          opacity: 0.92;
        }


        .reflection-small {
          width: 7%;
          height: 7%;

          top: 43%;
          left: 21%;

          opacity: 0.65;
        }


        /*
         * =========================================================
         * GLASS HIGHLIGHT
         * =========================================================
         */

        .eye-reflection {
          position: absolute;

          inset: 0;

          border-radius:
            inherit;

          background:
            linear-gradient(
              135deg,
              rgba(
                255,
                255,
                255,
                0.20
              ),
              transparent 28%
            );

          opacity: 0.55;

          pointer-events: none;

          z-index: 5;
        }


        /*
         * =========================================================
         * IRIS GLOW
         * =========================================================
         */

        .eye-glow {
          position: absolute;

          width: 55%;
          height: 55%;

          left: 50%;
          top: 50%;

          transform:
            translate(
              calc(
                -50% + var(--x)
              ),
              calc(
                -50% + var(--y)
              )
            );

          border-radius: 50%;

          background:
            rgba(
              0,
              0,
              0,
              0.08
            );

          filter:
            blur(14px);

          pointer-events: none;
        }


        .eyes-compact .eye-glow {
          filter:
            blur(5px);
        }


        /*
         * =========================================================
         * MOBILE
         * =========================================================
         */

        @media (max-width: 768px) {

          .eyes-compact {
            height: 36px;
          }

          .eyes-compact .eyes {
            height: 36px;
            gap: 3px;
          }

          .eyes-compact .eye {
            width: 25px;
            height: 25px;
          }

        }


        @media (max-width: 480px) {

          .eyes-compact {
            height: 32px;
          }

          .eyes-compact .eyes {
            height: 32px;
          }

          .eyes-compact .eye {
            width: 22px;
            height: 22px;
          }

        }


        /*
         * =========================================================
         * REDUCED MOTION
         * =========================================================
         */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .eye,
          .iris,
          .eye-glow {
            transition:
              none !important;
          }

        }

      `}</style>
    </div>
  );
}
