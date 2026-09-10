// Skills.jsx — Enhanced Mosaic + List + Stream
import React, { useState, memo } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel, SectionTitle } from '../styles/styles';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import {
  FaPython, FaJs, FaAws, FaGit, FaDatabase, FaDocker, FaRobot, FaFlask
} from 'react-icons/fa';
import {
  SiDjango, SiPostgresql, SiTensorflow, SiPytorch, SiScikitlearn,
  SiGooglecloud, SiMicrosoftazure, SiPowerbi, SiPlotly, SiPandas,
  SiNumpy, SiFastapi, SiJirasoftware, SiMicrosoftteams, SiReact
} from 'react-icons/si';

const CATEGORIES = [
  {
    key: 'programming', label: 'Programming', color: '#2997ff',
    gridArea: '1 / 1 / 2 / 3',
    skills: [
      { name: 'Python',     icon: <FaPython /> },
      { name: 'SQL',        icon: <FaDatabase /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
  },
  {
    key: 'ml', label: 'Machine Learning', color: '#34c759',
    gridArea: '1 / 3 / 3 / 4',
    skills: [
      { name: 'scikit-learn',   icon: <SiScikitlearn /> },
      { name: 'Supervised' },
      { name: 'Unsupervised' },
      { name: 'Regression' },
      { name: 'Classification' },
      { name: 'Clustering' },
      { name: 'Model Eval' },
    ],
  },
  {
    key: 'genai', label: 'Generative AI', color: '#ff9f0a',
    gridArea: '1 / 4 / 3 / 5',
    skills: [
      { name: 'LangChain' },
      { name: 'RAG' },
      { name: 'LoRA Fine-tuning' },
      { name: 'Prompt Eng.' },
      { name: 'HuggingFace', icon: <FaRobot /> },
      { name: 'Response Eval' },
    ],
  },
  {
    key: 'dl', label: 'Deep Learning', color: '#bf5af2',
    gridArea: '2 / 1 / 3 / 2',
    skills: [
      { name: 'PyTorch',    icon: <SiPytorch /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Neural Nets' },
    ],
  },
  {
    key: 'data', label: 'Data & Analysis', color: '#64d2ff',
    gridArea: '2 / 2 / 3 / 3',
    skills: [
      { name: 'Pandas',         icon: <SiPandas /> },
      { name: 'NumPy',          icon: <SiNumpy /> },
      { name: 'Preprocessing' },
      { name: 'Cleaning' },
    ],
  },
  {
    key: 'nlp', label: 'NLP', color: '#ff6b6b',
    gridArea: '3 / 1 / 4 / 2',
    skills: [
      { name: 'Transformers' },
      { name: 'Embeddings' },
      { name: 'NLP Pipelines' },
    ],
  },
  {
    key: 'cv', label: 'Computer Vision', color: '#5e5ce6',
    gridArea: '3 / 2 / 4 / 3',
    skills: [
      { name: 'YOLOv8' },
      { name: 'Img Processing' },
      { name: 'Feature Ext.' },
    ],
  },
  {
    key: 'backend', label: 'Backend & APIs', color: '#30d158',
    gridArea: '3 / 3 / 4 / 5',
    skills: [
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'REST APIs' },
      { name: 'Django',   icon: <SiDjango /> },
      { name: 'Flask',    icon: <FaFlask /> },
    ],
  },
  {
    key: 'cloud', label: 'Cloud', color: '#0071e3',
    gridArea: '4 / 1 / 5 / 2',
    skills: [
      { name: 'AWS',   icon: <FaAws /> },
      { name: 'GCP',   icon: <SiGooglecloud /> },
      { name: 'Azure', icon: <SiMicrosoftazure /> },
    ],
  },
  {
    key: 'databases', label: 'Databases', color: '#ac8e68',
    gridArea: '4 / 2 / 5 / 3',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL' },
      { name: 'FAISS' },
    ],
  },
  {
    key: 'visualization', label: 'Visualization', color: '#ff375f',
    gridArea: '4 / 3 / 5 / 4',
    skills: [
      { name: 'Power BI',   icon: <SiPowerbi /> },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Plotly',     icon: <SiPlotly /> },
    ],
  },
  {
    key: 'deployment', label: 'Deployment', color: '#ffd60a',
    gridArea: '4 / 4 / 5 / 5',
    skills: [
      { name: 'Docker',       icon: <FaDocker /> },
      { name: 'API Deploy' },
      { name: 'Model Serving' },
    ],
  },
  {
    key: 'tools', label: 'Tools', color: '#98989d',
    gridArea: '5 / 1 / 6 / 3',
    skills: [
      { name: 'Git',    icon: <FaGit /> },
      { name: 'GitHub' },
      { name: 'Jira',   icon: <SiJirasoftware /> },
      { name: 'Teams',  icon: <SiMicrosoftteams /> },
    ],
  },
  {
    key: 'frontend', label: 'Frontend', color: '#32ade6',
    gridArea: '5 / 3 / 6 / 5',
    skills: [
      { name: 'React',     icon: <SiReact /> },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'WordPress' },
      { name: 'Tailwind' },
    ],
  },
];

// ─── Keyframes ──────────────────────────────────────────────────────────────

const pulseDot = keyframes`
  0%,100% { opacity: .5; transform: scale(1); }
  50%      { opacity: 1;  transform: scale(1.3); }
`;

const marqueeL = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const marqueeR = keyframes`
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
`;

// ─── Shared ─────────────────────────────────────────────────────────────────

const Wrapper = styled.section`
  padding: 80px 24px 100px;
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 56px 16px 72px;
  }
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const ViewToggle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  border-radius: 980px;
  padding: 4px;
  margin-top: 22px;
`;

const ToggleBtn = styled.button`
  padding: 6px 18px;
  border-radius: 980px;
  border: none;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  background: ${({ $active, theme }) => $active ? theme.bgSecondary : 'transparent'};
  color: ${({ $active, theme }) => $active ? theme.textPrimary : theme.textTertiary};
  box-shadow: ${({ $active }) => $active ? '0 1px 4px rgba(0,0,0,0.1)' : 'none'};
  transition: all 0.2s ease;

  &:hover { color: ${({ theme }) => theme.textPrimary}; }
`;

// ─── MOSAIC ─────────────────────────────────────────────────────────────────

const MosaicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 144px);
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
    grid-auto-rows: auto;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Tile = styled(motion.div)`
  grid-area: ${({ $area }) => $area};
  position: relative;
  border-radius: 16px;
  padding: 16px 18px;
  overflow: hidden;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  cursor: default;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2.5px;
    background: ${({ $color }) => $color};
    border-radius: 16px 16px 0 0;
    opacity: 0.6;
    transition: opacity 0.25s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ $color }) => $color};
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
    border-radius: 16px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 36px rgba(0,0,0,0.12);
    &::before { opacity: 1; }
    &::after  { opacity: 0.04; }
  }

  transition: transform 0.25s ease, box-shadow 0.25s ease;

  @media (max-width: 768px) {
    grid-area: auto !important;
  }
`;

const TileName = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  display: block;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  position: relative;
  z-index: 1;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${({ theme }) => theme.bgTertiary};
  color: ${({ theme }) => theme.textSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  white-space: nowrap;
  transition: border-color 0.2s, color 0.2s;

  ${Tile}:hover & {
    border-color: ${({ $color }) => $color}40;
    color: ${({ theme }) => theme.textPrimary};
  }

  svg {
    width: 11px;
    height: 11px;
    flex-shrink: 0;
    opacity: 0.75;
  }
`;

const GhostNum = styled.span`
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-size: 44px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.06em;
  color: ${({ $color }) => $color};
  opacity: 0.07;
  pointer-events: none;
  z-index: 0;
  user-select: none;
`;

const MosaicView = memo(({ isInView }) => (
  <MosaicGrid>
    {CATEGORIES.map((cat, i) => (
      <Tile
        key={cat.key}
        $area={cat.gridArea}
        $color={cat.color}
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: i * 0.028, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <TileName $color={cat.color}>{cat.label}</TileName>
        <TagCloud>
          {cat.skills.map(s => (
            <Tag key={s.name} $color={cat.color}>
              {s.icon}
              {s.name}
            </Tag>
          ))}
        </TagCloud>
        <GhostNum $color={cat.color}>{cat.skills.length}</GhostNum>
      </Tile>
    ))}
  </MosaicGrid>
));

// ─── LIST VIEW ──────────────────────────────────────────────────────────────

const ListWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const ListRow = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  &:last-child { border-bottom: none; }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

const RowLeft = styled.div`
  width: 168px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 9px;
  padding-top: 4px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
  animation: ${pulseDot} 2.8s ease infinite;
  animation-delay: ${({ $d }) => $d}s;
`;

const RowLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
`;

const RowPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  flex: 1;
`;

const ListPill = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${({ theme }) => theme.bgTertiary};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textSecondary};
  cursor: default;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $bg }) => $bg};
    border-color: ${({ $color }) => $color}50;
    color: ${({ $color }) => $color};
    transform: translateY(-1px);
  }

  svg { width: 12px; height: 12px; opacity: .8; flex-shrink: 0; }
`;

const RowCount = styled.div`
  width: 44px;
  flex-shrink: 0;
  text-align: right;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textTertiary};
  font-weight: 600;
  padding-top: 5px;

  @media (max-width: 600px) { display: none; }
`;

const ListView = memo(({ isInView }) => (
  <ListWrapper
    initial={{ opacity: 0 }}
    animate={{ opacity: isInView ? 1 : 0 }}
    transition={{ duration: 0.3 }}
  >
    {CATEGORIES.map((cat, i) => (
      <ListRow
        key={cat.key}
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.38, delay: i * 0.032 }}
      >
        <RowLeft>
          <Dot $color={cat.color} $d={i * 0.18} />
          <RowLabel>{cat.label}</RowLabel>
        </RowLeft>
        <RowPills>
          {cat.skills.map((s, j) => (
            <ListPill
              key={s.name}
              $color={cat.color}
              $bg={`${cat.color}12`}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.28, delay: i * 0.032 + j * 0.018 }}
            >
              {s.icon}
              {s.name}
            </ListPill>
          ))}
        </RowPills>
        <RowCount>{cat.skills.length}</RowCount>
      </ListRow>
    ))}
  </ListWrapper>
));

// ─── STREAM VIEW ─────────────────────────────────────────────────────────────

const SPEEDS = [68, 82, 58, 76];
const LANES  = [
  CATEGORIES.slice(0, 4),
  CATEGORIES.slice(4, 7),
  CATEGORIES.slice(7, 10),
  CATEGORIES.slice(10),
];

const StreamWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
`;

const Lane = styled.div`
  display: flex;
  gap: 10px;
  width: max-content;
  animation: ${({ $rev }) => ($rev ? marqueeR : marqueeL)} ${({ $spd }) => $spd}s linear infinite;
  will-change: transform;

  &:hover { animation-play-state: paused; }
`;

const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
  background: ${({ $color }) => $color}12;
  border: 1px solid ${({ $color }) => $color}28;
  color: ${({ $color }) => $color};
  transition: background 0.2s ease;

  &:hover {
    background: ${({ $color }) => $color}22;
  }

  svg { width: 13px; height: 13px; opacity: .8; flex-shrink: 0; }
`;

const ChipCat = styled.span`
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  opacity: 0.4;
`;

const StreamView = memo(({ isInView }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: isInView ? 1 : 0 }}
    transition={{ duration: 0.4 }}
  >
    <StreamWrap>
      {LANES.map((lane, li) => {
        const chips = [...lane, ...lane].flatMap(cat =>
          cat.skills.map(s => ({ ...s, col: cat.color, cat: cat.label }))
        );
        return (
          <Lane key={li} $rev={li % 2 !== 0} $spd={SPEEDS[li]}>
            {chips.map((c, ci) => (
              <Chip key={`${c.name}-${ci}`} $color={c.col}>
                {c.icon}
                {c.name}
                <ChipCat>{c.cat}</ChipCat>
              </Chip>
            ))}
          </Lane>
        );
      })}
    </StreamWrap>
  </motion.div>
));

// ─── MAIN ─────────────────────────────────────────────────────────────────────

const VIEWS = [
  { id: 'mosaic', label: '⊞  Mosaic' },
  { id: 'list',   label: '≡  List'   },
  { id: 'stream', label: '∞  Stream' },
];

const Skills = () => {
  const { ref, isInView } = useScrollAnimation();
  const [view, setView]   = useState('mosaic');

  return (
    <Wrapper id="skills">
      <Header>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel variants={staggerItem}>Skills</SectionLabel>
          <SectionTitle variants={staggerItem}>
            {CATEGORIES.length} domains of expertise.
          </SectionTitle>
          <motion.div variants={staggerItem} style={{ marginTop: 18 }}>
            <ViewToggle>
              {VIEWS.map(v => (
                <ToggleBtn key={v.id} $active={view === v.id} onClick={() => setView(v.id)}>
                  {v.label}
                </ToggleBtn>
              ))}
            </ViewToggle>
          </motion.div>
        </motion.div>
      </Header>

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
    </Wrapper>
  );
};

export default Skills;
