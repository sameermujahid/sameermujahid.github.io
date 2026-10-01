// Hero.jsx — Apple-Inspired Hero Section
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import {
  HeroContainer,
  HeroInner,
  HeroContent,
  HeroImageWrapper,
  HeroImage,
  HeroEyebrow,
  HeroHeading,
  HeroRole,
  HeroButtons,
  SocialIcons,
  SocialIcon,
  PrimaryButton,
  SecondaryButton,
  ModalOverlay,
  ModalContent,
  ModalTopBar,
  ModalTitle,
  ModalActions,
  ModalButton,
  ModalIframe,
} from '../styles/styles';

import profileImage from '../assets/profile.webp';
import resumePDF from '../assets/sameer_mujahid_resume.pdf';

import { RiTwitterXFill } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io5';
import {
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiEye,
} from 'react-icons/fi';


// ─────────────────────────────────────────────────────────────────────────────
// Roles
// ─────────────────────────────────────────────────────────────────────────────

const ROLES = [
  {
    title: 'AI / ML Engineer',
    color: '#2997ff',
  },
  {
    title: 'Data Scientist',
    color: '#34c759',
  },
  {
    title: 'Data Analyst',
    color: '#ff9f0a',
  },
];


// ─────────────────────────────────────────────────────────────────────────────
// Social links
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/shaik-sameer-mujahid/',
    label: 'LinkedIn',
    icon: <FiLinkedin />,
  },
  {
    href: 'https://github.com/sameermujahid',
    label: 'GitHub',
    icon: <FiGithub />,
  },
  {
    href: 'https://www.instagram.com/sameer.mujahid/',
    label: 'Instagram',
    icon: <IoLogoInstagram />,
  },
  {
    href: 'https://x.com/sameer__mujahid',
    label: 'Twitter',
    icon: <RiTwitterXFill />,
  },
];


// ─────────────────────────────────────────────────────────────────────────────
// Hero-specific depth lighting
//
// IMPORTANT:
// This is intentionally a RADIAL gradient.
// It does not create a visible rectangular/grey block behind the image.
// The light originates from the lower-left side of the portrait and fades
// smoothly into the black background.
// ─────────────────────────────────────────────────────────────────────────────

const ProfileDepthGlow = styled.div`
  position: absolute;

  /*
   * Slightly larger than the portrait so the light can breathe
   * around the lower-left edge.
   */
  width: 500px;
  height: 500px;

  /*
   * Put the light toward the lower-left of the image.
   */
  left: -30px;
  bottom: -30px;

  z-index: 0;
  pointer-events: none;

  /*
   * Soft white light.
   *
   * The important part is that it remains transparent around
   * the outer edges instead of becoming a grey circular/blob shape.
   */
  background:
    radial-gradient(
      ellipse 58% 58% at 28% 68%,
      rgba(255, 255, 255, 0.30) 0%,
      rgba(255, 255, 255, 0.20) 18%,
      rgba(255, 255, 255, 0.10) 34%,
      rgba(255, 255, 255, 0.045) 50%,
      rgba(255, 255, 255, 0.00) 74%
    );

  /*
   * Blur makes the light blend into the page rather than
   * looking like a visible shape.
   */
  filter: blur(26px);

  opacity: 0.95;

  transform: translateZ(0);

  /*
   * Keeps the glow cheap to render.
   */
  will-change: transform;

  @media (max-width: 768px) {
    width: 310px;
    height: 280px;

    left: -70px;
    bottom: -58px;

    filter: blur(24px);

    background:
      radial-gradient(
        ellipse 58% 58% at 30% 68%,
        rgba(255, 255, 255, 0.24) 0%,
        rgba(255, 255, 255, 0.15) 22%,
        rgba(255, 255, 255, 0.07) 40%,
        rgba(255, 255, 255, 0) 74%
      );
  }

  @media (max-width: 480px) {
    width: 270px;
    height: 240px;

    left: -52px;
    bottom: -48px;

    filter: blur(22px);
  }

  @media (prefers-reduced-motion: reduce) {
    will-change: auto;
  }
`;


// ─────────────────────────────────────────────────────────────────────────────
// Very subtle secondary depth
//
// This is intentionally much weaker than the main white light.
// It prevents the image from looking like it is floating on a completely
// flat black background.
// ─────────────────────────────────────────────────────────────────────────────

const ProfileAmbientGlow = styled.div`
  position: absolute;

  width: 330px;
  height: 330px;

  right: -65px;
  top: 15px;

  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(
      circle,
      rgba(41, 151, 255, 0.055) 0%,
      rgba(41, 151, 255, 0.025) 35%,
      rgba(41, 151, 255, 0) 72%
    );

  filter: blur(34px);

  opacity: 0.8;

  transform: translateZ(0);

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;

    right: -55px;
    top: 10px;

    filter: blur(28px);
  }
`;


// ─────────────────────────────────────────────────────────────────────────────
// Scroll indicator
// ─────────────────────────────────────────────────────────────────────────────

const ScrollCircle = styled(motion.button)`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.border};

  background: ${({ theme }) => theme.glass};

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: ${({ theme }) => theme.textSecondary};

  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.accent};
    outline-offset: 3px;
  }
`;


// ─────────────────────────────────────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};


// ─────────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────────

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % ROLES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Lock page scrolling while resume modal is open
  useEffect(() => {
    if (!showModal) {
      document.body.style.overflow = '';
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showModal]);

  // Escape closes resume modal
  useEffect(() => {
    if (!showModal) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      80;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* ═════════════════════════════════════════════════════════════════════
          HERO
      ═════════════════════════════════════════════════════════════════════ */}

      <HeroContainer id="home">

        <HeroInner>

          {/* ═══════════════════════════════════════════════════════════════
              LEFT — HERO CONTENT
          ═══════════════════════════════════════════════════════════════ */}

          <HeroContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Availability */}
            <HeroEyebrow variants={itemVariants}>
              <span />
              Available for opportunities
            </HeroEyebrow>


            {/* Heading */}
            <HeroHeading variants={itemVariants}>
              Hi, I'm{' '}
              <em>SK Sameer</em>
              <br />
              Mujahid
            </HeroHeading>


            {/* Dynamic role */}
            <HeroRole
              as={motion.div}
              variants={itemVariants}
            >
              <AnimatePresence mode="wait">

                <motion.span
                  key={roleIndex}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.38,
                    ease: 'easeOut',
                  }}
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


            {/* Buttons */}
            <HeroButtons variants={itemVariants}>

              <PrimaryButton
                href={resumePDF}
                download="sameer_mujahid_resume.pdf"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <FiDownload size={15} />
                Download Resume
              </PrimaryButton>


              <SecondaryButton
                as={motion.button}
                onClick={() => setShowModal(true)}
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <FiEye size={15} />
                View Resume
              </SecondaryButton>

            </HeroButtons>


            {/* Social icons */}
            <SocialIcons variants={itemVariants}>

              {SOCIAL_LINKS.map(
                ({ href, label, icon }) => (
                  <SocialIcon
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}

                    whileHover={{
                      scale: 1.12,
                      y: -3,
                    }}

                    whileTap={{
                      scale: 0.93,
                    }}
                  >
                    {icon}
                  </SocialIcon>
                )
              )}

            </SocialIcons>

          </HeroContent>


          {/* ═══════════════════════════════════════════════════════════════
              RIGHT — PROFILE IMAGE
          ═══════════════════════════════════════════════════════════════ */}

          <HeroImageWrapper
            initial={{
              opacity: 0,
              scale: 0.88,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >

            {/*
              MAIN WHITE DEPTH LIGHT

              This sits behind the LOWER-LEFT portion of the portrait.
              It is intentionally not centered on the image.
            */}
            <ProfileDepthGlow />

            {/*
              Extremely subtle blue ambient light on the opposite side.
              This is optional depth, not a visible blob.
            */}
            <ProfileAmbientGlow />


            {/* Profile */}
            <HeroImage
              src={profileImage}
              alt="SK Sameer Mujahid"

              whileHover={{
                scale: 1.035,
              }}

              transition={{
                duration: 0.4,
                ease: 'easeOut',
              }}
            />

          </HeroImageWrapper>

        </HeroInner>


        {/* ═════════════════════════════════════════════════════════════════
            SCROLL INDICATOR
        ═════════════════════════════════════════════════════════════════ */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
          }}
          style={{
            position: 'absolute',
            bottom: 28,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >

            <ScrollCircle
              onClick={() => scrollToSection('about')}
              aria-label="Scroll to About section"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </ScrollCircle>

          </motion.div>

        </motion.div>

      </HeroContainer>


      {/* ═══════════════════════════════════════════════════════════════════
          RESUME MODAL
      ═══════════════════════════════════════════════════════════════════ */}

      <AnimatePresence>

        {showModal && (

          <ModalOverlay
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.22,
            }}
            onClick={() => setShowModal(false)}
          >

            <ModalContent
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 24,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 24,
              }}
              transition={{
                duration: 0.32,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              onClick={(event) => event.stopPropagation()}
            >

              <ModalTopBar>

                <ModalTitle>
                  SK Sameer Mujahid — Resume
                </ModalTitle>

                <ModalActions>

                  <ModalButton
                    as="a"
                    href="https://www.linkedin.com/in/shaik-sameer-mujahid/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect
                  </ModalButton>

                  <ModalButton
                    as="a"
                    href={resumePDF}
                    download="sameer_mujahid_resume.pdf"
                  >
                    Download
                  </ModalButton>

                  <ModalButton
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </ModalButton>

                </ModalActions>

              </ModalTopBar>


              <ModalIframe
                title="Resume"
                src={resumePDF}
              />

            </ModalContent>

          </ModalOverlay>

        )}

      </AnimatePresence>
    </>
  );
};

export default Hero;