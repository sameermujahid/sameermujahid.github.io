// AboutMe.jsx

import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  GlassCard,
  SectionLabel,
  SectionTitle,
  SocialIcon,
} from '../styles/styles';
import {
  useScrollAnimation,
  staggerContainer,
  staggerItem,
} from '../hooks/useScrollAnimation';
import { RiTwitterXFill } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io5';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import resumeData from '../data/resumeData';
import { SpotlightGlow } from './SpotlightEffects';

// ─── Wrapper ──────────────────────────────────────────────────────────────────

const Wrapper = styled.section`
  max-width: 1350px;
  margin: 0 auto;
  padding: 80px 24px;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

// ─── Grid ─────────────────────────────────────────────────────────────────────

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

// ─── Image ────────────────────────────────────────────────────────────────────

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

    transition:
      transform 0.15s ease-out,
      filter 0.4s ease,
      box-shadow 0.4s ease;

    box-shadow:
      0 12px 48px rgba(0, 0, 0, 0.3);

    filter: grayscale(80%);

    @media (max-width: 768px) {
      max-height: 260px;
      border-radius: 18px;
    }
  }
`;

// ─── Content Card ─────────────────────────────────────────────────────────────

const ContentCard = styled(GlassCard)`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 36px;

  @media (max-width: 480px) {
    padding: 22px;
    gap: 18px;
  }
`;

/*
 * Everything inside the card sits above the spotlight.
 */
const CardContent = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 480px) {
    gap: 18px;
  }
`;

// ─── Typography ───────────────────────────────────────────────────────────────

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
  margin: 0;
`;

// ─── Divider ──────────────────────────────────────────────────────────────────

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border};
  width: 100%;
`;

// ─── Stats ────────────────────────────────────────────────────────────────────

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

// ─── Socials ──────────────────────────────────────────────────────────────────

const SocialRow = styled.div`
  display: flex;
  gap: 8px;
`;

// ─── Social Icons ──────────────────────────────────────────────────────────────

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

// ─── Component ─────────────────────────────────────────────────────────────────

const AboutMe = () => {
  const { ref, isInView } = useScrollAnimation();

  const imageRef = useRef(null);
  const rafRef = useRef(null);

  // ───────────────────────────────────────────────────────────────────────────
  // Image tilt
  // ───────────────────────────────────────────────────────────────────────────

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const rect =
        imageRef.current.getBoundingClientRect();

      const x =
        (e.clientX - rect.left) /
          rect.width -
        0.5;

      const y =
        (e.clientY - rect.top) /
          rect.height -
        0.5;

      imageRef.current.style.transition =
        'transform 0.1s ease-out, filter 0.3s ease';

      imageRef.current.style.transform = `
        perspective(1200px)
        rotateY(${x * 14}deg)
        rotateX(${-y * 14}deg)
        scale(1.04)
      `;

      imageRef.current.style.filter =
        'grayscale(0%)';

      imageRef.current.style.boxShadow = `
        ${x * -20}px
        ${y * -20}px
        50px
        rgba(0,0,0,0.25)
      `;
    });
  };

  // ───────────────────────────────────────────────────────────────────────────

  const handleMouseLeave = () => {
    if (!imageRef.current) return;

    cancelAnimationFrame(rafRef.current);

    imageRef.current.style.transition =
      'transform 0.6s cubic-bezier(0.22,1,0.36,1), filter 0.5s ease, box-shadow 0.5s ease';

    imageRef.current.style.transform =
      'perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1)';

    imageRef.current.style.filter =
      'grayscale(80%)';

    imageRef.current.style.boxShadow =
      '0 12px 48px rgba(0,0,0,0.3)';
  };

  // ───────────────────────────────────────────────────────────────────────────
  // Render
  // ───────────────────────────────────────────────────────────────────────────

  return (
    <Wrapper
      id="about"
      ref={ref}
      data-perf-section="true"
    >
      <Grid>

        {/* ───────────────────────── LEFT ───────────────────────── */}

        <ImageSide>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={
              isInView
                ? 'visible'
                : 'hidden'
            }
          >
            <SectionLabel variants={staggerItem}>
              {resumeData.about.label}
            </SectionLabel>

            <SectionTitle variants={staggerItem}>
              {resumeData.about.titleLineOne}
              <br />
              {resumeData.about.titleLineTwo}
            </SectionTitle>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [
                0.25,
                0.46,
                0.45,
                0.94,
              ],
            }}
          >
            <ImageContainer
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                ref={imageRef}
                src={resumeData.assets.aboutImage}
                alt={resumeData.about.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </ImageContainer>
          </motion.div>

        </ImageSide>

        {/* ───────────────────────── RIGHT ──────────────────────── */}

        <motion.div
          initial={{
            opacity: 0,
            x: 32,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {}
          }
          transition={{
            duration: 0.75,
            delay: 0.15,
            ease: [
              0.25,
              0.46,
              0.45,
              0.94,
            ],
          }}
        >

          {/* Spotlight-enabled content card */}
          <ContentCard data-spotlight="true">

            {/* Global spotlight glow */}
            <SpotlightGlow />

            {/* Card content above spotlight */}
            <CardContent>

              <Name>
                {resumeData.name}
              </Name>

              {resumeData.about.paragraphs.map(
                (paragraph) => (
                  <Body key={paragraph}>
                    {paragraph}
                  </Body>
                )
              )}

              <Divider />

              <StatsRow>
                {resumeData.about.stats.map(
                  (stat) => (
                    <Stat key={stat.label}>
                      <StatNum>
                        {stat.value}
                      </StatNum>

                      <StatLabel>
                        {stat.label}
                      </StatLabel>
                    </Stat>
                  )
                )}
              </StatsRow>

              <Divider />

              <SocialRow>
                {SOCIAL_LINKS.map(
                  ({
                    href,
                    icon,
                    label,
                  }) => (
                    <SocialIcon
                      key={label}
                      as={motion.a}
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
              </SocialRow>

            </CardContent>

          </ContentCard>

        </motion.div>

      </Grid>
    </Wrapper>
  );
};

export default AboutMe;
