// AboutMe.jsx
import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlassCard, SectionLabel, SectionTitle, SocialIcon } from '../styles/styles';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import aboutImage from '../assets/about5.jpg';
import { RiTwitterXFill } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io5';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Wrapper = styled.section`
  max-width: 1350px;
  margin: 0 auto;
  padding: 80px 24px;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: end;
  margin-top: 56px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 36px;
  }
`;

const ImageSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ImageContainer = styled.div`
  perspective: 1200px;

  img {
    width: 100%;
    max-height: 320px;
    border-radius: 24px;
    object-fit: cover;
    will-change: transform;
    transform-style: preserve-3d;
    transition: transform 0.15s ease-out, filter 0.4s ease, box-shadow 0.4s ease;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
    filter: grayscale(80%);

    @media (max-width: 768px) {
      max-height: 260px;
      border-radius: 18px;
    }
  }
`;

const ContentCard = styled(GlassCard)`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 36px;

  @media (max-width: 480px) {
    padding: 22px;
    gap: 18px;
  }
`;

const Name = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.textPrimary};

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const Body = styled.p`
  font-size: 0.9375rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.textSecondary};
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border};
`;

const StatsRow = styled.div`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const StatNum = styled.span`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.accent};
`;

const StatLabel = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textTertiary};
  font-weight: 500;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 8px;
`;

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/shaik-samee_r-mujahid/', icon: <FiLinkedin />,      label: 'LinkedIn'  },
  { href: 'https://github.com/sameermujahid',                  icon: <FiGithub />,        label: 'GitHub'    },
  { href: 'https://www.instagram.com/sameer.mujahid/',         icon: <IoLogoInstagram />, label: 'Instagram' },
  { href: 'https://x.com/sameer__mujahid',                     icon: <RiTwitterXFill />,  label: 'Twitter'   },
];

const AboutMe = () => {
  const { ref, isInView } = useScrollAnimation();
  const imageRef = useRef(null);
  const rafRef   = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      imageRef.current.style.transition = 'transform 0.1s ease-out, filter 0.3s ease';
      imageRef.current.style.transform  = `perspective(1200px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.04)`;
      imageRef.current.style.filter     = 'grayscale(0%)';
      imageRef.current.style.boxShadow  = `${x * -20}px ${y * -20}px 50px rgba(0,0,0,0.25)`;
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    cancelAnimationFrame(rafRef.current);
    imageRef.current.style.transition = 'transform 0.6s cubic-bezier(0.22,1,0.36,1), filter 0.5s ease, box-shadow 0.5s ease';
    imageRef.current.style.transform  = 'perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1)';
    imageRef.current.style.filter     = 'grayscale(80%)';
    imageRef.current.style.boxShadow  = '0 12px 48px rgba(0,0,0,0.3)';
  };

  return (
    <Wrapper id="about" ref={ref} data-perf-section="true">
      <Grid>
        {/* Left */}
        <ImageSide>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <SectionLabel variants={staggerItem}>About</SectionLabel>
            <SectionTitle variants={staggerItem}>
              Who I am,<br />and what I do.
            </SectionTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ImageContainer
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img ref={imageRef} src={aboutImage} alt="About SK Sameer Mujahid" loading="lazy" decoding="async" />
            </ImageContainer>
          </motion.div>
        </ImageSide>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ContentCard>
            <Name>SK Sameer Mujahid</Name>

            <Body>
              Hello! I'm a passionate engineer specializing in AI, machine learning, and full-stack development.
              My work spans LLMs, RAG systems, data pipelines, and web applications turning complex problems
              into elegant, scalable solutions.
            </Body>

            <Body>
              I thrive at the intersection of data and software, always exploring new frameworks,
              contributing to projects, and growing both technically and creatively.
            </Body>

            <Divider />

            <StatsRow>
              <Stat>
                <StatNum>1+</StatNum>
                <StatLabel>Years experience</StatLabel>
              </Stat>
              <Stat>
                <StatNum>15+</StatNum>
                <StatLabel>Projects built</StatLabel>
              </Stat>
              <Stat>
                <StatNum>3+</StatNum>
                <StatLabel>Certifications</StatLabel>
              </Stat>
            </StatsRow>

            <Divider />

            <SocialRow>
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <SocialIcon
                  key={label}
                  as={motion.a}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.93 }}
                >
                  {icon}
                </SocialIcon>
              ))}
            </SocialRow>
          </ContentCard>
        </motion.div>
      </Grid>
    </Wrapper>
  );
};

export default AboutMe;
