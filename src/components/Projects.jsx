// Projects.jsx — True Shared Element Morph (card lifts out, leaves blank, expands)
import React, { memo, useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from 'framer-motion';
import { SectionLabel, SectionTitle } from '../styles/styles';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import resumeData from '../data/resumeData';
import { FiGithub, FiExternalLink, FiX, FiArrowUpRight } from 'react-icons/fi';

// ─── Tokens ───────────────────────────────────────────────────────────────────

const CARD_RADIUS   = 18;
const MODAL_RADIUS  = 26;
const IMG_H_CARD    = 188;
const IMG_H_MODAL   = 300;

// Two spring personalities:
// HERO  → the morphing shell — fast, snappy
// TRAIL → inner elements that trail behind slightly for depth
const SPRING_HERO = { type: 'spring', stiffness: 420, damping: 34, mass: 0.8 };
const SPRING_TRAIL = { type: 'spring', stiffness: 300, damping: 30, mass: 1.0 };

// Content that appears after morph lands
const FADE_STAGGER = (delay = 0) => ({
  initial:    { opacity: 0, y: 18, filter: 'blur(5px)' },
  animate:    { opacity: 1, y: 0,  filter: 'blur(0px)' },
  exit:       { opacity: 0, y: 10, filter: 'blur(3px)' },
  transition: { delay, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
});

// ─── Styled Components ────────────────────────────────────────────────────────

const Wrapper = styled.div`
  padding: 56px 0 60px;
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

// The ghost placeholder that stays in the grid while card is expanded
// It preserves the layout hole — this is the magic ✨
const CardPlaceholder = styled(motion.div)`
  border-radius: ${CARD_RADIUS}px;
  background: ${({ theme }) => theme.border || 'rgba(255,255,255,0.04)'};
  border: 1.5px dashed ${({ theme }) => theme.border || 'rgba(255,255,255,0.1)'};
  min-height: 320px;
  opacity: 0.35;
`;

// The actual card — becomes invisible when expanded (modal takes over)
const CardRoot = styled(motion.div)`
  border-radius: ${CARD_RADIUS}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: ${({ theme }) => theme.bgSecondary || 'rgba(255,255,255,0.04)'};
  border: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.1)'};
  will-change: transform;
  position: relative;
`;

const CardImageBox = styled(motion.div)`
  width: 100%;
  height: ${IMG_H_CARD}px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  background: ${({ theme }) => theme.bgTertiary};
`;

const Img = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform-origin: center center;
`;

const YearBadge = styled(motion.span)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  letter-spacing: 0.04em;
  pointer-events: none;
`;

const CardBody = styled.div`
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const CardTitle = styled(motion.h3)`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.3;
  margin: 0;
`;

const CardDesc = styled.p`
  font-size: 0.84rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.textSecondary};
  flex: 1;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  gap: 7px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.08)'};
  margin-top: 4px;
  align-items: center;
`;

const Chip = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.12)'};
  background: ${({ theme }) => theme.bgTertiary || 'rgba(255,255,255,0.05)'};
  color: ${({ theme }) => theme.textSecondary};
  transition: all 0.18s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.accentSubtle};
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;

const KnowMoreChip = styled.button`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.accent};
  background: ${({ theme }) => theme.accentSubtle || 'rgba(99,102,241,0.12)'};
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: all 0.18s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: #fff;
  }
  &:active {
    transform: scale(0.96);
  }
`;

// ─── Modal Overlay ────────────────────────────────────────────────────────────

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  pointer-events: all;

  /* frosted backdrop */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(20px) saturate(1.6);
    -webkit-backdrop-filter: blur(20px) saturate(1.6);
  }
`;

// The modal shell — this is the element that shares layoutId with the card
// It literally IS the card, morphed into modal size
const ModalShell = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 640px;
  max-height: 88vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  border-radius: ${MODAL_RADIUS}px;
  background: ${({ theme }) => theme.bgSecondary || '#111118'};
  border: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.14)'};
  box-shadow:
    0 0 0 0.5px rgba(255,255,255,0.07) inset,
    0 40px 100px rgba(0,0,0,0.65),
    0 12px 32px rgba(0,0,0,0.4);
  will-change: transform, border-radius;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

const ModalImageBox = styled(motion.div)`
  width: 100%;
  height: ${IMG_H_MODAL}px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 100px;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.bgSecondary || '#111118'},
      transparent
    );
    pointer-events: none;
  }
`;

const CloseBtn = styled(motion.button)`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 20;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(0,0,0,0.55);
  color: rgba(255,255,255,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: background 0.18s ease;

  &:hover {
    background: rgba(220, 50, 50, 0.75);
    border-color: rgba(220, 50, 50, 0.5);
  }
`;

const ModalBody = styled.div`
  padding: 4px 30px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ModalTitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.2;
  margin: 0;
`;

const ModalDesc = styled(motion.p)`
  font-size: 0.93rem;
  line-height: 1.82;
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;
`;

const ModalFooter = styled(motion.div)`
  display: flex;
  gap: 10px;
  padding-top: 22px;
  border-top: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.08)'};
  flex-wrap: wrap;
  align-items: center;
`;

const ModalLinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.12)'};
  background: ${({ theme }) => theme.bgTertiary || 'rgba(255,255,255,0.05)'};
  color: ${({ theme }) => theme.textSecondary};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accentSubtle};
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
  }
`;

// ─── Modal Portal ─────────────────────────────────────────────────────────────

const Modal = ({ project, cardId, onClose }) => {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return ReactDOM.createPortal(
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      onClick={onClose}
    >
      {/* ── This shell shares layoutId with the card → TRUE morph ── */}
      <ModalShell
        layoutId={cardId}
        layout
        transition={SPRING_HERO}
        style={{ borderRadius: MODAL_RADIUS }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close — appears after morph lands */}
        <CloseBtn
          onClick={onClose}
          initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.4, rotate: 90 }}
          transition={{ delay: 0.18, type: 'spring', stiffness: 400, damping: 22 }}
        >
          <FiX size={14} />
        </CloseBtn>

        {/* Image morphs size */}
        <ModalImageBox layoutId={`${cardId}-imgbox`} transition={SPRING_HERO}>
          <Img
            layoutId={`${cardId}-img`}
            src={project.image}
            alt={project.name}
            transition={SPRING_HERO}
            style={{ height: '100%' }}
          />
          {project.date && (
            <YearBadge layoutId={`${cardId}-badge`} transition={SPRING_TRAIL}>
              {project.date}
            </YearBadge>
          )}
        </ModalImageBox>

        {/* Body content */}
        <ModalBody>
          {/* Title morphs in place */}
          <ModalTitle layoutId={`${cardId}-title`} transition={SPRING_TRAIL}>
            {project.name}
          </ModalTitle>

          {/* Full desc fades in after morph */}
          <ModalDesc {...FADE_STAGGER(0.13)}>
            {project.description}
          </ModalDesc>

          {/* Footer fades in slightly after */}
          <ModalFooter {...FADE_STAGGER(0.20)}>
            {project.github && (
              <ModalLinkBtn href={project.github} target="_blank" rel="noopener noreferrer">
                <FiGithub size={15} /> View on GitHub
              </ModalLinkBtn>
            )}
            {project.view && (
              <ModalLinkBtn href={project.view} target="_blank" rel="noopener noreferrer">
                <FiExternalLink size={15} /> Live Demo
              </ModalLinkBtn>
            )}
          </ModalFooter>
        </ModalBody>
      </ModalShell>
    </Overlay>,
    document.body
  );
};

// ─── Project Card ─────────────────────────────────────────────────────────────

const ProjectCard = memo(({ project, index, onExpand, isExpanded }) => {
  const { ref, isInView } = useScrollAnimation(0.08);
  const cardId = `proj-${(project.name || index).replace(/\s+/g, '-')}`;

  const handleExpand = useCallback(
    (e) => { e.stopPropagation(); onExpand(project, cardId); },
    [project, cardId, onExpand]
  );

  // When THIS card is expanded, render a ghost placeholder
  // (preserves grid hole while card is "floating" in the modal)
  if (isExpanded) {
    return (
      <CardPlaceholder
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        style={{ minHeight: '340px' }}
      />
    );
  }

  return (
    <CardRoot
      ref={ref}
      layoutId={cardId}
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        opacity: { duration: 0.42, delay: (index % 3) * 0.08 },
        y:       { duration: 0.42, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] },
        layout:  SPRING_HERO,
      }}
      whileHover={{ y: -7, scale: 1.015, transition: { duration: 0.2, ease: 'easeOut' } }}
      whileTap={{ scale: 0.978 }}
      onClick={handleExpand}
      style={{ borderRadius: CARD_RADIUS }}
    >
      {/* Image */}
      <CardImageBox layoutId={`${cardId}-imgbox`} transition={SPRING_HERO}>
        <Img
          layoutId={`${cardId}-img`}
          src={project.image}
          alt={project.name}
          loading="lazy"
          transition={SPRING_HERO}
          style={{ height: '100%' }}
        />
        {project.date && (
          <YearBadge layoutId={`${cardId}-badge`} transition={SPRING_TRAIL}>
            {project.date}
          </YearBadge>
        )}
      </CardImageBox>

      {/* Body */}
      <CardBody>
        <CardTitle layoutId={`${cardId}-title`} transition={SPRING_TRAIL}>
          {project.name}
        </CardTitle>
        <CardDesc>{project.description}</CardDesc>

        <CardFooter onClick={(e) => e.stopPropagation()}>
          {project.github && (
            <Chip as="a" href={project.github} target="_blank" rel="noopener noreferrer">
              <FiGithub size={12} /> GitHub
            </Chip>
          )}
          {project.view && (
            <Chip as="a" href={project.view} target="_blank" rel="noopener noreferrer">
              <FiExternalLink size={12} /> Live
            </Chip>
          )}
          <KnowMoreChip onClick={handleExpand}>
            Know more <FiArrowUpRight size={12} />
          </KnowMoreChip>
        </CardFooter>
      </CardBody>
    </CardRoot>
  );
});

// ─── Main ─────────────────────────────────────────────────────────────────────

const Projects = () => {
  const { ref, isInView } = useScrollAnimation();

  // Store both the project data AND its cardId
  const [expanded, setExpanded] = useState(null); // { project, cardId }

  const handleExpand   = useCallback((project, cardId) => setExpanded({ project, cardId }), []);
  const handleCollapse = useCallback(() => setExpanded(null), []);

  return (
    // LayoutGroup is CRITICAL — it syncs layout animations across the
    // card-in-grid and the modal-in-portal even though they're in separate DOM trees
    <LayoutGroup>
      <Wrapper>
        <Header>
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <SectionLabel variants={staggerItem}>Projects</SectionLabel>
            <SectionTitle variants={staggerItem}>Things I've built.</SectionTitle>
          </motion.div>
        </Header>

        <Grid>
          {resumeData.projects.map((project, i) => {
            const cardId = `proj-${(project.name || i).replace(/\s+/g, '-')}`;
            const isExpanded = expanded?.cardId === cardId;

            return (
              <ProjectCard
                key={project.name || i}
                project={project}
                index={i}
                onExpand={handleExpand}
                isExpanded={isExpanded}
              />
            );
          })}
        </Grid>
      </Wrapper>

      {/* Portal modal — morphs out of card, morphs back on close */}
      <AnimatePresence mode="popLayout">
        {expanded && (
          <Modal
            key={expanded.cardId}
            project={expanded.project}
            cardId={expanded.cardId}
            onClose={handleCollapse}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default Projects;