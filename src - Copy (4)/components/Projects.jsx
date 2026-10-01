// Projects.jsx — smooth FLIP-style card-to-modal transition
import React, { memo, useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel, SectionTitle } from '../styles/styles';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import resumeData from '../data/resumeData';
import { FiGithub, FiExternalLink, FiX, FiArrowUpRight } from 'react-icons/fi';

const CARD_RADIUS = 18;
const MODAL_RADIUS = 26;
const IMG_H_CARD = 188;
const IMG_H_MODAL = 300;

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

const CardRoot = styled(motion.div)`
  border-radius: ${CARD_RADIUS}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: ${({ theme }) => theme.bgSecondary || 'rgba(255,255,255,0.04)'};
  border: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.1)'};
  position: relative;
  min-width: 0;
  will-change: transform;
  contain: layout paint;
`;

const CardImageBox = styled.div`
  width: 100%;
  height: ${IMG_H_CARD}px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  background: ${({ theme }) => theme.bgTertiary};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const YearBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  color: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255,255,255,0.1);
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

const CardTitle = styled.h3`
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
  transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease;
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
  background: ${({ theme }) => theme.accentSubtle};
  color: ${({ theme }) => theme.accent};
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: #fff;
  }

  &:active { transform: scale(0.97); }
`;

/* Keep the modal as a real centered card on every screen.
   The transition uses only transform/opacity, so it stays smooth on mobile. */
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.58);
  backdrop-filter: blur(5px) saturate(110%);
  -webkit-backdrop-filter: blur(5px) saturate(110%);
  will-change: opacity;

  @media (max-width: 600px) {
    padding: 16px;
  }

  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`;

const ModalShell = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: min(640px, calc(100vw - 48px));
  max-height: 88vh;
  max-height: 88svh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  border-radius: ${MODAL_RADIUS}px;
  background: ${({ theme }) => theme.bgSecondary || '#111118'};
  border: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.14)'};
  box-shadow:
    0 0 0 0.5px rgba(255,255,255,0.07) inset,
    0 32px 80px rgba(0,0,0,0.58),
    0 10px 28px rgba(0,0,0,0.34);
  scrollbar-width: none;
  will-change: transform, opacity;
  transform-origin: center center;
  contain: layout paint;

  &::-webkit-scrollbar { display: none; }

  @media (max-width: 600px) {
    width: min(92vw, 520px);
    max-height: 84svh;
    border-radius: 22px;
  }
`;

const ModalImageBox = styled.div`
  width: 100%;
  height: ${IMG_H_MODAL}px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  background: ${({ theme }) => theme.bgTertiary};

  @media (max-width: 600px) {
    height: 210px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.bgSecondary || '#111118'},
      transparent
    );
    pointer-events: none;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 20;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(0,0,0,0.55);
  color: rgba(255,255,255,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.18s ease, border-color 0.18s ease;

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

  @media (max-width: 600px) {
    padding: 2px 20px 22px;
    gap: 13px;
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.2;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const ModalDesc = styled.p`
  font-size: 0.93rem;
  line-height: 1.82;
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;
`;

const ModalFooter = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 22px;
  border-top: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.08)'};
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 600px) {
    padding-top: 16px;
  }
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
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accentSubtle};
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
  }
`;

const getModalTarget = () => {
  const mobile = window.innerWidth <= 600;
  return {
    width: Math.min(
      mobile ? window.innerWidth * 0.92 : 640,
      window.innerWidth - (mobile ? 32 : 48)
    ),
    height: Math.min(
      window.innerHeight * (mobile ? 0.84 : 0.88),
      mobile ? 760 : 820
    ),
  };
};

const getMorphTransform = (originRect, target) => {
  if (!originRect) return { x: 0, y: 0, scaleX: 1, scaleY: 1 };

  const originCenterX = originRect.left + originRect.width / 2;
  const originCenterY = originRect.top + originRect.height / 2;
  const targetCenterX = window.innerWidth / 2;
  const targetCenterY = window.innerHeight / 2;

  return {
    x: originCenterX - targetCenterX,
    y: originCenterY - targetCenterY,
    scaleX: originRect.width / target.width,
    scaleY: originRect.height / target.height,
  };
};

const TRANSITION = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
};

const Modal = ({ project, originRect, onClose }) => {
  const [target, setTarget] = useState(() => getModalTarget());
  const origin = getMorphTransform(originRect, target);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onResize = () => setTarget(getModalTarget());
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const targetTransform = { x: 0, y: 0, scaleX: 1, scaleY: 1 };

  return ReactDOM.createPortal(
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
      onClick={onClose}
    >
      <ModalShell
        initial={origin}
        animate={targetTransform}
        exit={origin}
        transition={TRANSITION}
        style={{ height: target.height }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseBtn onClick={onClose} aria-label="Close project">
          <FiX size={15} />
        </CloseBtn>

        <ModalImageBox>
          <ModalImage
            src={project.image}
            alt={project.name}
            loading="eager"
            decoding="async"
          />
          {project.date && <YearBadge>{project.date}</YearBadge>}
        </ModalImageBox>

        <ModalBody>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ delay: 0.16, duration: 0.28, ease: 'easeOut' }}
          >
            <ModalTitle>{project.name}</ModalTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.20, duration: 0.28, ease: 'easeOut' }}
          >
            <ModalDesc>{project.description}</ModalDesc>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.25, ease: 'easeOut' }}
          >
            <ModalFooter>
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
          </motion.div>
        </ModalBody>
      </ModalShell>
    </Overlay>,
    document.body
  );
};

const ProjectCard = memo(({ project, index, onExpand, isExpanded }) => {
  const { ref, isInView } = useScrollAnimation(0.08);
  const cardRef = useRef(null);

  const handleExpand = useCallback((e) => {
    e.stopPropagation();

    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    onExpand(project, rect);
  }, [project, onExpand]);

  if (isExpanded) {
    return (
      <CardRoot
        aria-hidden="true"
        style={{
          minHeight: 340,
          visibility: 'hidden',
          pointerEvents: 'none',
        }}
      />
    );
  }

  return (
    <CardRoot
      ref={(node) => {
        cardRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        opacity: { duration: 0.38, delay: (index % 3) * 0.06 },
        y: { duration: 0.38, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] },
      }}
      whileHover={{ y: -5, transition: { duration: 0.18, ease: 'easeOut' } }}
      whileTap={{ scale: 0.985 }}
      onClick={handleExpand}
    >
      <CardImageBox>
        <Img
          src={project.image}
          alt={project.name}
          loading="lazy"
          decoding="async"
        />
        {project.date && <YearBadge>{project.date}</YearBadge>}
      </CardImageBox>

      <CardBody>
        <CardTitle>{project.name}</CardTitle>
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

const Projects = () => {
  const { ref, isInView } = useScrollAnimation();
  const [expanded, setExpanded] = useState(null);

  const handleExpand = useCallback((project, originRect) => {
    setExpanded({ project, originRect });
  }, []);

  const handleCollapse = useCallback(() => {
    setExpanded(null);
  }, []);

  return (
    <Wrapper>
      <Header>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel variants={staggerItem}>{resumeData.sections.work.projects.label}</SectionLabel>
          <SectionTitle variants={staggerItem}>{resumeData.sections.work.projects.title}</SectionTitle>
        </motion.div>
      </Header>

      <Grid>
        {resumeData.projects.map((project, i) => {
          const isExpanded = expanded?.project === project;

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

      <AnimatePresence>
        {expanded && (
          <Modal
            key={expanded.project.name}
            project={expanded.project}
            originRect={expanded.originRect}
            onClose={handleCollapse}
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Projects;


