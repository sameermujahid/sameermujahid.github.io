// Hero.jsx — Apple-Inspired Hero Section
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import resumeData from '../data/resumeData';

import { RiTwitterXFill } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io5';
import {
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiEye,
} from 'react-icons/fi';

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
  HeroProfileDepthGlow,
  HeroProfileAmbientGlow,
  HeroScrollCircle
} from '../styles/styles';


// ─────────────────────────────────────────────────────────────────────────────
// UI icon mapping + centralized portfolio data
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_ICONS = {
  linkedin: <FiLinkedin />,
  github: <FiGithub />,
  instagram: <IoLogoInstagram />,
  twitter: <RiTwitterXFill />,
};

const SOCIAL_LINKS = resumeData.socials.map((social) => ({
  ...social,
  icon: SOCIAL_ICONS[social.key],
}));

// ─────────────────────────────────────────────────────────────────────────────
// Hero-specific depth lighting
//
// IMPORTANT:
// This is intentionally a RADIAL gradient.
// It does not create a visible rectangular/grey block behind the image.
// The light originates from the lower-left side of the portrait and fades
// smoothly into the black background.
// ─────────────────────────────────────────────────────────────────────────────




// ─────────────────────────────────────────────────────────────────────────────
// Very subtle secondary depth
//
// This is intentionally much weaker than the main white light.
// It prevents the image from looking like it is floating on a completely
// flat black background.
// ─────────────────────────────────────────────────────────────────────────────




// ─────────────────────────────────────────────────────────────────────────────
// Scroll indicator
// ─────────────────────────────────────────────────────────────────────────────




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
      setRoleIndex((current) => (current + 1) % resumeData.hero.roles.length);
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
              {resumeData.hero.availability}
            </HeroEyebrow>


            {/* Heading */}
            <HeroHeading variants={itemVariants}>
              {resumeData.hero.firstLine}{' '}
              <em>{resumeData.hero.highlightedName}</em>
              <br />
              {resumeData.hero.lastName}
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
                    color: resumeData.hero.roles[roleIndex].color,
                    fontWeight: 600,
                  }}
                >
                  {resumeData.hero.roles[roleIndex].title}
                </motion.span>

              </AnimatePresence>

              {' '}— {resumeData.hero.descriptionBeforeBreak}{' '}

              <br />

              {resumeData.hero.descriptionAfterBreak}
            </HeroRole>


            {/* Buttons */}
            <HeroButtons variants={itemVariants}>

              <PrimaryButton
                href={resumeData.assets.resumePDF}
                download={resumeData.hero.resumeDownloadName}
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
            <HeroProfileDepthGlow />

            {/*
              Extremely subtle blue ambient light on the opposite side.
              This is optional depth, not a visible blob.
            */}
            <HeroProfileAmbientGlow />


            {/* Profile */}
            <HeroImage
              src={resumeData.assets.profileImage}
              alt={resumeData.name}

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

            <HeroScrollCircle
              onClick={() => scrollToSection('about')}
              aria-label={resumeData.hero.scrollLabel}
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
            </HeroScrollCircle>

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
                  {resumeData.hero.resumeModalTitle}
                </ModalTitle>

                <ModalActions>

                  <ModalButton
                    as="a"
                    href={resumeData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect
                  </ModalButton>

                  <ModalButton
                    as="a"
                    href={resumeData.assets.resumePDF}
                    download={resumeData.hero.resumeDownloadName}
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
                title={resumeData.hero.resumeModalTitle}
                src={resumeData.assets.resumePDF}
              />

            </ModalContent>

          </ModalOverlay>

        )}

      </AnimatePresence>
    </>
  );
};

export default Hero;


