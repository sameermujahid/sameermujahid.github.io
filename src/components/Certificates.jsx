// Certificates.jsx — Responsive Apple-Inspired Certificates CertificatesGrid
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import resumeData from '../data/resumeData';
import { FiDownload, FiEye, FiAward } from 'react-icons/fi';
import { SpotlightGlow } from './SpotlightEffects';

import {
  GlassCard,
  SectionLabel,
  SectionTitle,
  CertificatesWrapper,
  CertificatesHeader,
  CertificatesGrid,
  CertificatesCard,
  CertificatesIconBadge,
  CertificatesCardTitle,
  CertificatesCardDate,
  CertificatesCardDesc,
  CertificatesDivider,
  CertificatesActions,
  CertificatesActionBtn
} from '../styles/styles';

// ─── Styled ──────────────────────────────────────────────────────────────────























// ─── Sub-component ───────────────────────────────────────────────────────────

const CertCard = memo(({ cert, index }) => {
  const { ref, isInView } = useScrollAnimation(0.08);

  return (
    <CertificatesCard
      ref={ref}
      as={motion.div}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
      whileTap={{ y: 0 }}
      data-spotlight="true"
    >
      <SpotlightGlow />
      <CertificatesIconBadge>
        <FiAward />
      </CertificatesIconBadge>
      <div>
        <CertificatesCardTitle>{cert.course}</CertificatesCardTitle>
        <CertificatesCardDate>{cert.duration}</CertificatesCardDate>
      </div>
      <CertificatesCardDesc>{cert.description}</CertificatesCardDesc>
      <CertificatesDivider />
      <CertificatesActions>
        <CertificatesActionBtn
          href={cert.pdf}
          download={`${cert.course.replace(/\s+/g, '-')}_certificate.pdf`}
        >
          <FiDownload size={12} />
          Download
        </CertificatesActionBtn>
        <CertificatesActionBtn href={cert.pdf} target="_blank" rel="noopener noreferrer">
          <FiEye size={12} />
          View
        </CertificatesActionBtn>
      </CertificatesActions>
    </CertificatesCard>
  );
});

// ─── Main ─────────────────────────────────────────────────────────────────────

const Certificates = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <CertificatesWrapper>
      <CertificatesHeader>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel variants={staggerItem}>{resumeData.sections.work.certificates.label}</SectionLabel>
          <SectionTitle variants={staggerItem}>{resumeData.sections.work.certificates.title}</SectionTitle>
        </motion.div>
      </CertificatesHeader>

      <CertificatesGrid>
        {resumeData.courses_certificates.map((cert, i) => (
          <CertCard key={i} cert={cert} index={i} />
        ))}
      </CertificatesGrid>
    </CertificatesWrapper>
  );
};

export default Certificates;



