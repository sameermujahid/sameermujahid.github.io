// Skills.jsx — Enhanced Mosaic + List + Stream
import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import resumeData from '../data/resumeData';
import { SpotlightGlow } from './SpotlightEffects';
import {
  FaPython, FaJs, FaAws, FaGit, FaDatabase, FaDocker, FaRobot, FaFlask
} from 'react-icons/fa';
import {
  SiDjango, SiPostgresql, SiTensorflow, SiPytorch, SiScikitlearn,
  SiGooglecloud, SiMicrosoftazure, SiPowerbi, SiPlotly, SiPandas,
  SiNumpy, SiFastapi, SiJirasoftware, SiMicrosoftteams, SiReact
} from 'react-icons/si';

import {
  SectionLabel,
  SectionTitle,
  SkillsWrapper,
  SkillsHeader,
  SkillsViewToggle,
  SkillsToggleBtn,
  SkillsMosaicGrid,
  SkillsTile,
  SkillsTileName,
  SkillsTagCloud,
  SkillsTag,
  SkillsGhostNum,
  SkillsListWrapper,
  SkillsListRow,
  SkillsRowLeft,
  SkillsDot,
  SkillsRowLabel,
  SkillsRowPills,
  SkillsListPill,
  SkillsRowCount,
  SkillsStreamWrap,
  SkillsLane,
  SkillsChip,
  SkillsChipCat
} from '../styles/styles';

const SKILL_ICONS = {
  python: <FaPython />,
  javascript: <FaJs />,
  aws: <FaAws />,
  git: <FaGit />,
  database: <FaDatabase />,
  docker: <FaDocker />,
  robot: <FaRobot />,
  flask: <FaFlask />,
  django: <SiDjango />,
  postgresql: <SiPostgresql />,
  tensorflow: <SiTensorflow />,
  pytorch: <SiPytorch />,
  scikitLearn: <SiScikitlearn />,
  googleCloud: <SiGooglecloud />,
  azure: <SiMicrosoftazure />,
  powerbi: <SiPowerbi />,
  plotly: <SiPlotly />,
  pandas: <SiPandas />,
  numpy: <SiNumpy />,
  fastapi: <SiFastapi />,
  jira: <SiJirasoftware />,
  teams: <SiMicrosoftteams />,
  react: <SiReact />,
};

const CATEGORIES = resumeData.skills.categories.map((category) => ({
  ...category,
  skills: category.skills.map((skill) => ({
    ...skill,
    icon: skill.icon ? SKILL_ICONS[skill.icon] : undefined,
  })),
}));

// ─── Keyframes ──────────────────────────────────────────────────────────────







// ─── Shared ─────────────────────────────────────────────────────────────────









// ─── MOSAIC ─────────────────────────────────────────────────────────────────













const MosaicView = memo(({ isInView }) => (
  <SkillsMosaicGrid>
    {CATEGORIES.map((cat, i) => (
      <SkillsTile
        key={cat.key}
        $area={cat.gridArea}
        $color={cat.color}
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: i * 0.028, ease: [0.25, 0.46, 0.45, 0.94] }}
        data-spotlight="true"
      >
        <SpotlightGlow color={cat.color} />
        <SkillsTileName $color={cat.color}>{cat.label}</SkillsTileName>
        <SkillsTagCloud>
          {cat.skills.map(s => (
            <SkillsTag key={s.name} $color={cat.color}>
              {s.icon}
              {s.name}
            </SkillsTag>
          ))}
        </SkillsTagCloud>
        <SkillsGhostNum $color={cat.color}>{cat.skills.length}</SkillsGhostNum>
      </SkillsTile>
    ))}
  </SkillsMosaicGrid>
));

// ─── LIST VIEW ──────────────────────────────────────────────────────────────

















const ListView = memo(({ isInView }) => (
  <SkillsListWrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: isInView ? 1 : 0 }}
    transition={{ duration: 0.3 }}
  >
    {CATEGORIES.map((cat, i) => (
      <SkillsListRow
        key={cat.key}
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.38, delay: i * 0.032 }}
      >
        <SkillsRowLeft>
          <SkillsDot $color={cat.color} $d={i * 0.18} />
          <SkillsRowLabel>{cat.label}</SkillsRowLabel>
        </SkillsRowLeft>
        <SkillsRowPills>
          {cat.skills.map((s, j) => (
            <SkillsListPill
              key={s.name}
              $color={cat.color}
              $bg={`${cat.color}12`}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.28, delay: i * 0.032 + j * 0.018 }}
              data-spotlight="true"
            >
              <SpotlightGlow color={cat.color} />
              {s.icon}
              {s.name}
            </SkillsListPill>
          ))}
        </SkillsRowPills>
        <SkillsRowCount>{cat.skills.length}</SkillsRowCount>
      </SkillsListRow>
    ))}
  </SkillsListWrapper>
));

// ─── STREAM VIEW ─────────────────────────────────────────────────────────────

const SPEEDS = [68, 82, 58, 76];
const LANES  = [
  CATEGORIES.slice(0, 4),
  CATEGORIES.slice(4, 7),
  CATEGORIES.slice(7, 10),
  CATEGORIES.slice(10),
];









const StreamView = memo(({ isInView }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: isInView ? 1 : 0 }}
    transition={{ duration: 0.4 }}
  >
    <SkillsStreamWrap>
      {LANES.map((lane, li) => {
        const chips = [...lane, ...lane].flatMap(cat =>
          cat.skills.map(s => ({ ...s, col: cat.color, cat: cat.label }))
        );
        return (
          <SkillsLane key={li} $rev={li % 2 !== 0} $spd={SPEEDS[li]}>
            {chips.map((c, ci) => (
              <SkillsChip key={`${c.name}-${ci}`} $color={c.col} data-spotlight="true">
                <SpotlightGlow color={c.col} />
                {c.icon}
                {c.name}
                <SkillsChipCat>{c.cat}</SkillsChipCat>
              </SkillsChip>
            ))}
          </SkillsLane>
        );
      })}
    </SkillsStreamWrap>
  </motion.div>
));

// ─── MAIN ─────────────────────────────────────────────────────────────────────

const VIEWS = resumeData.skills.views;

const Skills = () => {
  const { ref, isInView } = useScrollAnimation();
  const [view, setView]   = useState('mosaic');

  return (
    <SkillsWrapper>
      <SkillsHeader id="skills" data-perf-section="true">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel variants={staggerItem}>{resumeData.sections.skills.label}</SectionLabel>
          <SectionTitle variants={staggerItem}>
            {CATEGORIES.length} {resumeData.skills.titleSuffix}
          </SectionTitle>
          <motion.div variants={staggerItem} style={{ marginTop: 18 }}>
            <SkillsViewToggle>
              {VIEWS.map(v => (
                <SkillsToggleBtn
                  key={v.id}
                  $active={view === v.id}
                  onClick={() => setView(v.id)}
                  data-spotlight="true"
                >
                  <SpotlightGlow />
                  <span style={{ position: 'relative', zIndex: 1 }}>{v.label}</span>
                </SkillsToggleBtn>
              ))}
            </SkillsViewToggle>
          </motion.div>
        </motion.div>
      </SkillsHeader>

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          {view === 'mosaic' && <MosaicView isInView={isInView} />}
          {view === 'list'   && <ListView   isInView={isInView} />}
          {view === 'stream' && <StreamView isInView={isInView} />}
        </motion.div>
      </AnimatePresence>
    </SkillsWrapper>
  );
};

export default Skills;



