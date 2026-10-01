// Connect.jsx
// Professional-grade animation philosophy: orchestrated state transitions with zero layout thrash.
// Every motion is purposeful. Spring physics tuned for premium feel. No janky DOM shuffling.
// Proper exit strategies, layout stability, and hardware-accelerated transforms throughout.

import React, { useState, useRef } from 'react';
import axios from 'axios';
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

import {
  GlassCard,
  SectionLabel,
  SectionTitle,
  SectionSubtitle,
  Spinner,
  ConnectWrapper,
  ConnectHeader,
  ConnectGrid,
  ConnectInfoCard,
  ConnectInfoTitle,
  ConnectInfoBody,
  ConnectContactItem,
  ConnectDivider,
  ConnectSocialRow,
  ConnectSocialBtn,
  ConnectOpportunityTag,
  ConnectFormCardWrapper,
  ConnectFormCard,
  ConnectSuccessGradient,
  ConnectRipple,
  ConnectFormInner,
  ConnectSuccessInner,
  ConnectForm,
  ConnectFormField,
  ConnectLabel,
  ConnectInput,
  ConnectTextarea,
  ConnectSubmitBtn,
  ConnectBtnShine,
  ConnectBtnProgress,
  ConnectBtnLabel,
  ConnectCheckContainer,
  ConnectCheckIcon,
  ConnectSuccessTitle,
  ConnectSuccessSub,
  ConnectSuccessDivider,
  ConnectResetBtn
} from '../styles/styles';

// ─── Physics presets (tuned for premium feel) ─────────────────────────────────
const SPRING_SMOOTH   = { type: 'spring', stiffness: 120, damping: 20, mass: 0.8 };
const SPRING_BOUNCY   = { type: 'spring', stiffness: 260, damping: 24, mass: 0.7 };
const SPRING_TIGHT    = { type: 'spring', stiffness: 300, damping: 30, mass: 0.5 };
const EASE_OUT_QUART  = [0.25, 1, 0.5, 1];
const EASE_OUT_EXPO   = [0.16, 1, 0.3, 1];
const EASE_IN_OUT_SINE = [0.37, 0, 0.63, 1];

// ─── Keyframes ───────────────────────────────────────────────────────────────










// ─── Info card ────────────────────────────────────────────────────────────────
















// ─── ConnectForm card ────────────────────────────────────────────────────────────────




// Success gradient background (animated)


// ConnectRipple effect on success

















// ─── Submit button ────────────────────────────────────────────────────────────





















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
  <ConnectWrapper >
    
    <ConnectHeader id="connect"
    data-perf-section="true">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <SectionLabel variants={staggerItem}>
          {resumeData.connect.label}
        </SectionLabel>

        <SectionTitle variants={staggerItem}>
          <>
            {resumeData.connect.titleLineOne}
            <br />
            {resumeData.connect.titleLineTwo}
          </>
        </SectionTitle>

        <SectionSubtitle variants={staggerItem}>
          {resumeData.connect.subtitle}
        </SectionSubtitle>
      </motion.div>
    </ConnectHeader>

      <ConnectGrid>
        
        {/* ── Left — Info ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT_EXPO }}
        >
          <ConnectInfoCard>
            <div>
              <ConnectOpportunityTag>
                <FiBriefcase size={13} />
                {resumeData.connect.opportunityTag}
              </ConnectOpportunityTag>
              <ConnectInfoTitle>
                <FiUsers size={24} />
                {resumeData.connect.infoTitle}
              </ConnectInfoTitle>
              <ConnectInfoBody style={{ marginTop: 12 }}>
                {resumeData.connect.infoBody}
              </ConnectInfoBody>
            </div>

            <ConnectDivider />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <ConnectContactItem href={`mailto:${resumeData.contact.email}`}>
                <FiMail size={16} />
                {resumeData.contact.email}
              </ConnectContactItem>
              <ConnectContactItem href={`tel:+91${resumeData.contact.phone}`}>
                <FiPhone size={16} />
                {`+91 ${resumeData.contact.phone}`}
              </ConnectContactItem>
            </div>

            <ConnectDivider />

            <ConnectSocialRow>
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <ConnectSocialBtn
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {icon}
                </ConnectSocialBtn>
              ))}
            </ConnectSocialRow>
          </ConnectInfoCard>
        </motion.div>

        {/* ── Right — ConnectForm Card ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE_OUT_EXPO }}
        >
          <ConnectFormCardWrapper>
            <ConnectFormCard>
              
              {/* Success gradient background */}
              <AnimatePresence>
                {isSuccess && (
                  <ConnectSuccessGradient
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
              
              {/* ConnectRipple effect */}
              <AnimatePresence>
                {showRipple && (
                  <ConnectRipple
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
                  <ConnectFormInner
                    key="form"
                    variants={formContainer}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ConnectForm ref={formRef} onSubmit={handleSubmit}>
                      
                      {/* Name */}
                      <ConnectFormField variants={formField}>
                        <ConnectLabel htmlFor="name">{resumeData.connect.form.nameLabel}</ConnectLabel>
                        <ConnectInput
                          id="name"
                          type="text"
                          name="name"
                          placeholder={resumeData.connect.form.namePlaceholder}
                          required
                          disabled={isLoading}
                        />
                      </ConnectFormField>

                      {/* Email */}
                      <ConnectFormField variants={formField}>
                        <ConnectLabel htmlFor="email">{resumeData.connect.form.emailLabel}</ConnectLabel>
                        <ConnectInput
                          id="email"
                          type="email"
                          name="email"
                          placeholder={resumeData.connect.form.emailPlaceholder}
                          required
                          disabled={isLoading}
                        />
                      </ConnectFormField>

                      {/* Message */}
                      <ConnectFormField variants={formField}>
                        <ConnectLabel htmlFor="message">{resumeData.connect.form.messageLabel}</ConnectLabel>
                        <ConnectTextarea
                          id="message"
                          name="message"
                          placeholder={resumeData.connect.form.messagePlaceholder}
                          required
                          disabled={isLoading}
                        />
                      </ConnectFormField>

                      {/* Submit Button */}
                      <ConnectFormField variants={formField}>
                        <ConnectSubmitBtn
                          type="submit"
                          disabled={isLoading}
                          whileTap={!isLoading ? { scale: 0.98 } : {}}
                        >
                          {/* Static button surface: no permanent animation loop. */}
                          
                          {/* Progress bar */}
                          {isLoading && (
                            <ConnectBtnProgress
                              style={{ width: progressWidth }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            />
                          )}

                          <AnimatePresence mode="wait">
                            {isLoading ? (
                              <ConnectBtnLabel
                                key="loading"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Spinner />
                                {resumeData.connect.form.loadingLabel}
                              </ConnectBtnLabel>
                            ) : (
                              <ConnectBtnLabel
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
                              </ConnectBtnLabel>
                            )}
                          </AnimatePresence>
                        </ConnectSubmitBtn>
                      </ConnectFormField>
                      
                    </ConnectForm>
                  </ConnectFormInner>
                )}

                {/* ──── SUCCESS ──── */}
                {isSuccess && (
                  <ConnectSuccessInner
                    key="success"
                    variants={successContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    
                    {/* Check icon */}
                    <motion.div variants={successItem}>
                      <ConnectCheckContainer>
                        <ConnectCheckIcon variants={checkIconVariant}>
                          <FiCheck />
                        </ConnectCheckIcon>
                      </ConnectCheckContainer>
                    </motion.div>

                    {/* Title */}
                    <ConnectSuccessTitle variants={successItem}>
                      {resumeData.connect.form.successTitle}
                    </ConnectSuccessTitle>

                    {/* ConnectDivider */}
                    <ConnectSuccessDivider variants={dividerVariant} />

                    {/* Subtitle */}
                    <ConnectSuccessSub variants={successItem}>
                      {resumeData.connect.form.successText}
                    </ConnectSuccessSub>

                    {/* Reset button */}
                    <motion.div variants={successItem}>
                      <ConnectResetBtn
                        onClick={handleReset}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {resumeData.connect.form.resetLabel}
                        <FiArrowRight size={14} />
                      </ConnectResetBtn>
                    </motion.div>
                    
                  </ConnectSuccessInner>
                )}
                
              </AnimatePresence>
            </ConnectFormCard>
          </ConnectFormCardWrapper>
        </motion.div>

      </ConnectGrid>
    </ConnectWrapper>
  );
};

export default Connect;



