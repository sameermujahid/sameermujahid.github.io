import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  from { width: 50px; height: 50px; }
  to { width: 60px; height: 60px; }
`;

const bounce = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
`;

const CursorTrail = styled.div`
  position: fixed;
  border: 2px solid #e0e1ddff; /* Changed border color */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: ${pulse} 0.5s cubic-bezier(.51,0,0.4,.5) alternate infinite;
  transform: translate(-50%, -50%) scale(1);
  pointer-events: none;
  &.active {
    animation: ${bounce} 0.5s ease;
  }
`;

const GlowingDot = styled.div`
  position: fixed;
  width: 10px;
  height: 10px;
  background: #778da9ff; /* Changed background color */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1001;
  box-shadow: 0 0 8px 2px #0d1b2aff; /* Changed box shadow color */
`;

const CustomCursor = () => {
  useEffect(() => {
    const cursorTrail = document.querySelector('.cursor-trail');
    const glowingDot = document.querySelector('.glowing-dot');

    let mouseX = 0;
    let mouseY = 0;

    let ballX = 0;
    let ballY = 0;

    const speed = 0.2; // How fast the cursor catches up to the mouse pointer

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

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    document.addEventListener('click', (e) => {
      e.preventDefault();
      cursorTrail.classList.remove('active');

      // Trigger reflow to restart the animation
      void cursorTrail.offsetWidth;

      cursorTrail.classList.add('active');
    });
  }, []);

  return (
    <>
      <CursorTrail className="cursor-trail" />
      <GlowingDot className="glowing-dot" />
    </>
  );
};

export default CustomCursor;
