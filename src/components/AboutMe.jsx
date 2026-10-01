// AboutMe.jsx

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
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

import {
  GlassCard,
  SectionLabel,
  SectionTitle,
  SocialIcon,
  AboutMeWrapper,
  AboutMeGrid,
  AboutMeImageSide,
  AboutMeImageContainer,
  AboutMeContentCard,
  AboutMeCardContent,
  AboutMeName,
  AboutMeBody,
  AboutMeDivider,
  AboutMeStatsRow,
  AboutMeStat,
  AboutMeStatNum,
  AboutMeStatLabel,
  AboutMeSocialRow
} from '../styles/styles';

// ─── AboutMeWrapper ──────────────────────────────────────────────────────────────────



// ─── AboutMeGrid ─────────────────────────────────────────────────────────────────────



// ─── Image ────────────────────────────────────────────────────────────────────





// ─── Content Card ─────────────────────────────────────────────────────────────



/*
 * Everything inside the card sits above the spotlight.
 */


// ─── Typography ───────────────────────────────────────────────────────────────





// ─── AboutMeDivider ──────────────────────────────────────────────────────────────────



// ─── Stats ────────────────────────────────────────────────────────────────────









// ─── Socials ──────────────────────────────────────────────────────────────────



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
    <AboutMeWrapper>
      <AboutMeGrid 
      id="about"
      ref={ref}
      data-perf-section="true"
    >

        {/* ───────────────────────── LEFT ───────────────────────── */}

        <AboutMeImageSide>

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
            <AboutMeImageContainer
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
            </AboutMeImageContainer>
          </motion.div>

        </AboutMeImageSide>

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
          <AboutMeContentCard data-spotlight="true">

            {/* Global spotlight glow */}
            <SpotlightGlow />

            {/* Card content above spotlight */}
            <AboutMeCardContent>

              <AboutMeName>
                {resumeData.name}
              </AboutMeName>

              {resumeData.about.paragraphs.map(
                (paragraph) => (
                  <AboutMeBody key={paragraph}>
                    {paragraph}
                  </AboutMeBody>
                )
              )}

              <AboutMeDivider />

              <AboutMeStatsRow>
                {resumeData.about.stats.map(
                  (stat) => (
                    <AboutMeStat key={stat.label}>
                      <AboutMeStatNum>
                        {stat.value}
                      </AboutMeStatNum>

                      <AboutMeStatLabel>
                        {stat.label}
                      </AboutMeStatLabel>
                    </AboutMeStat>
                  )
                )}
              </AboutMeStatsRow>

              <AboutMeDivider />

              <AboutMeSocialRow>
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
              </AboutMeSocialRow>

            </AboutMeCardContent>

          </AboutMeContentCard>

        </motion.div>

      </AboutMeGrid>
    </AboutMeWrapper>
  );
};

export default AboutMe;

