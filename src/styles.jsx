import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'; 

const colors = {
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
  background: ${(props) => (props.scrolled ? colors.richBlack : 'rgba(13, 28, 43, 0.27)')};
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
    color: #000;
    font-weight:700;
    background-color: ${colors.secondary};
    border:0.5px solid ${colors.platinum};
  }
`;


export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background: linear-gradient(135deg, #1b263b 30%, #415a77 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  padding:50px 10px;
  @media (max-width: 768px) {
    width: 200px;
    gap:20px;
  }
`;

export const SidebarLink = styled.a`
display:flex;
  font-size: 1rem;
  text-decoration: none;
  color: #f0f0f0;
  font-weight: 600;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: 80%;
  text-align: center;

  &:hover {
    background-color: #e0e1dd;
    color: #1b263b;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  &.active {
    background-color: #778da9;
    color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
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

/* Blob animation styles */
export const Blob = styled.div`
  position: absolute;
  width: 350px; /* Adjust size as needed */
  height: 350px; /* Adjust size as needed */
  background: linear-gradient(135deg, #0d1b2a, #e0e1dd); /* Linear gradient with your colors */
  opacity: 0.6; /* Adjust opacity as needed */
  border-radius: 50%;
  animation: blobAnimation 12s infinite ease-in-out;
  z-index: -1;
  pointer-events: none;
  top: 50%; /* Adjust positioning */
  left: 50%; /* Adjust positioning */
  transform: translate(-50%, -50%);
  mix-blend-mode: multiply; /* Blends the blob with the background */

  @keyframes blobAnimation {
    0% {
      transform: translate(-50%, -50%)rotate(0deg);
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    }
    25% {
      transform: translate(-50%, -50%) rotate(15deg);
      border-radius: 45% 55% 55% 45% / 55% 45% 55% 45%;
    }
    50% {
      transform: translate(-50%, -50%)rotate(-15deg);
      border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
    }
    75% {
      transform: translate(-50%, -50%)rotate(15deg);
      border-radius: 45% 55% 55% 45% / 55% 45% 55% 45%;
    }
    100% {
      transform: translate(-50%, -50%)rotate(0deg);
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    }
  }

  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

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

  @media (min-width: 480px) {
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
export const ButtonContainer = styled(motion.div)`


@media (max-width: 480px) {
    flex-direction: row;
    justify-content:center;
  }
`;
export const Button = styled(motion.a)`
display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #000;
  font-weight: 600;
  background-color: ${colors.platinum};
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  @media (min-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  }

  &:hover {
  background-color: ${colors.richBlack};
    color: #fff;
    border:1px solid #778da9;
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

  @media (max-width: 480px) {
    flex-direction: row;
  }
`;

export const Icon = styled.a`
  font-size: 1.75em;
  color: ${colors.platinum};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover, &:focus {
    transform: scale(1.2); /* Scale up on hover or focus */
  }

  @media (max-width: 768px) {
    font-size: 1.5em;

    &:hover, &:focus {
      transform: scale(1.1); /* Slightly smaller scale-up for mobile */
    }
  }
`;


export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled(motion.div)`
  background: #1b263b;
  padding: 5px;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;

  @media (max-width: 1024px) {
    max-width: 600px; /* Adjust for tablets */
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 5px; /* Adjust for mobile devices */
  }
`;

export const ModalTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;

  @media (max-width: 768px) {
    padding: 0px 5px; /* Adjust padding for smaller screens */
  }
`;

export const NameText = styled.h2`
  color: #e0e1dd;
  font-size: 24px;

  @media (max-width: 1024px) {
    font-size: 22px; /* Smaller font for tablets */
  }

  @media (max-width: 768px) {
    font-size: 20px; /* Smaller font for mobile */
  }
`;

export const TopBarButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px; /* Adjust gap for smaller screens */
  }
`;

export const TopBarButton = styled.button`
  background: #415a77;
  color: #e0e1dd;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #778da9;
  }

  @media (max-width: 1024px) {
    padding: 8px 18px; /* Adjust for tablets */
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 6px 12px; /* Adjust for mobile devices */
    font-size: 12px;
  }
`;

export const ModalIframe = styled.iframe`
  width: 100%;
  height: 650px;
  border-radius: 5px;

  @media (max-width: 1024px) {
    height: 550px; /* Adjust for tablets */
  }

  @media (max-width: 768px) {
    height: 450px; /* Adjust for mobile devices */
  }
`;


// export const CloseButton = styled(motion.button)`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: ${colors.richBlack};
//   color: ${colors.platinum};
//   border: none;
//   border-radius: 50%;
//   padding: 8px;
//   cursor: pointer;
//   font-size: 1.5em;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 768px) {
//     top: 5px;
//     right: 5px;
//     font-size: 1.2em;
//     padding: 6px;
//   }
// `;

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
