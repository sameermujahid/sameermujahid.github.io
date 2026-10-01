// Experience.jsx

import React, { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  GlassCard,
  SectionLabel,
  SectionTitle,
} from '../styles/styles';
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

// ─── Styled ───────────────────────────────────────────────────────────────────

const Wrapper = styled.div`
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 56px 0 60px;
  }
`;

const Header = styled.div`
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

/*
 * Desktop  : 3 columns
 * Tablet   : 2 columns
 * Mobile   : 1 column
 */
const Timeline = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

// ─── Experience Card ──────────────────────────────────────────────────────────

const ExpCard = styled(GlassCard)`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  min-width: 0;
  height: 100%;
  box-sizing: border-box;

  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-left: 3px solid ${({ $color }) => $color};

  @media (max-width: 1024px) {
    padding: 28px;
  }

  @media (max-width: 768px) {
    padding: 28px 30px;

    transition:
      transform 0.28s ease,
      box-shadow 0.28s ease;

    &:hover {
      transform: translateX(4px);
    }
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

/*
 * All actual card content sits above SpotlightGlow.
 */
const CardContent = styled.div`
  position: relative;
  z-index: 1;

  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 100%;
`;

// ─── Top ──────────────────────────────────────────────────────────────────────

const ExpTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const ExpMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

// ─── Company ──────────────────────────────────────────────────────────────────

const CompanyRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
`;

const Company = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.textPrimary};

  margin: 0;

  /*
   * Allows long company names to wrap naturally.
   */
  overflow-wrap: anywhere;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

// ─── Role + Type ──────────────────────────────────────────────────────────────

const RoleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Role = styled.div`
  font-size: 1rem;
  font-weight: 500;

  color: ${({ theme, $color }) =>
    $color || theme.accent};

  @media (max-width: 768px) {
    font-size: 0.9375rem;
  }
`;

const TypeBadge = styled.span`
  display: inline-block;

  padding: 4px 10px;

  border-radius: 980px;

  font-size: 0.75rem;
  font-weight: 600;

  background: ${({ $color }) => $color}18;

  color: ${({ $color }) => $color};

  border: 1px solid ${({ $color }) => $color}30;

  @media (max-width: 768px) {
    padding: 3px 10px;
    font-size: 0.72rem;
  }
`;

// ─── Meta ─────────────────────────────────────────────────────────────────────

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 14px;
  }
`;

const MetaChip = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 0.8125rem;

  color: ${({ theme }) => theme.textTertiary};

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// ─── Divider ──────────────────────────────────────────────────────────────────

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border};
  width: 100%;
`;

// ─── Responsibilities ─────────────────────────────────────────────────────────

const BulletList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 9px;
  }
`;

const Bullet = styled.li`
  display: flex;
  gap: 10px;

  font-size: 0.9rem;
  line-height: 1.6;

  color: ${({ theme }) => theme.textSecondary};

  &::before {
    content: '';

    display: block;

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: ${({ $color }) => $color};

    margin-top: 9px;

    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.65;

    &::before {
      margin-top: 8px;
    }
  }
`;

// ─── Skills ───────────────────────────────────────────────────────────────────

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: auto;

  @media (max-width: 768px) {
    gap: 7px;
  }
`;

const Tag = styled.span`
  padding: 5px 12px;

  border-radius: 980px;

  font-size: 0.8rem;
  font-weight: 500;

  background: ${({ theme }) => theme.bgTertiary};

  color: ${({ theme }) => theme.textSecondary};

  border: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    padding: 4px 11px;
    font-size: 0.78rem;
  }
`;

// ─── Actions ──────────────────────────────────────────────────────────────────

const ActionRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  margin-top: auto;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const ActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 8px 16px;

  border-radius: 980px;

  font-size: 0.8125rem;
  font-weight: 500;

  text-decoration: none;

  cursor: pointer;

  background: ${({ theme }) => theme.bgTertiary};

  color: ${({ theme }) => theme.textSecondary};

  border: 1px solid ${({ theme }) => theme.border};

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accentSubtle};

    color: ${({ theme }) => theme.accent};

    border-color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    padding: 7px 14px;
    font-size: 0.8rem;
  }
`;

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
      <ExpCard
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

        <CardContent>

          <ExpTop>

            <ExpMeta>

              {/* Company name */}
              <CompanyRow>
                <Company>
                  {exp.company}
                </Company>
              </CompanyRow>

              {/* Role + Type */}
              <RoleRow>

                <Role
                  $color={exp.color}
                >
                  {exp.role}
                </Role>

                <TypeBadge
                  $color={exp.color}
                >
                  {exp.type}
                </TypeBadge>

              </RoleRow>

              {/* Duration + Location */}
              <MetaRow>

                <MetaChip>
                  <FiCalendar
                    size={12}
                  />

                  {exp.duration}
                </MetaChip>

                <MetaChip>
                  <FiMapPin
                    size={12}
                  />

                  {exp.location}
                </MetaChip>

              </MetaRow>

            </ExpMeta>

          </ExpTop>

          <Divider />

          {/* Responsibilities */}
          <BulletList>

            {exp.responsibilities.map(
              (item, i) => (
                <Bullet
                  key={i}
                  $color={exp.color}
                >
                  {item}
                </Bullet>
              )
            )}

          </BulletList>

          {/* Skills */}
          <TagList>

            {exp.skills.map(
              (skill) => (
                <Tag key={skill}>
                  {skill}
                </Tag>
              )
            )}

          </TagList>

          {/* Actions */}
          <ActionRow>

            {exp.companyUrl && (
              <ActionBtn
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink
                  size={12}
                />

                About Company
              </ActionBtn>
            )}

            {exp.certificateUrl && (
              <ActionBtn
                as="button"
                onClick={
                  handleDownload
                }
              >
                <FiDownload
                  size={12}
                />

                Certificate
              </ActionBtn>
            )}

          </ActionRow>

        </CardContent>

      </ExpCard>
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
    <Wrapper>

      {/* ─────────────────────────────────────────────── */}
      {/* Header */}
      {/* ─────────────────────────────────────────────── */}

      <Header>

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

      </Header>

      {/* ─────────────────────────────────────────────── */}
      {/* Experience Grid */}
      {/* ─────────────────────────────────────────────── */}

      <Timeline>

        {resumeData.experience.map(
          (exp, i) => (
            <ExpCardComponent
              key={exp.company}
              exp={exp}
              index={i}
            />
          )
        )}

      </Timeline>

    </Wrapper>
  );
};

export default Experience;
