// styles.js
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

// Retro pixel font from Google Fonts
const pixelFont = 'Press Start 2P, cursive';

// Keyframes for retro animations
const blink = keyframes`
  50% { opacity: 0; }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #000;
  color: #fff;
  font-family: ${pixelFont};
`;

export const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.3);
`;

export const Section = styled(motion.div)`
  margin: 20px 0;
  text-align: center;
`;

export const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Card = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #fff;
  padding: 20px;
  width: 300px;
  margin: 0 20px;
`;

export const Heading = styled(motion.h1)`
  font-size: 2.5rem;
  animation: ${blink} 1s linear infinite;
`;

export const RoleText = styled(motion.h2)`
  font-size: 1.5rem;
  margin: 10px 0;
`;

export const Description = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.5;
`;

export const Button = styled(motion.a)`
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background: #ffcc00;
  color: #000;
  text-decoration: none;
  border: 2px solid #fff;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    color: #ffcc00;
  }
`;

export const SocialIcons = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Icon = styled(motion.a)`
  color: #fff;
  font-size: 2rem;
  margin: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled(motion.div)`
  background: #000;
  border: 2px solid #fff;
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: relative;
`;

export const ModalTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const NameText = styled.div`
  font-size: 1.5rem;
`;

export const TopBarButtonGroup = styled.div`
  display: flex;
`;

export const TopBarButton = styled.button`
  background: #ffcc00;
  color: #000;
  border: 2px solid #fff;
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    background: #fff;
    color: #000;
  }
`;

export const ModalIframe = styled.iframe`
  width: 100%;
  height: 80vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Blob = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background: #ffcc00;
  border-radius: 50%;
  filter: blur(50px);
`;

export const ImageContainer = styled(motion.div)`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border: 5px solid #ffcc00;
  margin: 20px auto;
`;
export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #f0f0f0;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #e0e1dd;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LeftArrowSVG = <span>&lt;</span>; // Replace with actual SVG if needed
export const RightArrowSVG = <span>&gt;</span>; // Replace with actual SVG if needed
