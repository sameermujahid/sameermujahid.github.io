// styles.jsx — Apple-inspired design system, optimized without changing the visual language
import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const pulseGlow = keyframes`
  0%, 100% { opacity: 0.65; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.12); }
`;

export const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const morph = keyframes`
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
`;

export const floatAnim = keyframes`
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50% { transform: translate(-50%, -50%) translateY(-10px); }
`;

export const floatReverse = keyframes`
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50% { transform: translate(-50%, -50%) translateY(8px); }
`;

export const glassMixin = css`
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  box-shadow: ${({ theme }) => theme.glassShadow};

  @media (max-width: 768px) {
    backdrop-filter: blur(10px) saturate(145%);
    -webkit-backdrop-filter: blur(10px) saturate(145%);
  }

  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: ${({ theme }) => theme.bgSecondary};
  }
`;

export const glassStrongMixin = css`
  background: ${({ theme }) => theme.glassStrong};
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  box-shadow: ${({ theme }) => theme.shadowLg};

  @media (max-width: 768px) {
    backdrop-filter: blur(12px) saturate(150%);
    -webkit-backdrop-filter: blur(12px) saturate(150%);
  }
`;

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

export const GlassCard = styled(motion.div)`
  ${glassMixin}
  border-radius: 20px;
  padding: 32px;

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 16px;
  }
`;

export const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: 980px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accentHover};
    box-shadow: 0 8px 24px rgba(0, 113, 227, 0.35);
  }

  &:active { transform: translateY(1px); }
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
  transition: background-color 0.2s ease;

  &:hover { background: ${({ theme }) => theme.accentSubtle}; }
`;

export const HeroContainer = styled.section`
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: 120px 24px 80px;
  background: ${({ theme }) => theme.bg};

  /* Keep the grid, but remove the full-page 60px backdrop blur.
     The blur was compositing the entire hero on every frame. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background-image:
      linear-gradient(
        ${({ theme }) =>
          theme.mode === 'dark'
            ? 'rgba(255,255,255,0.055)'
            : 'rgba(0,0,0,0.07)'} 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        ${({ theme }) =>
          theme.mode === 'dark'
            ? 'rgba(255,255,255,0.055)'
            : 'rgba(0,0,0,0.07)'} 1px,
        transparent 1px
      );
    background-size: 80px 80px;
    mask-image: linear-gradient(to bottom, transparent, black 15%, black 82%, transparent);
    -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 82%, transparent);
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
  font-size: clamp(2.6rem, 6.5vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.03;
  color: ${({ theme }) => theme.textPrimary};

  em {
    font-style: normal;
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 480px) {
    font-size: clamp(2.35rem, 12vw, 3.25rem);
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
  width: 360px;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Clean accent glow directly behind the portrait.
     No grey rectangle, no animated morph, no huge blur surface. */
  &::before {
    content: '';
    position: absolute;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      ${({ theme }) => `${theme.accent}22`} 0%,
      ${({ theme }) => `${theme.accent}0d`} 42%,
      transparent 72%
    );
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 240px;

    &::before {
      width: 250px;
      height: 250px;
    }
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;

    &::before {
      width: 215px;
      height: 215px;
    }
  }
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
  display: none;
`;

export const HeroBlobSecondary = styled.div`
  display: none;
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
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const BgGlow = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    top: -20%;
    right: -10%;
    width: min(700px, 120vw);
    height: 700px;
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'radial-gradient(circle, rgba(41,151,255,0.045) 0%, transparent 68%)'
        : 'radial-gradient(circle, rgba(0,113,227,0.04) 0%, transparent 68%)'};
  }

  &::after {
    bottom: -10%;
    left: -5%;
    width: min(600px, 120vw);
    height: 600px;
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'radial-gradient(circle, rgba(120,80,255,0.04) 0%, transparent 68%)'
        : 'radial-gradient(circle, rgba(100,50,200,0.025) 0%, transparent 68%)'};
  }
`;

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  will-change: opacity;

  /* Keep the original frosted feel, but much cheaper than the old 10px
     backdrop blur on the entire viewport. */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    padding: 14px;
  }

  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`;

export const ModalContent = styled(motion.div)`
  ${glassStrongMixin}
  border-radius: 20px;
  width: 100%;
  max-width: 860px;
  overflow: hidden;
  max-height: 92vh;
  max-height: 92svh;
  display: flex;
  flex-direction: column;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    max-width: min(94vw, 720px);
    max-height: 88svh;
    border-radius: 18px;
  }
`;

export const ModalTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  flex-shrink: 0;
  gap: 12px;

  @media (max-width: 480px) {
    padding: 12px 14px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
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
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: #fff;
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


