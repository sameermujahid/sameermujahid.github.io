// Education.jsx — Apple-Inspired Education Timeline
import React, { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlassCard, SectionLabel, SectionTitle } from '../styles/styles';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import { FiCalendar } from 'react-icons/fi';

const EDUCATION_DATA = [
  {
    id: 1,
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'Adikavi Nannaya University, Rajanagaram',
    period: '2020 – 2024',
    gpa: 8.16,
    maxGpa: 10,
    description: 'Focused on ML, data science, and full-stack development with various projects and internships.',
    color: '#2997ff',
  },
  {
    id: 2,
    degree: 'Intermediate (MPC)',
    institution: 'Tirumala Junior College, Katheru',
    period: '2018 – 2020',
    gpa: 9.5,
    maxGpa: 10,
    description: 'Mathematics, Physics, and Chemistry with a strong academic foundation.',
    color: '#34c759',
  },
  {
    id: 3,
    degree: 'SSC',
    institution: 'Keshava Reddy High School',
    period: '2017 – 2018',
    gpa: 10.0,
    maxGpa: 10,
    description: 'Completed secondary school with outstanding performance.',
    color: '#ff9f0a',
  },
];

// ─── Styled ──────────────────────────────────────────────────────────────────

const Wrapper = styled.div`
  padding: 56px 0 60px;
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 19px;
    top: 24px;
    bottom: 24px;
    width: 2px;
    background: ${({ theme }) => theme.border};
    border-radius: 1px;

    @media (max-width: 480px) {
      left: 15px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  gap: 18px;
  padding-bottom: 20px;
  position: relative;

  &:last-child {
    padding-bottom: 0;
  }
`;

const DotWrap = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  position: relative;
  margin-top: 8px;
  z-index: 1;

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

const Dot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ $color }) => $color}15;
  border: 2px solid ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
  transition: background 0.25s ease, transform 0.25s ease;

  ${TimelineItem}:hover & {
    background: ${({ $color }) => $color}28;
    transform: scale(1.08);
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 0.75rem;
  }
`;

const Card = styled(GlassCard)`
  flex: 1;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;

  @media (max-width: 480px) {
    padding: 16px 18px;
  }
`;

const Degree = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.3;
`;

const Institution = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ $color }) => $color};
`;

const MetaChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textTertiary};
`;

const Desc = styled.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textSecondary};
`;

const GpaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const GpaBar = styled.div`
  flex: 1;
  height: 5px;
  border-radius: 3px;
  background: ${({ theme }) => theme.bgTertiary};
  overflow: hidden;
`;

const GpaFill = styled(motion.div)`
  height: 100%;
  border-radius: 3px;
  background: ${({ $color }) => $color};
`;

const GpaLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
  white-space: nowrap;
`;

// ─── Sub-component ───────────────────────────────────────────────────────────

const EduItem = memo(({ edu, index }) => {
  const { ref, isInView } = useScrollAnimation(0.08);

  return (
    <TimelineItem ref={ref}>
      <DotWrap>
        <Dot $color={edu.color}>{edu.id}</Dot>
      </DotWrap>
      <Card
        as={motion.div}
        initial={{ opacity: 0, x: 18 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div>
          <Degree>{edu.degree}</Degree>
          <Institution $color={edu.color}>{edu.institution}</Institution>
        </div>

        <MetaChip>
          <FiCalendar size={11} />
          {edu.period}
        </MetaChip>

        <Desc>{edu.description}</Desc>

        <GpaRow>
          <GpaBar>
            <GpaFill
              $color={edu.color}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${(edu.gpa / edu.maxGpa) * 100}%` } : {}}
              transition={{ duration: 0.9, delay: index * 0.08 + 0.25, ease: 'easeOut' }}
            />
          </GpaBar>
          <GpaLabel>GPA {edu.gpa}</GpaLabel>
        </GpaRow>
      </Card>
    </TimelineItem>
  );
});

// ─── Main ─────────────────────────────────────────────────────────────────────

const Education = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <Wrapper>
      <Header>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel variants={staggerItem}>Education</SectionLabel>
          <SectionTitle variants={staggerItem}>Academic journey.</SectionTitle>
        </motion.div>
      </Header>

      <TimelineWrapper>
        {EDUCATION_DATA.map((edu, i) => (
          <EduItem key={edu.id} edu={edu} index={i} />
        ))}
      </TimelineWrapper>
    </Wrapper>
  );
};

export default Education;
