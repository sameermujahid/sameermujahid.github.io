// styles.jsx — Apple-Inspired Glass Design System
import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// ─── Keyframes ────────────────────────────────────────────────────────────────

export const pulseGlow = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.15); }
`;

export const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

export const morph = keyframes`
  0%   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25%  { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50%  { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
  75%  { border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
`;

export const floatAnim = keyframes`
  0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
  50%       { transform: translate(-50%, -50%) translateY(-18px); }
`;

export const floatReverse = keyframes`
  0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
  50%       { transform: translate(-50%, -50%) translateY(14px); }
`;

// ─── Mixins ───────────────────────────────────────────────────────────────────

export const glassMixin = css`
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  box-shadow: ${({ theme }) => theme.glassShadow};
`;

export const glassStrongMixin = css`
  background: ${({ theme }) => theme.glassStrong};
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  box-shadow: ${({ theme }) => theme.shadowLg};
`;

// ─── Layout ───────────────────────────────────────────────────────────────────

export const SectionLabel = styled(motion.span)`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  background: ${({ theme }) => theme.accentSubtle};
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 16px;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.1;
  margin-bottom: 16px;
`;

export const SectionSubtitle = styled(motion.p)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.7;
  max-width: 560px;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// ─── Glass Card ───────────────────────────────────────────────────────────────

export const GlassCard = styled(motion.div)`
  ${glassMixin}
  border-radius: 20px;
  padding: 32px;

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 16px;
  }
`;

// ─── Buttons ──────────────────────────────────────────────────────────────────

export const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: ${({ theme }) => theme.accent};
  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: 980px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accentHover};
    box-shadow: 0 8px 24px rgba(0, 113, 227, 0.35);
  }
`;

export const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 27px;
  background: transparent;
  color: ${({ theme }) => theme.accent};
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: 980px;
  border: 1.5px solid ${({ theme }) => theme.accent};
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accentSubtle};
  }
`;

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 120px 24px 80px;

  /* 🔥 MESH GRADIENT */
  background:
    radial-gradient(at 20% 20%, rgba(255, 255, 255, 0.15), transparent 50%),
    radial-gradient(at 80% 30%, rgba(179, 179, 179, 0.12), transparent 50%),
    radial-gradient(at 50% 80%, rgba(33, 63, 41, 0.12), transparent 50%),
    ${({ theme }) => theme.bg};
&::before {
  content: '';
  position: absolute;
  inset: 0;
  backdrop-filter: blur(60px);
  z-index: 0;
}
  /* 🔥 GRID LINES */
&::after {
  content: '';
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(
      ${({ theme }) =>
        theme.mode === 'dark'
          ? 'rgba(255,255,255,0.06)'
          : 'rgba(0,0,0,0.08)'} 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      ${({ theme }) =>
        theme.mode === 'dark'
          ? 'rgba(255,255,255,0.06)'
          : 'rgba(0,0,0,0.08)'} 1px,
      transparent 1px
    );

  background-size: 80px 80px;

  pointer-events: none;
  z-index: 0;

  /* 🔥 ADD THIS (fade edges) */
  mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
}
  @media (max-width: 768px) {
    padding: 110px 20px 70px;
  }
`;

export const HeroInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 36px;
    align-items: center;
    text-align: center;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 768px) {
    align-items: center;
    max-width: 100%;
  }
`;

export const HeroEyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textSecondary};

  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #34c759;
    animation: ${pulseGlow} 2s ease infinite;
  }
`;

export const HeroHeading = styled(motion.h1)`
  font-size: clamp(1rem, 6.5vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.03;
  color: ${({ theme }) => theme.textPrimary};

  em {
    font-style: normal;
    color: ${({ theme }) => theme.accent};
  }
`;

export const HeroRole = styled(motion.div)`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
`;

export const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const HeroImageWrapper = styled(motion.div)`
  position: relative;
  flex-shrink: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroImage = styled(motion.img)`
  position: relative;
  z-index: 2;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.glassBorder};
  box-shadow:
    0 12px 48px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.06);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 170px;
    height: 170px;
  }
`;

export const HeroBlob = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(200px, 60vw, 440px);
  height: clamp(200px, 60vw, 440px);
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.3),
    rgba(200, 200, 200, 0.1),
    transparent 70%
  );
  filter: blur(60px);
  opacity: 0.75;
  animation: ${morph} 18s ease-in-out infinite, ${floatAnim} 14s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

export const HeroBlobSecondary = styled.div`
  position: absolute;
  top: 55%;
  left: 55%;
  width: clamp(180px, 55vw, 360px);
  height: clamp(180px, 55vw, 360px);
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.12), transparent 70%);
  filter: blur(80px);
  opacity: 0.5;
  animation: ${floatReverse} 20s ease-in-out infinite;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
`;

export const SocialIcons = styled(motion.div)`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled(motion.a)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  ${glassMixin}
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

// ─── Background Glow ─────────────────────────────────────────────────────────

export const BgGlow = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -10%;
    width: min(700px, 120vw);
    height: 700px;
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'radial-gradient(circle, rgba(41,151,255,0.07) 0%, transparent 65%)'
        : 'radial-gradient(circle, rgba(0,113,227,0.06) 0%, transparent 65%)'};
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -5%;
    width: min(600px, 120vw);
    height: 600px;
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'radial-gradient(circle, rgba(120,80,255,0.06) 0%, transparent 65%)'
        : 'radial-gradient(circle, rgba(100,50,200,0.04) 0%, transparent 65%)'};
    border-radius: 50%;
  }
`;

// ─── Modal ────────────────────────────────────────────────────────────────────

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
`;

export const ModalContent = styled(motion.div)`
  ${glassStrongMixin}
  border-radius: 20px;
  width: 100%;
  max-width: 860px;
  overflow: hidden;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
`;

export const ModalTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  flex-shrink: 0;
`;

export const ModalTitle = styled.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const ModalButton = styled.button`
  padding: 7px 16px;
  border-radius: 980px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.bgTertiary};
  color: ${({ theme }) => theme.textPrimary};
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: white;
    border-color: transparent;
  }
`;

export const ModalIframe = styled.iframe`
  width: 100%;
  flex: 1;
  min-height: 500px;
  border: none;

  @media (max-width: 768px) {
    min-height: 380px;
  }
`;

// ─── Spinner ──────────────────────────────────────────────────────────────────

export const Spinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 0.75s linear infinite;
  display: inline-block;
  flex-shrink: 0;
`;
