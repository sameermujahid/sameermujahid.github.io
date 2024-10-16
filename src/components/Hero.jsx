import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Container, VideoBackground, Section, CardContainer, Card, Heading, RoleText, Description, Button, ArrowButton,
  SocialIcons, Icon, ModalOverlay, ModalContent, CloseButton, ImageContainer, Image, LeftArrowSVG, RightArrowSVG, ModalIframe, ButtonContainer, Blob, // Import the Blob styled component
  ModalTopBar, TopBarButton, TopBarButtonGroup, NameText // New imports
} from '../styles';
import profileImage from '../assets/profile.jpg';
import backgroundVideo from '../assets/background-video.mp4';
import resumePDF from '../assets/shaik_sameer_muajhid_resume.pdf';
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const roles = [
    {
      title: 'Front End Developer',
      description: 'Build and maintain the user interface of web applications using HTML, CSS, and JavaScript. Experience with frameworks like React or Angular is a plus.'
    },
    {
      title: 'Data Analyst',
      description: 'Analyze data to provide insights and support business decisions using tools like Excel, SQL, and Python. Strong analytical skills and data visualization experience are required.'
    },
  ];

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'unset';
  }, [showModal]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleCardChange = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % roles.length;
      } else {
        return (prevIndex - 1 + roles.length) % roles.length;
      }
    });
  };
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ScrollArrow = () => (
    <Button
      onClick={scrollToAbout}
      style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',color:'#fff', backgroundColor:'rgba(59, 92, 142, 0.1)',padding:'10px', borderRadius:'50px' }}
    >
<FaArrowDown/>    </Button>
  );

  return (
    <Container id="home">
      <SocialIcons
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Icon href="https://www.linkedin.com/in/shaik-sameer-mujahid/" target="_blank" aria-label="LinkedIn Profile" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}><FiLinkedin /></Icon>
        <Icon href="https://github.com/sameermujahid" target="_blank" aria-label="GitHub Profile" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}><FiGithub /></Icon>
        <Icon href="https://www.instagram.com/sameer.mujahid/" target="_blank" aria-label="Instagram Profile" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}><IoLogoInstagram /></Icon>
        <Icon href="https://x.com/sameer__mujahid" target="_blank" aria-label="Twitter Profile" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}><RiTwitterXFill /></Icon>
      </SocialIcons>
      <VideoBackground autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ position: 'relative' }}
      >
        <Heading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Hi, I am SK Sameer Mujahid
        </Heading>
        <CardContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <RoleText
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[activeIndex].title}
                </RoleText>
                <Description
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[activeIndex].description}
                </Description>
              </Card>
            </motion.div>
          </AnimatePresence>
       
        </CardContainer>
        
        <ArrowButton onClick={() => handleCardChange('prev')}>{LeftArrowSVG}</ArrowButton>
        <ArrowButton onClick={() => handleCardChange('next')}>{RightArrowSVG}</ArrowButton>
        <ButtonContainer style={{ display: 'flex', gap: '10px' }}>
          <Button
            href={resumePDF}
            download="shaik_sameer_muajhid_resume.pdf"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Download Resume
          </Button>
          <Button
            onClick={openModal}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            View Resume
          </Button>
        </ButtonContainer>
      </Section>
      <Section
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Blob /> {/* Add the Blob component here */}
        <ImageContainer
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'relative' }}
        >
          <Image
            src={profileImage}
            alt="Profile"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </ImageContainer>
      </Section>        <ScrollArrow /> {/* Place the scroll arrow here */}

      {showModal && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            >
              <ModalContent
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside content
              >
                <ModalTopBar>
                  <NameText>SK Sameer Mujahid</NameText>
                  <TopBarButtonGroup>
        <TopBarButton onClick={() => window.open('https://www.linkedin.com/in/shaik-sameer-mujahid/', '_blank')}>
          Connect
        </TopBarButton>
        <a href={resumePDF} download="shaik_sameer_muajhid_resume.pdf" style={{ textDecoration: 'none' }}>
          <TopBarButton>Download</TopBarButton>
        </a>
        <TopBarButton onClick={closeModal}>Close</TopBarButton>
      </TopBarButtonGroup>
                </ModalTopBar>
                <ModalIframe
                  title="resume"
                  src={resumePDF}
                  frameBorder="0"
                ></ModalIframe>
              </ModalContent>
            </ModalOverlay>
          )}
    </Container>
  );
};

export default Hero;