// Connect.jsx
// Professional-grade animation philosophy: orchestrated state transitions with zero layout thrash.
// Every motion is purposeful. Spring physics tuned for premium feel. No janky DOM shuffling.
// Proper exit strategies, layout stability, and hardware-accelerated transforms throughout.

import React, { useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import axios from 'axios';
import {
  GlassCard, SectionLabel, SectionTitle, SectionSubtitle,
  Spinner
} from '../styles/styles';
import { useScrollAnimation, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import resumeData from '../data/resumeData';
import { RiTwitterXFill } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io5';
import {
  FiGithub, FiLinkedin, FiMail, FiPhone,
  FiBriefcase, FiUsers, FiArrowRight, FiCheck,
} from 'react-icons/fi';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion';

// ─── Physics presets (tuned for premium feel) ─────────────────────────────────
const SPRING_SMOOTH   = { type: 'spring', stiffness: 120, damping: 20, mass: 0.8 };
const SPRING_BOUNCY   = { type: 'spring', stiffness: 260, damping: 24, mass: 0.7 };
const SPRING_TIGHT    = { type: 'spring', stiffness: 300, damping: 30, mass: 0.5 };
const EASE_OUT_QUART  = [0.25, 1, 0.5, 1];
const EASE_OUT_EXPO   = [0.16, 1, 0.3, 1];
const EASE_IN_OUT_SINE = [0.37, 0, 0.63, 1];

// ─── Keyframes ───────────────────────────────────────────────────────────────
const shimmer = keyframes`
  0%   { background-position: -100% center; }
  100% { background-position: 200% center; }
`;

const gradientRotate = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ripple = keyframes`
  0%   { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
`;

const Wrapper = styled.section`
  padding: 100px 24px 120px;
  max-width: 1350px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 70px 20px 90px;
  }
  
  @media (max-width: 480px) {
    padding: 60px 16px 80px;
  }
`;
const Header = styled.div`
  margin-bottom: 64px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 32px;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;
// ─── Info card ────────────────────────────────────────────────────────────────
const InfoCard = styled(GlassCard)`
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  position: sticky;
  top: 100px;
  
  @media (max-width: 968px) {
    position: static;
    padding: 28px;
  }
  
  @media (max-width: 480px) {
    padding: 24px;
    gap: 24px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.textPrimary};
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
`;

const InfoBody = styled.p`
  font-size: 0.9375rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  padding: 10px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: translateX(4px);
  }
  
  svg {
    color: ${({ theme }) => theme.accent};
    flex-shrink: 0;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.border} 20%,
    ${({ theme }) => theme.border} 80%,
    transparent
  );
`;

const SocialRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const SocialBtn = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.bgTertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.accent};
    opacity: 0;
    transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  svg {
    position: relative;
    z-index: 1;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px ${({ theme }) => `${theme.accent}30`};
    
    &::before { opacity: 0.1; }
    
    svg {
      color: ${({ theme }) => theme.accent};
      transform: scale(1.15);
    }
  }
`;

const OpportunityTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 100px;
  background: ${({ theme }) => theme.accentSubtle};
  color: ${({ theme }) => theme.accent};
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => `${theme.accent}20`},
      transparent
    );
    
  }
`;

// ─── Form card ────────────────────────────────────────────────────────────────
const FormCardWrapper = styled(motion.div)`
  position: relative;
`;

const FormCard = styled(GlassCard)`
  position: relative;
  overflow: hidden;
  will-change: transform;
`;

// Success gradient background (animated)
const SuccessGradient = styled(motion.div)`
  position: absolute;
  inset: -50%;
  background: conic-gradient(
    from 0deg,
    ${({ theme }) => `${theme.accent}15`},
    transparent 60%,
    ${({ theme }) => `${theme.accent}15`}
  );
  
  pointer-events: none;
  z-index: 0;
  opacity: 0;
`;

// Ripple effect on success
const Ripple = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${({ theme }) => `${theme.accent}15`};
  pointer-events: none;
  z-index: 0;
`;

const FormInner = styled(motion.div)`
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
  }
  
  @media (max-width: 480px) {
  }
`;

const SuccessInner = styled(motion.div)`
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 50px 32px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 24px;
    gap: 16px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormField = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
  letter-spacing: 0.01em;
`;

const baseInput = css`
  padding: 14px 16px;
  border-radius: 12px;
  font-size: 0.9375rem;
  font-family: inherit;
  outline: none;
  width: 100%;
  background: ${({ theme }) => theme.bgTertiary};
  border: 2px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textPrimary};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::placeholder {
    color: ${({ theme }) => theme.textTertiary};
  }
  
  &:focus {
    border-color: ${({ theme }) => theme.accent};
    background: ${({ theme }) => theme.bgSecondary};
    box-shadow: 0 0 0 4px ${({ theme }) => `${theme.accent}15`};
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Input = styled.input`${baseInput}`;
const Textarea = styled.textarea`
  ${baseInput}
  min-height: 140px;
  resize: vertical;
  line-height: 1.6;
`;

// ─── Submit button ────────────────────────────────────────────────────────────
const SubmitBtn = styled(motion.button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 32px;
  border-radius: 100px;
  border: none;
  width: 100%;
  font-size: 0.9375rem;
  font-weight: 600;
  font-family: inherit;
  color: white;
  cursor: pointer;
  overflow: hidden;
  background: ${({ theme }) => theme.accent};
  box-shadow: 0 4px 16px ${({ theme }) => `${theme.accent}40`};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.accentHover};
    box-shadow: 0 6px 24px ${({ theme }) => `${theme.accent}50`};
    transform: translateY(-2px);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    cursor: default;
    opacity: 0.8;
  }
`;

const BtnShine = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: translateX(-100%);
`;

const BtnProgress = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: inherit;
  pointer-events: none;
`;

const BtnLabel = styled(motion.span)`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
`;


const CheckContainer = styled(motion.div)`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accentSubtle};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.accentHover});
    opacity: 0.3;
    filter: blur(12px);
  }
`;

const CheckIcon = styled(motion.div)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

const SuccessTitle = styled(motion.h3)`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.textPrimary},
    ${({ theme }) => theme.accent}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SuccessSub = styled(motion.p)`
  font-size: 0.9375rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 320px;
  margin: 0;
`;

const SuccessDivider = styled(motion.div)`
  width: 48px;
  height: 2px;
  border-radius: 2px;
  background: ${({ theme }) => theme.accent};
  opacity: 0.3;
`;

const ResetBtn = styled(motion.button)`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.border};
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border-radius: 100px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 8px;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
    background: ${({ theme }) => theme.accentSubtle};
    transform: translateY(-2px);
  }
`;

// ─── Animation variants ───────────────────────────────────────────────────────
const formContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const formField = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING_SMOOTH,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: EASE_OUT_QUART,
    },
  },
};

const successContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const successItem = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: SPRING_BOUNCY,
  },
};

const checkIconVariant = {
  hidden: {
    scale: 0,
    rotate: -180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      ...SPRING_BOUNCY,
      delay: 0.3,
    },
  },
};

const dividerVariant = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: SPRING_TIGHT,
  },
};

// ─── Social links ─────────────────────────────────────────────────────────────
const SOCIAL_ICONS = {
  linkedin: <FiLinkedin />,
  github: <FiGithub />,
  instagram: <IoLogoInstagram />,
  twitter: <RiTwitterXFill />,
};

const SOCIAL_LINKS = resumeData.socials.map((social) => ({
  ...social,
  icon: SOCIAL_ICONS[social.key],
}));

// ─── Component ────────────────────────────────────────────────────────────────
const Connect = () => {
  const [phase, setPhase] = useState('idle'); // 'idle' | 'loading' | 'success'
  const [showRipple, setShowRipple] = useState(false);
  
  const progressX = useMotionValue(0);
  const progressWidth = useTransform(progressX, [0, 1], ['0%', '100%']);
  
  const { ref, isInView } = useScrollAnimation();
  const formRef = useRef(null);

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append('access_key', '9ee753a6-c053-4819-9996-56a1043ba7f4');

    setPhase('loading');
    progressX.set(0);
    
    // Smooth progress animation
    animate(progressX, 0.85, {
      duration: 2.2,
      ease: EASE_OUT_EXPO,
    });

    try {
      const res = await axios.post('https://api.web3forms.com/submit', formData);

      if (res.data.success) {
        // Complete progress
        await animate(progressX, 1, {
          duration: 0.25,
          ease: EASE_OUT_QUART,
        });
        
        form.reset();
        
        // Small delay for smoother transition
        await new Promise(resolve => setTimeout(resolve, 150));
        
        setShowRipple(true);
        setPhase('success');
        
      } else {
        progressX.set(0);
        setPhase('idle');
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      progressX.set(0);
      setPhase('idle');
      alert('Something went wrong. Please try again.');
    }
  };

  // ── Reset ───────────────────────────────────────────────────────────────────
  const handleReset = () => {
    setPhase('idle');
    setShowRipple(false);
    progressX.set(0);
  };

  const isLoading = phase === 'loading';
  const isSuccess = phase === 'success';

  return (
    <Wrapper data-perf-section="true">
      
      {/* ── Header ── */}
      <Header  id="connect">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel variants={staggerItem}>{resumeData.connect.label}</SectionLabel>
          <SectionTitle variants={staggerItem}>
            <>{resumeData.connect.titleLineOne}<br />{resumeData.connect.titleLineTwo}</>
          </SectionTitle>
          <SectionSubtitle variants={staggerItem}>
            {resumeData.connect.subtitle}
          </SectionSubtitle>
        </motion.div>
      </Header>

      <Grid>
        
        {/* ── Left — Info ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT_EXPO }}
        >
          <InfoCard>
            <div>
              <OpportunityTag>
                <FiBriefcase size={13} />
                {resumeData.connect.opportunityTag}
              </OpportunityTag>
              <InfoTitle>
                <FiUsers size={24} />
                {resumeData.connect.infoTitle}
              </InfoTitle>
              <InfoBody style={{ marginTop: 12 }}>
                {resumeData.connect.infoBody}
              </InfoBody>
            </div>

            <Divider />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <ContactItem href={`mailto:${resumeData.contact.email}`}>
                <FiMail size={16} />
                {resumeData.contact.email}
              </ContactItem>
              <ContactItem href={`tel:+91${resumeData.contact.phone}`}>
                <FiPhone size={16} />
                {`+91 ${resumeData.contact.phone}`}
              </ContactItem>
            </div>

            <Divider />

            <SocialRow>
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <SocialBtn
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {icon}
                </SocialBtn>
              ))}
            </SocialRow>
          </InfoCard>
        </motion.div>

        {/* ── Right — Form Card ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE_OUT_EXPO }}
        >
          <FormCardWrapper>
            <FormCard>
              
              {/* Success gradient background */}
              <AnimatePresence>
                {isSuccess && (
                  <SuccessGradient
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
              
              {/* Ripple effect */}
              <AnimatePresence>
                {showRipple && (
                  <Ripple
                    initial={{ scale: 0, opacity: 0.6 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 1, ease: EASE_OUT_EXPO }}
                    onAnimationComplete={() => setShowRipple(false)}
                  />
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                
                {/* ──── FORM ──── */}
                {!isSuccess && (
                  <FormInner
                    key="form"
                    variants={formContainer}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Form ref={formRef} onSubmit={handleSubmit}>
                      
                      {/* Name */}
                      <FormField variants={formField}>
                        <Label htmlFor="name">{resumeData.connect.form.nameLabel}</Label>
                        <Input
                          id="name"
                          type="text"
                          name="name"
                          placeholder={resumeData.connect.form.namePlaceholder}
                          required
                          disabled={isLoading}
                        />
                      </FormField>

                      {/* Email */}
                      <FormField variants={formField}>
                        <Label htmlFor="email">{resumeData.connect.form.emailLabel}</Label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          placeholder={resumeData.connect.form.emailPlaceholder}
                          required
                          disabled={isLoading}
                        />
                      </FormField>

                      {/* Message */}
                      <FormField variants={formField}>
                        <Label htmlFor="message">{resumeData.connect.form.messageLabel}</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder={resumeData.connect.form.messagePlaceholder}
                          required
                          disabled={isLoading}
                        />
                      </FormField>

                      {/* Submit Button */}
                      <FormField variants={formField}>
                        <SubmitBtn
                          type="submit"
                          disabled={isLoading}
                          whileTap={!isLoading ? { scale: 0.98 } : {}}
                        >
                          {/* Static button surface: no permanent animation loop. */}
                          
                          {/* Progress bar */}
                          {isLoading && (
                            <BtnProgress
                              style={{ width: progressWidth }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            />
                          )}

                          <AnimatePresence mode="wait">
                            {isLoading ? (
                              <BtnLabel
                                key="loading"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Spinner />
                                {resumeData.connect.form.loadingLabel}
                              </BtnLabel>
                            ) : (
                              <BtnLabel
                                key="idle"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <line x1="22" y1="2" x2="11" y2="13" />
                                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                                {resumeData.connect.form.submitLabel}
                              </BtnLabel>
                            )}
                          </AnimatePresence>
                        </SubmitBtn>
                      </FormField>
                      
                    </Form>
                  </FormInner>
                )}

                {/* ──── SUCCESS ──── */}
                {isSuccess && (
                  <SuccessInner
                    key="success"
                    variants={successContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    
                    {/* Check icon */}
                    <motion.div variants={successItem}>
                      <CheckContainer>
                        <CheckIcon variants={checkIconVariant}>
                          <FiCheck />
                        </CheckIcon>
                      </CheckContainer>
                    </motion.div>

                    {/* Title */}
                    <SuccessTitle variants={successItem}>
                      {resumeData.connect.form.successTitle}
                    </SuccessTitle>

                    {/* Divider */}
                    <SuccessDivider variants={dividerVariant} />

                    {/* Subtitle */}
                    <SuccessSub variants={successItem}>
                      {resumeData.connect.form.successText}
                    </SuccessSub>

                    {/* Reset button */}
                    <motion.div variants={successItem}>
                      <ResetBtn
                        onClick={handleReset}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {resumeData.connect.form.resetLabel}
                        <FiArrowRight size={14} />
                      </ResetBtn>
                    </motion.div>
                    
                  </SuccessInner>
                )}
                
              </AnimatePresence>
            </FormCard>
          </FormCardWrapper>
        </motion.div>

      </Grid>
    </Wrapper>
  );
};

export default Connect;


