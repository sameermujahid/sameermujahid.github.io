import React, { useState, useEffect } from 'react';
import { 
  Container, VideoBackground, Section, CardContainer, Card, Heading, RoleText, Description, Button, ArrowButton, 
  SocialIcons, Icon, ModalOverlay, ModalContent, CloseButton, ImageContainer, Image, LeftArrowSVG, RightArrowSVG 
} from '../styles';
import profileImage from '../assets/profile.jpg';
import backgroundVideo from '../assets/background-video.mp4';
import resumePDF from '../assets/shaik_sameer_muajhid_resume.pdf';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'; 

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
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
    {
      title: 'UI/UX Designer',
      description: 'Design user-friendly interfaces and improve user experience by creating wireframes, prototypes, and conducting usability tests. Proficiency in tools like Figma or Adobe XD is needed.'
    },
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsExiting(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'unset';
  }, [showModal]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleCardChange = (direction) => {
    setIsExiting(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => {
        if (direction === 'next') {
          return (prevIndex + 1) % roles.length;
        } else {
          return (prevIndex - 1 + roles.length) % roles.length;
        }
      });
      setIsExiting(false);
    }, 500);
  };

  return (
    <Container id="home">
      <SocialIcons
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Icon href="https://www.linkedin.com/in/your-profile" target="_blank" aria-label="LinkedIn Profile" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}><AiFillLinkedin /></Icon>
        <Icon href="https://github.com/your-profile" target="_blank" aria-label="GitHub Profile" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}><AiFillGithub /></Icon>
        <Icon href="https://www.instagram.com/your-profile" target="_blank" aria-label="Instagram Profile" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}><AiFillInstagram /></Icon>
        <Icon href="https://twitter.com/your-profile" target="_blank" aria-label="Twitter Profile" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}><AiFillTwitterCircle /></Icon>
      </SocialIcons>
      <VideoBackground autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
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
          <Card isExiting={isExiting}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
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
              >
                <CloseButton onClick={closeModal} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>X</CloseButton>
                <iframe
                  title="resume"
                  src={resumePDF}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </ModalContent>
            </ModalOverlay>
          )}
        </CardContainer>
        <ArrowButton onClick={() => handleCardChange('prev')}>{LeftArrowSVG}</ArrowButton>
        <ArrowButton onClick={() => handleCardChange('next')}>{RightArrowSVG}</ArrowButton>
        <div style={{ display: 'flex', gap: '10px' }}>
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
        </div>
      </Section>
      <Section
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <ImageContainer
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={profileImage}
            alt="Profile"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </ImageContainer>
      </Section>
    </Container>
  );
};

export default Hero;
