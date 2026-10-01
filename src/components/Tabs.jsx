// Tabs.jsx — Apple-Inspired Segmented Tab Control
import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaGraduationCap, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';
import resumeData from '../data/resumeData';
import { SpotlightGlow } from './SpotlightEffects';

import {
  TabsWrapper,
  TabsTabBar,
  TabsTabTrack,
  TabsTabBtn,
  TabsActivePill,
  TabsContentArea,
  TabsContentLoader
} from '../styles/styles';

// Lazy-load tab content for performance
const Certificates = lazy(() => import('./Certificates'));
const Education = lazy(() => import('./Education'));
const Experience = lazy(() => import('./Experience'));
const Projects = lazy(() => import('./Projects'));

const TAB_ICONS = {
  Projects: <FaProjectDiagram size={14} />,
  Experience: <FaBriefcase size={14} />,
  Education: <FaGraduationCap size={14} />,
  Certificates: <FaCertificate size={14} />,
};

const TAB_ITEMS = resumeData.sections.work.tabs.map((tab) => ({
  ...tab,
  icon: TAB_ICONS[tab.id],
}));

// ─── Styled ───────────────────────────────────────────────────────────────────















// ─── Component ─────────────────────────────────────────────────────────────────

const Tabs = () => {
  const [active, setActive] = useState(resumeData.sections.work.defaultTab || resumeData.sections.work.tabs[0]?.id || 'Projects');

  return (
    <TabsWrapper id="more" data-perf-section="true">
      <TabsTabBar>
        <TabsTabTrack>
          {TAB_ITEMS.map(({ id, label, icon }) => (
            <TabsTabBtn
              key={id}
              $active={active === id}
              onClick={() => setActive(id)}
              data-spotlight="true"
            >
              <SpotlightGlow />
              {active === id && (
                <TabsActivePill
                  layoutId="active-pill"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 6 }}>
                {icon}
                <span className="label">{label}</span>
              </span>
            </TabsTabBtn>
          ))}
        </TabsTabTrack>
      </TabsTabBar>

      <TabsContentArea>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Suspense fallback={<TabsContentLoader>Loading…</TabsContentLoader>}>
              {active === 'Certificates' && <Certificates />}
              {active === 'Education' && <Education />}
              {active === 'Experience' && <Experience />}
              {active === 'Projects' && <Projects />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </TabsContentArea>
    </TabsWrapper>
  );
};

export default Tabs;



