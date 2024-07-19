// src/components/Preloader.jsx
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Typewriter from 'typewriter-effect/dist/core'; // Ensure you have installed 'typewriter-effect'

// Keyframes for animation
const pulseAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Colors for the preloader
const colors = {
  darkBlue: '#040404',
  lightBlue: '#04b5e4',
  white: '#ffffff',
};

// Styled components for the preloader
const PreloaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent; /* Transparent background */
  animation: ${({ isFadingOut }) => isFadingOut && css`${fadeOut} 1s forwards`};
`;

const WelcomeText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${colors.lightBlue};
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 0 0 10px ${colors.lightBlue}, 0 0 20px ${colors.lightBlue}, 0 0 30px ${colors.lightBlue};
`;

const IconContainer = styled.div`
  display: flex;
  position: relative;
`;

const PulseAnimation = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${colors.lightBlue};
  position: absolute;
  animation: ${pulseAnimation} 2s infinite ease-out;
  z-index: -2; /* Ensure Bolt SVG is on top of Pulse Animation */
`;

// SVG Bolt Icon component
const BoltSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512" width="100" height="100" fill={colors.white}> 
    <path fill-rule="nonzero" d="M256.002 0c70.69 0 134.688 28.658 181.017 74.981C483.343 121.311 512 185.309 512 255.998c0 70.69-28.657 134.694-74.981 181.018C390.693 483.342 326.692 512 256.002 512s-134.694-28.655-181.017-74.984C28.655 390.692 0 326.688 0 255.998c0-70.689 28.658-134.69 74.985-181.017C121.308 28.658 185.312 0 256.002 0zm-79.06 346.462l8.4-49.507c18.402 4.601 34.953 6.902 49.654 6.902 14.705 0 26.556-.601 35.557-1.799v-15.002l-27.003-2.403c-24.405-2.198-41.158-8.049-50.258-17.551-9.1-9.5-13.65-23.552-13.65-42.155 0-25.604 5.55-43.206 16.651-52.805 11.1-9.601 29.955-14.404 56.555-14.404 26.604 0 50.607 2.502 72.012 7.503l-7.503 48.005c-18.603-3-33.502-4.499-44.705-4.499-11.202 0-20.702.498-28.504 1.499v14.701l21.603 2.099c26.204 2.601 44.305 8.854 54.306 18.753 10.001 9.902 15.002 23.655 15.002 41.257 0 12.602-1.7 23.252-5.1 31.953-3.4 8.7-7.451 15.302-12.151 19.804-4.7 4.499-11.353 7.949-19.952 10.349-8.601 2.4-16.151 3.851-22.654 4.352-6.499.499-15.151.751-25.951.751-26.004 0-50.108-2.601-72.309-7.803zm232.885-244.288C370.462 62.812 316.074 38.46 256.002 38.46c-60.073 0-114.464 24.352-153.825 63.714-39.365 39.364-63.716 93.752-63.716 153.824 0 60.073 24.351 114.464 63.716 153.825 39.361 39.365 93.752 63.717 153.825 63.717 60.072 0 114.46-24.352 153.825-63.717 39.362-39.361 63.713-93.752 63.713-153.825 0-60.072-24.351-114.46-63.713-153.824z"/>
  </svg>
);

const Preloader = ({ onComplete }) => {
  const welcomeRef = useRef(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const typewriter = new Typewriter(welcomeRef.current, {
      strings: ['WELCOME'],
      autoStart: true,
      loop: false, // Typewriter won't loop
      deleteSpeed: 20,
      delay: 80,
      onComplete: () => {
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            if (onComplete) {
              onComplete();
            }
          }, 1000); // Duration of fade-out
        }, 3000); // Delay before starting fade-out
      },
    });

    return () => {
      typewriter.stop();
    };
  }, [onComplete]);

  return (
    <PreloaderContainer isFadingOut={isFadingOut}>
      <IconContainer>
        <BoltSVG />
        <PulseAnimation />
      </IconContainer>
    </PreloaderContainer>
  );
};

export default Preloader;
