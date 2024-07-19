import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'; 

const colors = {
  primary: '#1b263b',
  secondary: '#778da9',
  accent: '#e0e1dd',
    richBlack: '#0d1b2aff',
    platinum: '#e0e1ddff',
        indicatorInactive: '#c4c4c4',
        indicatorActive: '#415a77',
    };
const fontSize = {
  large: '24px',
  medium: '18px',
  small: '16px',
};
//topbar
export const TopBarContainer = styled.div`
  top: 10px;
  box-shadow: 0 0 10px ${colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.scrolled ? '10px' : '20px')};
  background: ${(props) => (props.scrolled ? colors.primary : 'rgba(13, 28, 43, 0.27)')};
  color: ${colors.accent};
  transition: background 0.3s ease, padding 0.3s ease, width 0.3s ease;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: ${(props) => (props.scrolled ? '30%' : '60%')};
  border-radius: 25px;
  z-index: 3;

  @media (max-width: 1024px) {
    width: ${(props) => (props.scrolled ? '40%' : '60%')};
  }

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    flex-direction: row;
    padding: ${(props) => (props.scrolled ? '10px' : '15px')};
    width: auto;
    border-radius: 0px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoText = styled.span`
  font-size: ${fontSize.large};
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  color: ${colors.accent};
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.scrolled ? '0' : '1')};
  display: ${(props) => (props.scrolled ? 'none' : 'inline-block')};

  @media (max-width: 768px) {
    font-size: ${fontSize.medium};
  }
`;

export const LogoImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: ${(props) => (props.scrolled ? 'block' : 'none')};

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${colors.accent};
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: ${fontSize.small};
  transition: color 0.3s ease, background-color 0.3s ease;
  padding: 5px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    color: ${colors.secondary};
  }

  &.active {
    color: white;
    background-color: ${colors.secondary};
  }
`;

export const Sidebar = styled.div`
  display: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background: ${colors.primary};
  color: ${colors.accent};
  padding: 20px;
  box-shadow: 0 0 10px ${colors.secondary};
  z-index: 4;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SidebarLink = styled.a`
  color: ${colors.accent};
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: ${fontSize.medium};
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    color: ${colors.secondary};
  }

  &.active {
    color: white;
    background-color: ${colors.secondary};
  }
`;

export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: ${fontSize.large};
  color: ${colors.accent};

  @media (max-width: 768px) {
    display: block;
  }
`;
//hero
export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 10%;
  height: 80vh;
  position: relative;
  color: ${colors.platinum};
  gap: 20px;
  flex-direction: column-reverse;

  @media (min-width: 426px) {
    flex-direction: row;
  }
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const Section = styled(motion.div)`
  max-width: 60%;
  z-index: 2;

  &:first-of-type {
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CardContainer = styled(motion.div)`
  max-height: 300px;
  overflow: hidden;
  position: relative;
`;

export const Card = styled(motion.div)`
  opacity: ${({ isExiting }) => (isExiting ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
`;

export const Heading = styled(motion.h1)`
  font-size: 2.5em;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const RoleText = styled(motion.div)`
  font-size: 1.2em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const Description = styled(motion.p)`
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const Button = styled(motion.a)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  color: ${colors.richBlack};
  font-weight: 600;
  background-color: ${colors.platinum};
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const ArrowButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2em;
  color: ${colors.platinum};
  padding: 0;
  margin: 0 10px 10px 0;
  
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const SocialIcons = styled(motion.div)`
  display: flex;
  gap: 10px;
  flex-direction: column;

  @media (max-width: 425px) {
    flex-direction: row;
  }
`;

export const Icon = styled(motion.a)`
  font-size: 2em;
  color: ${colors.platinum};
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

export const ModalContent = styled(motion.div)`
  background-color: ${colors.platinum};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 90%;
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 95%;
    height: 95%;
    padding: 10px;
  }
`;

export const CloseButton = styled(motion.button)`
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5em;
  cursor: pointer;
  color: ${colors.richBlack};
`;

export const ImageContainer = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LeftArrowSVG = (
  <svg fill={colors.platinum} height="24" width="24" viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg">
    <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394 c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"/>
  </svg>
);

export const RightArrowSVG = (
  <svg fill={colors.platinum} height="24" width="24" viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg">
    <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605 l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396 l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998 c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"/>
  </svg>
);
//certificates
