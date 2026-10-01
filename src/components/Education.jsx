// Education.jsx — Apple-Inspired Education Timeline
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import { FiCalendar } from 'react-icons/fi';
import resumeData from '../data/resumeData';
import { SpotlightGlow } from './SpotlightEffects';

import {
  GlassCard,
  SectionLabel,
  SectionTitle,
  EducationWrapper,
  EducationHeader,
  EducationTimelineWrapper,
  EducationTimelineItem,
  EducationDotWrap,
  EducationDot,
  EducationCard,
  EducationDegree,
  EducationInstitution,
  EducationMetaChip,
  EducationDesc,
  EducationGpaRow,
  EducationGpaBar,
  EducationGpaFill,
  EducationGpaLabel
} from '../styles/styles';


// ─── Styled ──────────────────────────────────────────────────────────────────































// ─── Sub-component ───────────────────────────────────────────────────────────

const EduItem = memo(({ edu, index }) => {
  const { ref, isInView } = useScrollAnimation(0.08);

  return (
    <EducationTimelineItem ref={ref}>
      <EducationDotWrap>
        <EducationDot $color={edu.color}>{edu.id}</EducationDot>
      </EducationDotWrap>
      <EducationCard
        as={motion.div}
        initial={{ opacity: 0, x: 18 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        data-spotlight="true"
      >
        <SpotlightGlow color={edu.color} />
        <div>
          <EducationDegree>{edu.degree}</EducationDegree>
          <EducationInstitution $color={edu.color}>{edu.institution}</EducationInstitution>
        </div>

        <EducationMetaChip>
          <FiCalendar size={11} />
          {edu.period}
        </EducationMetaChip>

        <EducationDesc>{edu.description}</EducationDesc>

        <EducationGpaRow>
          <EducationGpaBar>
            <EducationGpaFill
              $color={edu.color}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${(edu.gpa / edu.maxGpa) * 100}%` } : {}}
              transition={{ duration: 0.9, delay: index * 0.08 + 0.25, ease: 'easeOut' }}
            />
          </EducationGpaBar>
          <EducationGpaLabel>GPA {edu.gpa}</EducationGpaLabel>
        </EducationGpaRow>
      </EducationCard>
    </EducationTimelineItem>
  );
});

// ─── Main ─────────────────────────────────────────────────────────────────────

const Education = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <EducationWrapper>
      <EducationHeader>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel variants={staggerItem}>{resumeData.sections.work.education.label}</SectionLabel>
          <SectionTitle variants={staggerItem}>{resumeData.sections.work.education.title}</SectionTitle>
        </motion.div>
      </EducationHeader>

      <EducationTimelineWrapper>
        {Object.values(resumeData.education).map((edu, i) => (
          <EduItem key={edu.id} edu={edu} index={i} />
        ))}
      </EducationTimelineWrapper>
    </EducationWrapper>
  );
};

export default Education;



