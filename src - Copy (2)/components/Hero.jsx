// Hero.jsx — Apple-inspired hero with a lightweight portrait glow
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import {
  HeroContainer, HeroInner, HeroContent, HeroImageWrapper,
  HeroImage, HeroEyebrow, HeroHeading, HeroRole, HeroButtons,
  SocialIcons, SocialIcon, PrimaryButton, SecondaryButton,
  ModalOverlay, ModalContent, ModalTopBar, ModalTitle,
  ModalActions, ModalButton, ModalIframe
} from '../styles/styles';
import profileImage from '../assets/profile.webp';
import resumePDF from '../assets/sameer_mujahid_resume.pdf';
import { RiTwitterXFill } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io5';
import { FiGithub, FiLinkedin, FiDownload, FiEye } from 'react-icons/fi';

const ROLES = [
  { title: 'AI / ML Engineer', color: '#2997ff' },
  { title: 'Data Scientist', color: '#34c759' },
  { title: 'Data Analyst', color: '#ff9f0a' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/shaik-sameer-mujahid/', label: 'LinkedIn', icon: <FiLinkedin /> },
  { href: 'https://github.com/sameermujahid', label: 'GitHub', icon: <FiGithub /> },
  { href: 'https://www.instagram.com/sameer.mujahid/', label: 'Instagram', icon: <IoLogoInstagram /> },
  { href: 'https://x.com/sameer__mujahid', label: 'Twitter', icon: <RiTwitterXFill /> },
];

const ScrollCircle = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.textSecondary};
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }
`;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = showModal ? 'hidden' : previous;
    return () => {
      document.body.style.overflow = previous;
    };
  }, [showModal]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroInner>
          <HeroContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroEyebrow variants={itemVariants}>
              <span />
              Available for opportunities
            </HeroEyebrow>

            <HeroHeading variants={itemVariants}>
              Hi, I'm{' '}
              <em>SK Sameer</em>
              <br />
              Mujahid
            </HeroHeading>

            <HeroRole as={motion.div} variants={itemVariants}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  style={{
                    display: 'inline-block',
                    color: ROLES[roleIndex].color,
                    fontWeight: 600,
                  }}
                >
                  {ROLES[roleIndex].title}
                </motion.span>
              </AnimatePresence>
              {' '}— Building intelligent systems and{' '}
              <br />
              data-driven solutions that matter.
            </HeroRole>

            <HeroButtons variants={itemVariants}>
              <PrimaryButton
                href={resumePDF}
                download="sameer_mujahid_resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiDownload size={15} />
                Download Resume
              </PrimaryButton>

              <SecondaryButton
                as={motion.button}
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiEye size={15} />
                View Resume
              </SecondaryButton>
            </HeroButtons>

            <SocialIcons variants={itemVariants}>
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <SocialIcon
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </SocialIcon>
              ))}
            </SocialIcons>
          </HeroContent>

          <HeroImageWrapper
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <HeroImage
              src={profileImage}
              alt="SK Sameer Mujahid"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            />
          </HeroImageWrapper>
        </HeroInner>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.35 }}
          style={{
            position: 'absolute',
            bottom: 28,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ScrollCircle onClick={() => scrollToSection('about')} aria-label="Scroll to About">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </ScrollCircle>
          </motion.div>
        </motion.div>
      </HeroContainer>

      <AnimatePresence>
        {showModal && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowModal(false)}
          >
            <ModalContent
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 18 }}
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalTopBar>
                <ModalTitle>SK Sameer Mujahid — Resume</ModalTitle>
                <ModalActions>
                  <ModalButton as="a" href="https://www.linkedin.com/in/shaik-sameer-mujahid/" target="_blank" rel="noopener noreferrer">
                    Connect
                  </ModalButton>
                  <ModalButton as="a" href={resumePDF} download="sameer_mujahid_resume.pdf">
                    Download
                  </ModalButton>
                  <ModalButton onClick={() => setShowModal(false)}>Close</ModalButton>
                </ModalActions>
              </ModalTopBar>
              <ModalIframe title="Resume" src={resumePDF} />
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
