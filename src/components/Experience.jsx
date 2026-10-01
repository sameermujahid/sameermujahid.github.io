// Experience.jsx

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import {
  useScrollAnimation,
  staggerContainer,
  staggerItem,
} from '../hooks/useScrollAnimation';
import {
  FiExternalLink,
  FiDownload,
  FiCalendar,
  FiMapPin,
} from 'react-icons/fi';
import resumeData from '../data/resumeData';
import { SpotlightGlow } from './SpotlightEffects';

import {
  GlassCard,
  SectionLabel,
  SectionTitle,
  ExperienceWrapper,
  ExperienceHeader,
  ExperienceTimeline,
  ExperienceExpCard,
  ExperienceCardContent,
  ExperienceExpTop,
  ExperienceExpMeta,
  ExperienceCompanyRow,
  ExperienceCompany,
  ExperienceRoleRow,
  ExperienceRole,
  ExperienceTypeBadge,
  ExperienceMetaRow,
  ExperienceMetaChip,
  ExperienceDivider,
  ExperienceBulletList,
  ExperienceBullet,
  ExperienceTagList,
  ExperienceTag,
  ExperienceActionRow,
  ExperienceActionBtn
} from '../styles/styles';

// ─── Styled ───────────────────────────────────────────────────────────────────





/*
 * Desktop  : 3 columns
 * Tablet   : 2 columns
 * Mobile   : 1 column
 */


// ─── Experience Card ──────────────────────────────────────────────────────────



/*
 * All actual card content sits above SpotlightGlow.
 */


// ─── Top ──────────────────────────────────────────────────────────────────────





// ─── ExperienceCompany ──────────────────────────────────────────────────────────────────





// ─── ExperienceRole + Type ──────────────────────────────────────────────────────────────







// ─── Meta ─────────────────────────────────────────────────────────────────────





// ─── ExperienceDivider ──────────────────────────────────────────────────────────────────



// ─── Responsibilities ─────────────────────────────────────────────────────────





// ─── Skills ───────────────────────────────────────────────────────────────────





// ─── Actions ──────────────────────────────────────────────────────────────────





// ─── Sub-component ────────────────────────────────────────────────────────────

const ExpCardComponent = memo(
  ({ exp, index }) => {
    const {
      ref,
      isInView,
    } = useScrollAnimation(0.1);

    const handleDownload = () => {
      if (!exp.certificateUrl) {
        return;
      }

      const link =
        document.createElement('a');

      link.href =
        exp.certificateUrl;

      link.setAttribute(
        'download',
        ''
      );

      document.body.appendChild(
        link
      );

      link.click();

      document.body.removeChild(
        link
      );
    };

    return (
      <ExperienceExpCard
        ref={ref}
        as={motion.div}
        $color={exp.color}

        /*
         * This makes the card part of the
         * global spotlight system.
         */
        data-spotlight="true"

        initial={{
          opacity: 0,
          x: -24,
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
          duration: 0.6,
          delay: index * 0.1,
          ease: [
            0.25,
            0.46,
            0.45,
            0.94,
          ],
        }}

        whileHover={{
          x: 4,
        }}

        whileTap={{
          scale: 0.99,
        }}
      >

        {/* ─────────────────────────────────────────────── */}
        {/* Spotlight */}
        {/* ─────────────────────────────────────────────── */}

        <SpotlightGlow
          color={exp.color}
        />

        {/* ─────────────────────────────────────────────── */}
        {/* Card Content */}
        {/* ─────────────────────────────────────────────── */}

        <ExperienceCardContent>

          <ExperienceExpTop>

            <ExperienceExpMeta>

              {/* ExperienceCompany name */}
              <ExperienceCompanyRow>
                <ExperienceCompany>
                  {exp.company}
                </ExperienceCompany>
              </ExperienceCompanyRow>

              {/* ExperienceRole + Type */}
              <ExperienceRoleRow>

                <ExperienceRole
                  $color={exp.color}
                >
                  {exp.role}
                </ExperienceRole>

                <ExperienceTypeBadge
                  $color={exp.color}
                >
                  {exp.type}
                </ExperienceTypeBadge>

              </ExperienceRoleRow>

              {/* Duration + Location */}
              <ExperienceMetaRow>

                <ExperienceMetaChip>
                  <FiCalendar
                    size={12}
                  />

                  {exp.duration}
                </ExperienceMetaChip>

                <ExperienceMetaChip>
                  <FiMapPin
                    size={12}
                  />

                  {exp.location}
                </ExperienceMetaChip>

              </ExperienceMetaRow>

            </ExperienceExpMeta>

          </ExperienceExpTop>

          <ExperienceDivider />

          {/* Responsibilities */}
          <ExperienceBulletList>

            {exp.responsibilities.map(
              (item, i) => (
                <ExperienceBullet
                  key={i}
                  $color={exp.color}
                >
                  {item}
                </ExperienceBullet>
              )
            )}

          </ExperienceBulletList>

          {/* Skills */}
          <ExperienceTagList>

            {exp.skills.map(
              (skill) => (
                <ExperienceTag key={skill}>
                  {skill}
                </ExperienceTag>
              )
            )}

          </ExperienceTagList>

          {/* Actions */}
          <ExperienceActionRow>

            {exp.companyUrl && (
              <ExperienceActionBtn
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink
                  size={12}
                />

                About ExperienceCompany
              </ExperienceActionBtn>
            )}

            {exp.certificateUrl && (
              <ExperienceActionBtn
                as="button"
                onClick={
                  handleDownload
                }
              >
                <FiDownload
                  size={12}
                />

                Certificate
              </ExperienceActionBtn>
            )}

          </ExperienceActionRow>

        </ExperienceCardContent>

      </ExperienceExpCard>
    );
  }
);

// ─── Main ─────────────────────────────────────────────────────────────────────

const Experience = () => {
  const {
    ref,
    isInView,
  } = useScrollAnimation();

  return (
    <ExperienceWrapper>

      {/* ─────────────────────────────────────────────── */}
      {/* ExperienceHeader */}
      {/* ─────────────────────────────────────────────── */}

      <ExperienceHeader>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={
            isInView
              ? 'visible'
              : 'hidden'
          }
        >

          <SectionLabel
            variants={staggerItem}
          >
            {
              resumeData.sections
                .work.experience.label
            }
          </SectionLabel>

          <SectionTitle
            variants={staggerItem}
          >
            {
              resumeData.sections
                .work.experience.title
            }
          </SectionTitle>

        </motion.div>

      </ExperienceHeader>

      {/* ─────────────────────────────────────────────── */}
      {/* Experience Grid */}
      {/* ─────────────────────────────────────────────── */}

      <ExperienceTimeline>

        {resumeData.experience.map(
          (exp, i) => (
            <ExpCardComponent
              key={exp.company}
              exp={exp}
              index={i}
            />
          )
        )}

      </ExperienceTimeline>

    </ExperienceWrapper>
  );
};

export default Experience;

