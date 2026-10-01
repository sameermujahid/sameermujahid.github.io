import React, { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlassCard, SectionLabel, SectionTitle } from '../styles/styles';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import arthashastraCertificate from '../assets/arthashastra_certificate.pdf';
import { FiExternalLink, FiDownload, FiCalendar, FiMapPin } from 'react-icons/fi';

const EXPERIENCE_DATA = [
  {
    company: 'CINCYR Tech Private Limited',
    location: 'Hyderabad',
    role: 'Data Scientist',
    duration: 'Dec 2024 – Present',
    type: 'Internship',
    color: '#2997ff',
    responsibilities: [
      'Led development of LLMs and RAG models, enhancing AI-driven decision-making.',
      'Created custom datasets and fine-tuned LLMs for domain-specific real estate AI.',
      'Deployed ML models, increasing operational efficiency and optimizing workflows.',
      'Integrated AI solutions, reducing manual effort by 20%.',
    ],
    skills: ['Python', 'LLMs', 'RAG', 'Machine Learning', 'Deployment'],
    companyUrl: 'https://cincyrtech.com/',
    certificateUrl: '',
  },
  {
    company: 'SocialTek',
    location: 'Hyderabad',
    role: 'Data Science Intern',
    duration: 'Jul 2024 – Dec 2024',
    type: 'Internship',
    color: '#34c759',
    responsibilities: [
      'Analyzed 500,000+ records, ensuring 99% data accuracy and 20% faster retrieval.',
      'Conducted EDA, improving data-driven decision-making by 18%.',
      'Created synthetic datasets, augmenting training data by 35%.',
      'Built ATS tool, boosting recruitment efficiency by 25%.',
    ],
    skills: ['Python', 'EDA', 'Pandas', 'Data Analysis', 'ATS'],
    companyUrl: 'https://socialtek.in/',
    certificateUrl: '',
  },
  {
    company: 'Arthashastra Intelligence',
    location: 'Hyderabad',
    role: 'Machine Learning Intern',
    duration: 'Dec 2023 – Jun 2024',
    type: 'Internship',
    color: '#ff9f0a',
    responsibilities: [
      'Optimized data pipelines, reducing processing time by 20%.',
      'Built scalable web apps using React and Django.',
      'Developed ML models improving customer segmentation by 12%.',
      'Integrated AI solutions, reducing costs by 10%.',
    ],
    skills: ['Python', 'React', 'Django', 'Machine Learning'],
    companyUrl: 'https://arthashastra.ai/',
    certificateUrl: arthashastraCertificate,
  },
];

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

const Timeline = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const ExpCard = styled(GlassCard)`
  flex: 1;
  min-width: 0;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-left: 3px solid ${({ $color }) => $color};

  @media (max-width: 768px) {
    padding: 28px 30px;
    transition: transform 0.28s ease, box-shadow 0.28s ease;

    &:hover {
      transform: translateX(4px);
    }
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

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

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const RoleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const CompanyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Company = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.textPrimary};

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Role = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme, $color }) => $color || theme.accent};

  @media (max-width: 768px) {
    font-size: 0.9375rem;
  }
`;

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

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border};
`;

const BulletList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

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
  transition: all 0.2s ease;

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

// ─── Sub-component ─────────────────────────────────────────────────────────────────────

const ExpCardComponent = memo(({ exp, index }) => {
  const { ref, isInView } = useScrollAnimation(0.1);

  const handleDownload = () => {
    if (!exp.certificateUrl) return;
    const link = document.createElement('a');
    link.href = exp.certificateUrl;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ExpCard
      ref={ref}
      as={motion.div}
      $color={exp.color}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.99 }}
    >
      <ExpTop>
        <ExpMeta>
          <CompanyRow>
            <Company>{exp.company}</Company>
            <TypeBadge $color={exp.color}>{exp.type}</TypeBadge>
          </CompanyRow>
          <RoleRow>
            <Role $color={exp.color}>{exp.role}</Role>
          </RoleRow>
          <MetaRow>
            <MetaChip>
              <FiCalendar size={12} />
              {exp.duration}
            </MetaChip>
            <MetaChip>
              <FiMapPin size={12} />
              {exp.location}
            </MetaChip>
          </MetaRow>
        </ExpMeta>
      </ExpTop>

      <Divider />

      <BulletList>
        {exp.responsibilities.map((item, i) => (
          <Bullet key={i} $color={exp.color}>{item}</Bullet>
        ))}
      </BulletList>

      <TagList>
        {exp.skills.map(skill => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </TagList>

      <ActionRow>
        <ActionBtn href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
          <FiExternalLink size={12} />
          About Company
        </ActionBtn>
        {exp.certificateUrl && (
          <ActionBtn as="button" onClick={handleDownload}>
            <FiDownload size={12} />
            Certificate
          </ActionBtn>
        )}
      </ActionRow>
    </ExpCard>
  );
});

// ─── Main ─────────────────────────────────────────────────────────────────────

const Experience = () => {
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
          <SectionLabel variants={staggerItem}>Experience</SectionLabel>
          <SectionTitle variants={staggerItem}>Where I've worked.</SectionTitle>
        </motion.div>
      </Header>

      <Timeline>
        {EXPERIENCE_DATA.map((exp, i) => (
          <ExpCardComponent key={exp.company} exp={exp} index={i} />
        ))}
      </Timeline>
    </Wrapper>
  );
};

export default Experience;
