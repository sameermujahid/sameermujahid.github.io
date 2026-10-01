// Certificates.jsx — Responsive Apple-Inspired Certificates Grid
import React, { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlassCard, SectionLabel, SectionTitle } from '../styles/styles';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import resumeData from '../data/resumeData';
import { FiDownload, FiEye, FiAward } from 'react-icons/fi';

// ─── Styled ──────────────────────────────────────────────────────────────────

const Wrapper = styled.div`
  padding: 56px 0 60px;
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(GlassCard)`
  flex: 1 1 calc(33.333% - 20px);
  min-width: 300px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-sizing: border-box;
  height: 100%;

  @media (max-width: 992px) {
    flex: none;
    min-width: auto;
  }
`;

const IconBadge = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: ${({ theme }) => theme.accentSubtle};
  color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
`;

const CardTitle = styled.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.4;
`;

const CardDate = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textTertiary};
  font-weight: 500;
  margin-top: 2px;
`;

const CardDesc = styled.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textSecondary};
  flex: 1;
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border};
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 980px;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  background: ${({ theme }) => theme.bgTertiary};
  color: ${({ theme }) => theme.textSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accentSubtle};
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }

  @media (hover: none) {
    &:active {
      background: ${({ theme }) => theme.accentSubtle};
      color: ${({ theme }) => theme.accent};
      border-color: ${({ theme }) => theme.accent};
    }
  }
`;

// ─── Sub-component ───────────────────────────────────────────────────────────

const CertCard = memo(({ cert, index }) => {
  const { ref, isInView } = useScrollAnimation(0.08);

  return (
    <Card
      ref={ref}
      as={motion.div}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
      whileTap={{ y: 0 }}
    >
      <IconBadge>
        <FiAward />
      </IconBadge>
      <div>
        <CardTitle>{cert.course}</CardTitle>
        <CardDate>{cert.duration}</CardDate>
      </div>
      <CardDesc>{cert.description}</CardDesc>
      <Divider />
      <Actions>
        <ActionBtn
          href={cert.pdf}
          download={`${cert.course.replace(/\s+/g, '-')}_certificate.pdf`}
        >
          <FiDownload size={12} />
          Download
        </ActionBtn>
        <ActionBtn href={cert.pdf} target="_blank" rel="noopener noreferrer">
          <FiEye size={12} />
          View
        </ActionBtn>
      </Actions>
    </Card>
  );
});

// ─── Main ─────────────────────────────────────────────────────────────────────

const Certificates = () => {
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
          <SectionLabel variants={staggerItem}>{resumeData.sections.work.certificates.label}</SectionLabel>
          <SectionTitle variants={staggerItem}>{resumeData.sections.work.certificates.title}</SectionTitle>
        </motion.div>
      </Header>

      <Grid>
        {resumeData.courses_certificates.map((cert, i) => (
          <CertCard key={i} cert={cert} index={i} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Certificates;


