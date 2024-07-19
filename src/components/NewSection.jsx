import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  background-color: red;
  height: 100vh; /* Adjust height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  overflow: hidden;
`;

const Text = styled.h1`
  background-color: black; /* Semi-transparent background */
  color: white;
  font-size: 100px;
  font-weight: bold;
  margin: 0;
  padding: 20px; /* Adjust padding */
  mix-blend-mode: multiply;
  text-align: center;
  transform-origin: center;
  transition: transform 0.3s ease-in-out; /* Smooth transition for transform */
`;

const StyledSection = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current && containerRef.current) {
        const scrollY = window.scrollY;
        const containerOffsetTop = containerRef.current.offsetTop;
        const containerHeight = containerRef.current.offsetHeight;

        // Calculate zoom effect based on scroll position relative to the container
        let scale = 1;
        if (scrollY >= containerOffsetTop && scrollY <= containerOffsetTop + containerHeight) {
          scale = 1 + ((scrollY - containerOffsetTop) / containerHeight) * 0.5;
        }

        // Limit scale to a maximum of 1.5 times
        scale = Math.min(scale, 1.5);

        // Apply scale to text
        textRef.current.style.transform = `scale(${scale})`;

        // Center the text vertically within the container
        const textHeight = textRef.current.offsetHeight;
        const offsetY = (containerHeight - textHeight * scale) / 2;
        textRef.current.style.top = `${offsetY}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <Text ref={textRef}>LET'S CONNECT</Text>
    </Container>
  );
};

export default StyledSection;
