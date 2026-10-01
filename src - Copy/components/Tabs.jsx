// Tabs.jsx — Apple-Inspired Segmented Tab Control
import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaGraduationCap, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';

// Lazy-load tab content for performance
const Certificates = lazy(() => import('./Certificates'));
const Education = lazy(() => import('./Education'));
const Experience = lazy(() => import('./Experience'));
const Projects = lazy(() => import('./Projects'));

const TAB_ITEMS = [
  { id: 'Projects', label: 'Projects', icon: <FaProjectDiagram size={14} /> },
  { id: 'Experience', label: 'Experience', icon: <FaBriefcase size={14} /> },
  { id: 'Education', label: 'Education', icon: <FaGraduationCap size={14} /> },
  { id: 'Certificates', label: 'Certificates', icon: <FaCertificate size={14} /> },
];

// ─── Styled ───────────────────────────────────────────────────────────────────

const Wrapper = styled.section`
  padding: 0 0 120px;
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 0 80px;
  }
`;

const TabBar = styled.div`
  position: sticky;
  top: 80px;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 16px 24px;

  @media (max-width: 768px) {
    top: 64px;
    padding: 12px 16px;
  }
`;

const TabTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  border-radius: 980px;
  padding: 6px;
  box-shadow: ${({ theme }) => theme.shadowMd};
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

const TabBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border: none;
  background: transparent;
  border-radius: 980px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme, $active }) => ($active ? 'black' : theme.textSecondary)};
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s ease;
  z-index: 1;

  &:hover {
    color: ${({ theme }) => theme.textSecondary};
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.8125rem;
    gap: 4px;

    span.label {
      display: none;
    }
  }
`;

const ActivePill = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: white;
  border-radius: 980px;
  z-index: 0;
  box-shadow: ${({ theme }) => theme.shadowSm};
  border: 1px solid ${({ theme }) => theme.glassBorder};
`;

const ContentArea = styled.div`
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const ContentLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  color: ${({ theme }) => theme.textTertiary};
  font-size: 0.875rem;
`;

// ─── Component ─────────────────────────────────────────────────────────────────

const Tabs = () => {
  const [active, setActive] = useState('Projects');

  return (
    <Wrapper id="more">
      <TabBar>
        <TabTrack>
          {TAB_ITEMS.map(({ id, label, icon }) => (
            <TabBtn
              key={id}
              $active={active === id}
              onClick={() => setActive(id)}
            >
              {active === id && (
                <ActivePill
                  layoutId="active-pill"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 6 }}>
                {icon}
                <span className="label">{label}</span>
              </span>
            </TabBtn>
          ))}
        </TabTrack>
      </TabBar>

      <ContentArea>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Suspense fallback={<ContentLoader>Loading…</ContentLoader>}>
              {active === 'Certificates' && <Certificates />}
              {active === 'Education' && <Education />}
              {active === 'Experience' && <Experience />}
              {active === 'Projects' && <Projects />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </ContentArea>
    </Wrapper>
  );
};

export default Tabs;