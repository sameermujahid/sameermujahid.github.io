// Projects.jsx — smooth FLIP-style card-to-modal transition
import React, { memo, useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import resumeData from '../data/resumeData';
import { FiGithub, FiExternalLink, FiX, FiArrowUpRight } from 'react-icons/fi';
import { SpotlightGlow } from './SpotlightEffects';

import {
  SectionLabel,
  SectionTitle,
  ProjectsWrapper,
  ProjectsHeader,
  ProjectsGrid,
  ProjectsCardRoot,
  ProjectsCardImageBox,
  ProjectsImg,
  ProjectsYearBadge,
  ProjectsCardBody,
  ProjectsCardTitle,
  ProjectsCardDesc,
  ProjectsCardFooter,
  ProjectsChip,
  ProjectsKnowMoreChip,
  ProjectsOverlay,
  ProjectsModalShell,
  ProjectsModalImageBox,
  ProjectsModalImage,
  ProjectsCloseBtn,
  ProjectsModalBody,
  ProjectsModalTitle,
  ProjectsModalDesc,
  ProjectsModalFooter,
  ProjectsModalLinkBtn
} from '../styles/styles';

const CARD_RADIUS = 18;
const MODAL_RADIUS = 26;
const IMG_H_CARD = 188;
const IMG_H_MODAL = 300;



























/* Keep the modal as a real centered card on every screen.
   The transition uses only transform/opacity, so it stays smooth on mobile. */




















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
    <ProjectsOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
      onClick={onClose}
    >
      <ProjectsModalShell
        initial={origin}
        animate={targetTransform}
        exit={origin}
        transition={TRANSITION}
        style={{ height: target.height }}
        onClick={(e) => e.stopPropagation()}
      >
        <ProjectsCloseBtn onClick={onClose} aria-label="Close project">
          <FiX size={15} />
        </ProjectsCloseBtn>

        <ProjectsModalImageBox>
          <ProjectsModalImage
            src={project.image}
            alt={project.name}
            loading="eager"
            decoding="async"
          />
          {project.date && <ProjectsYearBadge>{project.date}</ProjectsYearBadge>}
        </ProjectsModalImageBox>

        <ProjectsModalBody>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ delay: 0.16, duration: 0.28, ease: 'easeOut' }}
          >
            <ProjectsModalTitle>{project.name}</ProjectsModalTitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.20, duration: 0.28, ease: 'easeOut' }}
          >
            <ProjectsModalDesc>{project.description}</ProjectsModalDesc>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.25, ease: 'easeOut' }}
          >
            <ProjectsModalFooter>
              {project.github && (
                <ProjectsModalLinkBtn href={project.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub size={15} /> View on GitHub
                </ProjectsModalLinkBtn>
              )}
              {project.view && (
                <ProjectsModalLinkBtn href={project.view} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink size={15} /> Live Demo
                </ProjectsModalLinkBtn>
              )}
            </ProjectsModalFooter>
          </motion.div>
        </ProjectsModalBody>
      </ProjectsModalShell>
    </ProjectsOverlay>,
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
      <ProjectsCardRoot
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
    <ProjectsCardRoot
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
      data-spotlight="true"
    >
      <SpotlightGlow />
      <ProjectsCardImageBox>
        <ProjectsImg
          src={project.image}
          alt={project.name}
          loading="lazy"
          decoding="async"
        />
        {project.date && <ProjectsYearBadge>{project.date}</ProjectsYearBadge>}
      </ProjectsCardImageBox>

      <ProjectsCardBody>
        <ProjectsCardTitle>{project.name}</ProjectsCardTitle>
        <ProjectsCardDesc>{project.description}</ProjectsCardDesc>

        <ProjectsCardFooter onClick={(e) => e.stopPropagation()}>
          {project.github && (
            <ProjectsChip as="a" href={project.github} target="_blank" rel="noopener noreferrer">
              <FiGithub size={12} /> GitHub
            </ProjectsChip>
          )}
          {project.view && (
            <ProjectsChip as="a" href={project.view} target="_blank" rel="noopener noreferrer">
              <FiExternalLink size={12} /> Live
            </ProjectsChip>
          )}
          <ProjectsKnowMoreChip onClick={handleExpand}>
            Know more <FiArrowUpRight size={12} />
          </ProjectsKnowMoreChip>
        </ProjectsCardFooter>
      </ProjectsCardBody>
    </ProjectsCardRoot>
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
    <ProjectsWrapper>
      <ProjectsHeader>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel variants={staggerItem}>{resumeData.sections.work.projects.label}</SectionLabel>
          <SectionTitle variants={staggerItem}>{resumeData.sections.work.projects.title}</SectionTitle>
        </motion.div>
      </ProjectsHeader>

      <ProjectsGrid>
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
      </ProjectsGrid>

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
    </ProjectsWrapper>
  );
};

export default Projects;



