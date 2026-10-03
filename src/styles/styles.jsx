import styled, {
  css,
  keyframes,
  createGlobalStyle,
} from "styled-components";

import { motion } from "framer-motion";

const CARD_RADIUS = 18;
const MODAL_RADIUS = 26;
const IMG_H_CARD = 188;
const IMG_H_MODAL = 300;

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

/* --- Hero.jsx: styled --- */
/* ============================================================
   HERO PROFILE DEPTH GLOW
   ============================================================ */

export const HeroProfileDepthGlow = styled.div`
  position: absolute;

  width: 500px;
  height: 500px;

  left: -30px;
  bottom: -30px;

  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(
      ellipse 58% 58% at 28% 68%,
      rgba(255, 255, 255, 0.30) 0%,
      rgba(255, 255, 255, 0.20) 18%,
      rgba(255, 255, 255, 0.10) 34%,
      rgba(255, 255, 255, 0.045) 50%,
      rgba(255, 255, 255, 0) 74%
    );

  filter: blur(26px);
  opacity: 0.95;

  transform: translateZ(0);
  will-change: transform;

  @media (max-width: 768px) {
    width: 310px;
    height: 280px;

    left: -70px;
    bottom: -58px;

    filter: blur(24px);

    background:
      radial-gradient(
        ellipse 58% 58% at 30% 68%,
        rgba(255, 255, 255, 0.24) 0%,
        rgba(255, 255, 255, 0.15) 22%,
        rgba(255, 255, 255, 0.07) 40%,
        rgba(255, 255, 255, 0) 74%
      );
  }

  @media (max-width: 480px) {
    width: 270px;
    height: 240px;

    left: -52px;
    bottom: -48px;

    filter: blur(22px);
  }

  @media (prefers-reduced-motion: reduce) {
    will-change: auto;
  }
`;


/* ============================================================
   HERO AMBIENT GLOW
   ============================================================ */

export const HeroProfileAmbientGlow = styled.div`
  position: absolute;

  width: 330px;
  height: 330px;

  right: -65px;
  top: 15px;

  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(
      circle,
      rgba(41, 151, 255, 0.055) 0%,
      rgba(41, 151, 255, 0.025) 35%,
      rgba(41, 151, 255, 0) 72%
    );

  filter: blur(34px);
  opacity: 0.8;

  transform: translateZ(0);

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;

    right: -55px;
    top: 10px;

    filter: blur(28px);
  }
`;


/* ============================================================
   SCROLL CIRCLE
   ============================================================ */

export const HeroScrollCircle = styled(motion.button)`
  width: 40px;
  height: 40px;

  min-width: 40px;
  min-height: 40px;

  padding: 0;

  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.border};

  background: ${({ theme }) => theme.glass};

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  color: ${({ theme }) => theme.textSecondary};

  position: relative;
  z-index: 30;

  flex-shrink: 0;

  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
    display: block;
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.accent};
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;

    min-width: 38px;
    min-height: 38px;

    svg {
      width: 17px;
      height: 17px;
    }
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;

    min-width: 36px;
    min-height: 36px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;


/* ============================================================
   HERO CONTAINER
   ============================================================ */

export const HeroContainer = styled.section`
  position: relative;

  width: 100%;

  /*
   * Important:
   * Use a real viewport height rather than allowing the hero
   * to become unnecessarily taller than the screen.
   */
  min-height: 100vh;
  min-height: 100svh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 120px 24px 80px;

  background: ${({ theme }) => theme.bg};

  overflow: hidden;

  isolation: isolate;

  box-sizing: border-box;

  /*
   * Background grid
   */
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

    mask-image:
      linear-gradient(
        to bottom,
        transparent,
        black 15%,
        black 82%,
        transparent
      );

    -webkit-mask-image:
      linear-gradient(
        to bottom,
        transparent,
        black 15%,
        black 82%,
        transparent
      );
  }

  /*
   * TABLET
   */
  @media (max-width: 1024px) {
    padding: 105px 24px 70px;
  }

  /*
   * MOBILE
   */
  @media (max-width: 768px) {
    min-height: 100svh;

    padding:
      max(86px, env(safe-area-inset-top) + 72px)
      18px
      max(58px, env(safe-area-inset-bottom) + 50px);

    align-items: center;
  }

  /*
   * SMALL MOBILE
   */
  @media (max-width: 480px) {
    padding:
      max(78px, env(safe-area-inset-top) + 68px)
      14px
      max(52px, env(safe-area-inset-bottom) + 46px);
  }

  /*
   * SHORT MOBILE/TABLET SCREENS
   *
   * This is the important fix for your 768 x 695
   * type of viewport.
   */
  @media (max-width: 768px) and (max-height: 760px) {
    padding:
      max(76px, env(safe-area-inset-top) + 64px)
      16px
      max(46px, env(safe-area-inset-bottom) + 40px);
  }
`;


/* ============================================================
   HERO INNER
   ============================================================ */

export const HeroInner = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 60px;

  max-width: 1100px;

  width: 100%;

  margin: 0 auto;

  box-sizing: border-box;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  /*
   * Mobile/tablet:
   * Image first, content second.
   */
  @media (max-width: 768px) {
    flex-direction: column-reverse;

    justify-content: center;

    align-items: center;

    gap: 20px;

    width: 100%;

    text-align: center;
  }

  /*
   * Short mobile/tablet:
   * Reduce vertical occupation.
   */
  @media (max-width: 768px) and (max-height: 760px) {
    gap: 12px;
  }
`;


/* ============================================================
   HERO CONTENT
   ============================================================ */

export const HeroContent = styled.div`
  position: relative;
  z-index: 5;

  flex: 1;

  max-width: 600px;

  display: flex;
  flex-direction: column;

  gap: 22px;

  box-sizing: border-box;

  @media (max-width: 1024px) {
    max-width: 560px;
  }

  @media (max-width: 768px) {
    flex: none;

    width: 100%;
    max-width: 680px;

    align-items: center;

    text-align: center;

    gap: 14px;
  }

  @media (max-width: 480px) {
    gap: 11px;
  }

  /*
   * Short screens are the most important case.
   */
  @media (max-width: 768px) and (max-height: 760px) {
    gap: 8px;
  }
`;


/* ============================================================
   AVAILABILITY
   ============================================================ */

export const HeroEyebrow = styled(motion.div)`
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 8px;

  font-size: 0.875rem;

  line-height: 1.2;

  font-weight: 500;

  color: ${({ theme }) => theme.textSecondary};

  white-space: nowrap;

  span {
    display: inline-block;

    width: 7px;
    height: 7px;

    min-width: 7px;
    min-height: 7px;

    border-radius: 50%;

    background: #34c759;

    animation: ${pulseGlow} 2s ease infinite;
  }

  @media (max-width: 480px) {
    font-size: 0.78rem;

    gap: 7px;

    span {
      width: 6px;
      height: 6px;
      min-width: 6px;
      min-height: 6px;
    }
  }
`;


/* ============================================================
   HERO HEADING
   ============================================================ */

export const HeroHeading = styled(motion.h1)`
  margin: 0;

  font-size: clamp(2.6rem, 6.5vw, 4rem);

  font-weight: 700;

  letter-spacing: -0.04em;

  line-height: 1.03;

  color: ${({ theme }) => theme.textPrimary};

  em {
    font-style: normal;
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    font-size: clamp(2.35rem, 7vw, 3.25rem);

    line-height: 0.99;

    letter-spacing: -0.045em;
  }

  @media (max-width: 480px) {
    font-size: clamp(2.15rem, 10.8vw, 3rem);

    line-height: 0.98;
  }

  /*
   * Short screen optimization.
   */
  @media (max-width: 768px) and (max-height: 760px) {
    font-size: clamp(2rem, 7.8vw, 2.7rem);

    line-height: 0.96;
  }
`;


/* ============================================================
   HERO ROLE / DESCRIPTION
   ============================================================ */

export const HeroRole = styled(motion.div)`
  margin: 0;

  font-size: clamp(1rem, 2.5vw, 1.25rem);

  font-weight: 400;

  color: ${({ theme }) => theme.textSecondary};

  line-height: 1.6;

  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 600px;

    font-size: clamp(0.95rem, 2.7vw, 1.1rem);

    line-height: 1.42;
  }

  @media (max-width: 480px) {
    font-size: 0.94rem;

    line-height: 1.4;
  }

  @media (max-width: 768px) and (max-height: 760px) {
    font-size: 0.88rem;

    line-height: 1.32;
  }
`;


/* ============================================================
   HERO BUTTONS
   ============================================================ */

export const HeroButtons = styled(motion.div)`
  display: flex;

  align-items: center;
  justify-content: flex-start;

  gap: 12px;

  flex-wrap: wrap;

  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;

    gap: 10px;

    width: 100%;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }

  @media (max-width: 390px) {
    /*
     * Keep buttons side-by-side on narrow phones.
     * The actual button styles determine their width.
     */
    gap: 7px;
  }

  @media (max-width: 768px) and (max-height: 760px) {
    gap: 7px;
  }
`;


/* ============================================================
   SOCIAL ICONS
   ============================================================ */

export const SocialIcons = styled(motion.div)`
  position: relative;
  z-index: 10;

  display: flex;

  align-items: center;
  justify-content: flex-start;

  gap: 10px;

  flex-wrap: wrap;

  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;

    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 7px;
  }

  @media (max-width: 768px) and (max-height: 760px) {
    gap: 6px;
  }
`;


/* ============================================================
   SOCIAL ICON
   ============================================================ */

export const SocialIcon = styled(motion.a)`
  position: relative;
  z-index: 11;

  width: 44px;
  height: 44px;

  min-width: 44px;
  min-height: 44px;

  border-radius: 50%;

  ${glassMixin}

  display: flex;

  align-items: center;
  justify-content: center;

  font-size: 1rem;

  line-height: 1;

  color: ${({ theme }) => theme.textSecondary};

  cursor: pointer;

  text-decoration: none;

  flex-shrink: 0;

  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;

  svg {
    width: 18px;
    height: 18px;

    display: block;

    flex-shrink: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.accent};
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    min-width: 40px;
    min-height: 40px;

    svg {
      width: 17px;
      height: 17px;
    }
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;

    min-width: 38px;
    min-height: 38px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 768px) and (max-height: 760px) {
    width: 34px;
    height: 34px;

    min-width: 34px;
    min-height: 34px;

    svg {
      width: 15px;
      height: 15px;
    }
  }
`;


/* ============================================================
   HERO IMAGE WRAPPER
   ============================================================ */

export const HeroImageWrapper = styled(motion.div)`
  position: relative;

  flex-shrink: 0;

  z-index: 4;

  width: 360px;
  height: 360px;

  display: flex;

  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: 480px) {
    width: 190px;
    height: 190px;
  }

  /*
   * Critical for 768x695 and other short mobile screens.
   */
  @media (max-width: 768px) and (max-height: 760px) {
    width: 175px;
    height: 175px;
  }

  &::before {
    content: '';

    position: absolute;

    width: 360px;
    height: 360px;

    border-radius: 50%;

    background:
      radial-gradient(
        circle,
        ${({ theme }) => `${theme.accent}22`} 0%,
        ${({ theme }) => `${theme.accent}0d`} 42%,
        transparent 72%
      );

    pointer-events: none;

    z-index: 0;

    @media (max-width: 1024px) {
      width: 310px;
      height: 310px;
    }

    @media (max-width: 768px) {
      width: 240px;
      height: 240px;
    }

    @media (max-width: 480px) {
      width: 210px;
      height: 210px;
    }

    @media (max-width: 768px) and (max-height: 760px) {
      width: 190px;
      height: 190px;
    }
  }
`;


/* ============================================================
   HERO IMAGE
   ============================================================ */

export const HeroImage = styled(motion.img)`
  position: relative;

  z-index: 3;

  width: 300px;
  height: 300px;

  border-radius: 50%;

  object-fit: cover;

  border: 2px solid ${({ theme }) => theme.glassBorder};

  box-shadow:
    0 12px 48px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.06);

  display: block;

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 190px;
    height: 190px;
  }

  @media (max-width: 480px) {
    width: 165px;
    height: 165px;
  }

  @media (max-width: 768px) and (max-height: 760px) {
    width: 150px;
    height: 150px;
  }
`;


/* ============================================================
   DISABLED OLD BLOBS
   ============================================================ */

export const HeroBlob = styled.div`
  display: none;
`;

export const HeroBlobSecondary = styled.div`
  display: none;
`;


/* ============================================================
   BACKGROUND GLOW
   ============================================================ */

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

/* ============================================================================
   CENTRALIZED COMPONENT STYLES
   ============================================================================ */

/* --- AboutMe.jsx: styled --- */
export const AboutMeWrapper = styled.section`
  max-width: 1350px;
  margin: 0 auto;
  padding: 80px 24px;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

/* --- AboutMe.jsx: styled --- */
export const AboutMeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: end;
  margin-top: 56px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 36px;
  }
`;

/* --- AboutMe.jsx: styled --- */
export const AboutMeImageSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

/* --- AboutMe.jsx: styled --- */
export const AboutMeImageContainer = styled.div`
  perspective: 1200px;

  img {
    width: 100%;
    max-height: 320px;
    border-radius: 24px;
    object-fit: cover;
    will-change: transform;
    transform-style: preserve-3d;

    transition:
      transform 0.15s ease-out,
      filter 0.4s ease,
      box-shadow 0.4s ease;

    box-shadow:
      0 12px 48px rgba(0, 0, 0, 0.3);

    filter: grayscale(80%);

    @media (max-width: 768px) {
      max-height: 260px;
      border-radius: 18px;
    }
  }
`;

/* --- AboutMe.jsx: styled --- */
export const AboutMeContentCard = styled(GlassCard)`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 36px;

  @media (max-width: 480px) {
    padding: 22px;
    gap: 18px;
  }
`;

/* --- AboutMe.jsx: styled --- */
export const AboutMeCardContent = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 480px) {
    gap: 18px;
  }
`;

/* --- AboutMe.jsx: styled --- */
export const AboutMeName = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.textPrimary};

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

/* --- AboutMe.jsx: styled --- */
export const AboutMeBody = styled.p`
  font-size: 0.9375rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;
`;

/* --- AboutMe.jsx: styled --- */
export const AboutMeDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border};
  width: 100%;
`;

/* --- AboutMe.jsx: styled --- */
export const AboutMeStatsRow = styled.div`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
`;

/* --- AboutMe.jsx: styled --- */
export const AboutMeStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

/* --- AboutMe.jsx: styled --- */
export const AboutMeStatNum = styled.span`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.accent};
`;

/* --- AboutMe.jsx: styled --- */
export const AboutMeStatLabel = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textTertiary};
  font-weight: 500;
`;

/* --- AboutMe.jsx: styled --- */
export const AboutMeSocialRow = styled.div`
  display: flex;
  gap: 8px;
`;

/* --- Certificates.jsx: styled --- */
export const CertificatesWrapper = styled.div`
  padding: 56px 0 60px;
`;

/* --- Certificates.jsx: styled --- */
export const CertificatesHeader = styled.div`
  margin-bottom: 40px;
`;

/* --- Certificates.jsx: styled --- */
export const CertificatesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

/* --- Certificates.jsx: styled --- */
export const CertificatesCard = styled(GlassCard)`
  flex: 1 1 calc(33.333% - 20px);
  position: relative;
  overflow: hidden;
  min-width: 300px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-sizing: border-box;
  height: 100%;

  @media (max-width: 992px) {
    flex: none;
    min-width: auto;
  }
`;

/* --- Certificates.jsx: styled --- */
export const CertificatesIconBadge = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: ${({ theme }) => theme.accentSubtle};
  color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
`;

/* --- Certificates.jsx: styled --- */
export const CertificatesCardTitle = styled.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.4;
`;

/* --- Certificates.jsx: styled --- */
export const CertificatesCardDate = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textTertiary};
  font-weight: 500;
  margin-top: 2px;
`;

/* --- Certificates.jsx: styled --- */
export const CertificatesCardDesc = styled.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textSecondary};
  flex: 1;
`;

/* --- Certificates.jsx: styled --- */
export const CertificatesDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border};
`;

/* --- Certificates.jsx: styled --- */
export const CertificatesActions = styled.div`
  display: flex;
  gap: 8px;
`;

/* --- Certificates.jsx: styled --- */
export const CertificatesActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 980px;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  background: ${({ theme }) => theme.bgTertiary};
  color: ${({ theme }) => theme.textSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accentSubtle};
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }

  @media (hover: none) {
    &:active {
      background: ${({ theme }) => theme.accentSubtle};
      color: ${({ theme }) => theme.accent};
      border-color: ${({ theme }) => theme.accent};
    }
  }
`;

/* --- Connect.jsx: keyframes --- */
const Connectshimmer = keyframes`
  0%   { background-position: -100% center; }
  100% { background-position: 200% center; }
`;

/* --- Connect.jsx: keyframes --- */
const ConnectgradientRotate = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

/* --- Connect.jsx: keyframes --- */
const Connectripple = keyframes`
  0%   { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
`;

/* --- Connect.jsx: styled --- */
export const ConnectWrapper = styled.section`
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

/* --- Connect.jsx: styled --- */
export const ConnectHeader = styled.div`
  margin-bottom: 64px;
`;

/* --- Connect.jsx: styled --- */
export const ConnectGrid = styled.div`
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

/* --- Connect.jsx: styled --- */
export const ConnectInfoCard = styled(GlassCard)`
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  position: sticky;
  // top: 100px;
  
  @media (max-width: 968px) {
    position: static;
    padding: 28px;
  }
  
  @media (max-width: 480px) {
    padding: 24px;
    gap: 24px;
  }
`;

/* --- Connect.jsx: styled --- */
export const ConnectInfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.textPrimary};
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
`;

/* --- Connect.jsx: styled --- */
export const ConnectInfoBody = styled.p`
  font-size: 0.9375rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;
`;

/* --- Connect.jsx: styled --- */
export const ConnectContactItem = styled.a`
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

/* --- Connect.jsx: styled --- */
export const ConnectDivider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.border} 20%,
    ${({ theme }) => theme.border} 80%,
    transparent
  );
`;

/* --- Connect.jsx: styled --- */
export const ConnectSocialRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

/* --- Connect.jsx: styled --- */
export const ConnectSocialBtn = styled.a`
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

/* --- Connect.jsx: styled --- */
export const ConnectOpportunityTag = styled.div`
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

/* --- Connect.jsx: styled --- */
export const ConnectFormCardWrapper = styled(motion.div)`
  position: relative;
`;

/* --- Connect.jsx: styled --- */
export const ConnectFormCard = styled(GlassCard)`
  position: relative;
  overflow: hidden;
  will-change: transform;
`;

/* --- Connect.jsx: styled --- */
export const ConnectSuccessGradient = styled(motion.div)`
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

/* --- Connect.jsx: styled --- */
export const ConnectRipple = styled(motion.div)`
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

/* --- Connect.jsx: styled --- */
export const ConnectFormInner = styled(motion.div)`
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
  }
  
  @media (max-width: 480px) {
  }
`;

/* --- Connect.jsx: styled --- */
export const ConnectSuccessInner = styled(motion.div)`
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

/* --- Connect.jsx: styled --- */
export const ConnectForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* --- Connect.jsx: styled --- */
export const ConnectFormField = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* --- Connect.jsx: styled --- */
export const ConnectLabel = styled.label`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
  letter-spacing: 0.01em;
`;

/* --- Connect.jsx: css --- */
const ConnectbaseInput = css`
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

/* --- Connect.jsx: styled --- */
export const ConnectInput = styled.input`${ConnectbaseInput}`;

/* --- Connect.jsx: styled --- */
export const ConnectTextarea = styled.textarea`
  ${ConnectbaseInput}
  min-height: 140px;
  resize: vertical;
  line-height: 1.6;
`;

/* --- Connect.jsx: styled --- */
export const ConnectSubmitBtn = styled(motion.button)`
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

/* --- Connect.jsx: styled --- */
export const ConnectBtnShine = styled(motion.div)`
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

/* --- Connect.jsx: styled --- */
export const ConnectBtnProgress = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: inherit;
  pointer-events: none;
`;

/* --- Connect.jsx: styled --- */
export const ConnectBtnLabel = styled(motion.span)`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
`;

/* --- Connect.jsx: styled --- */
export const ConnectCheckContainer = styled(motion.div)`
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

/* --- Connect.jsx: styled --- */
export const ConnectCheckIcon = styled(motion.div)`
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

/* --- Connect.jsx: styled --- */
export const ConnectSuccessTitle = styled(motion.h3)`
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

/* --- Connect.jsx: styled --- */
export const ConnectSuccessSub = styled(motion.p)`
  font-size: 0.9375rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.textSecondary};
  max-width: 320px;
  margin: 0;
`;

/* --- Connect.jsx: styled --- */
export const ConnectSuccessDivider = styled(motion.div)`
  width: 48px;
  height: 2px;
  border-radius: 2px;
  background: ${({ theme }) => theme.accent};
  opacity: 0.3;
`;

/* --- Connect.jsx: styled --- */
export const ConnectResetBtn = styled(motion.button)`
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

/* --- Education.jsx: styled --- */
export const EducationWrapper = styled.div`
  padding: 56px 0 60px;
`;

/* --- Education.jsx: styled --- */
export const EducationHeader = styled.div`
  margin-bottom: 40px;
`;

/* --- Education.jsx: styled --- */
export const EducationTimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 19px;
    top: 24px;
    bottom: 24px;
    width: 2px;
    background: ${({ theme }) => theme.border};
    border-radius: 1px;

    @media (max-width: 480px) {
      left: 15px;
    }
  }
`;

/* --- Education.jsx: styled --- */
export const EducationTimelineItem = styled.div`
  display: flex;
  gap: 18px;
  padding-bottom: 20px;
  position: relative;

  &:last-child {
    padding-bottom: 0;
  }
`;

/* --- Education.jsx: styled --- */
export const EducationDotWrap = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  position: relative;
  margin-top: 8px;
  z-index: 1;

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

/* --- Education.jsx: styled --- */
export const EducationDot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ $color }) => $color}15;
  border: 2px solid ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ $color }) => $color};
  transition: background 0.25s ease, transform 0.25s ease;

  ${EducationTimelineItem}:hover & {
    background: ${({ $color }) => $color}28;
    transform: scale(1.08);
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 0.75rem;
  }
`;

/* --- Education.jsx: styled --- */
export const EducationCard = styled(GlassCard)`
  flex: 1;
  position: relative;
  overflow: hidden;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;

  @media (max-width: 480px) {
    padding: 16px 18px;
  }
`;

/* --- Education.jsx: styled --- */
export const EducationDegree = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.3;
`;

/* --- Education.jsx: styled --- */
export const EducationInstitution = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ $color }) => $color};
`;

/* --- Education.jsx: styled --- */
export const EducationMetaChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textTertiary};
`;

/* --- Education.jsx: styled --- */
export const EducationDesc = styled.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textSecondary};
`;

/* --- Education.jsx: styled --- */
export const EducationGpaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

/* --- Education.jsx: styled --- */
export const EducationGpaBar = styled.div`
  flex: 1;
  height: 5px;
  border-radius: 3px;
  background: ${({ theme }) => theme.bgTertiary};
  overflow: hidden;
`;

/* --- Education.jsx: styled --- */
export const EducationGpaFill = styled(motion.div)`
  height: 100%;
  border-radius: 3px;
  background: ${({ $color }) => $color};
`;

/* --- Education.jsx: styled --- */
export const EducationGpaLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
  white-space: nowrap;
`;

/* --- Experience.jsx: styled --- */
export const ExperienceWrapper = styled.div`
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 56px 0 60px;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceHeader = styled.div`
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceTimeline = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceExpCard = styled(GlassCard)`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  min-width: 0;
  height: 100%;
  box-sizing: border-box;

  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-left: 3px solid ${({ $color }) => $color};

  @media (max-width: 1024px) {
    padding: 28px;
  }

  @media (max-width: 768px) {
    padding: 28px 30px;

    transition:
      transform 0.28s ease,
      box-shadow 0.28s ease;

    &:hover {
      transform: translateX(4px);
    }
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceCardContent = styled.div`
  position: relative;
  z-index: 1;

  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 100%;
`;

/* --- Experience.jsx: styled --- */
export const ExperienceExpTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceExpMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceCompanyRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
`;

/* --- Experience.jsx: styled --- */
export const ExperienceCompany = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.textPrimary};

  margin: 0;

  /*
   * Allows long company names to wrap naturally.
   */
  overflow-wrap: anywhere;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceRoleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

/* --- Experience.jsx: styled --- */
export const ExperienceRole = styled.div`
  font-size: 1rem;
  font-weight: 500;

  color: ${({ theme, $color }) =>
    $color || theme.accent};

  @media (max-width: 768px) {
    font-size: 0.9375rem;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceTypeBadge = styled.span`
  display: inline-block;

  padding: 4px 10px;

  border-radius: 980px;

  font-size: 0.75rem;
  font-weight: 600;

  background: ${({ $color }) => $color}18;

  color: ${({ $color }) => $color};

  border: 1px solid ${({ $color }) => $color}30;

  @media (max-width: 768px) {
    padding: 3px 10px;
    font-size: 0.72rem;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceMetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 14px;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceMetaChip = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 0.8125rem;

  color: ${({ theme }) => theme.textTertiary};

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border};
  width: 100%;
`;

/* --- Experience.jsx: styled --- */
export const ExperienceBulletList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 9px;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceBullet = styled.li`
  display: flex;
  gap: 10px;

  font-size: 0.9rem;
  line-height: 1.6;

  color: ${({ theme }) => theme.textSecondary};

  &::before {
    content: '';

    display: block;

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: ${({ $color }) => $color};

    margin-top: 9px;

    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.65;

    &::before {
      margin-top: 8px;
    }
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: auto;

  @media (max-width: 768px) {
    gap: 7px;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceTag = styled.span`
  padding: 5px 12px;

  border-radius: 980px;

  font-size: 0.8rem;
  font-weight: 500;

  background: ${({ theme }) => theme.bgTertiary};

  color: ${({ theme }) => theme.textSecondary};

  border: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    padding: 4px 11px;
    font-size: 0.78rem;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceActionRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  margin-top: auto;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

/* --- Experience.jsx: styled --- */
export const ExperienceActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 8px 16px;

  border-radius: 980px;

  font-size: 0.8125rem;
  font-weight: 500;

  text-decoration: none;

  cursor: pointer;

  background: ${({ theme }) => theme.bgTertiary};

  color: ${({ theme }) => theme.textSecondary};

  border: 1px solid ${({ theme }) => theme.border};

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accentSubtle};

    color: ${({ theme }) => theme.accent};

    border-color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    padding: 7px 14px;
    font-size: 0.8rem;
  }
`;

/* --- Footer.jsx: styled --- */
export const FooterFooterEl = styled.footer`
  position: relative;
  padding: 60px 24px 40px;
  background: ${({ theme }) => theme.bgSecondary};
  overflow: hidden;

  /* Glass gradient glow */
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.accentSubtle} 0%,
      transparent 70%
    );
    opacity: 0.6;
    pointer-events: none;
  }
`;

/* --- Footer.jsx: styled --- */
export const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.border};
  position: relative;
  margin-bottom: 40px;

  &::after {
    content: '';
    position: absolute;
    width: 120px;
    height: 2px;
    background: ${({ theme }) => theme.accent};
    top: -0.5px;
    left: 0;
    animation: slide 6s linear infinite;
  }

  @keyframes slide {
    0% { left: 0; }
    50% { left: calc(100% - 120px); }
    100% { left: 0; }
  }
`;

/* --- Footer.jsx: styled --- */
export const FooterInner = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

/* --- Footer.jsx: styled --- */
export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* --- Footer.jsx: styled --- */
export const FooterName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.textPrimary};
`;

/* --- Footer.jsx: styled --- */
export const FooterTagline = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textTertiary};
  opacity: 0.8;
`;

/* --- Footer.jsx: styled --- */
export const FooterNavRow = styled.div`
  display: flex;
  gap: 24px;
  // flex-wrap: wrap;
`;

/* --- Footer.jsx: styled --- */
export const FooterNavItem = styled.button`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textSecondary};
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 4px 0;
  transition: color 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 1.5px;
    background: ${({ theme }) => theme.accent};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
  }

  &:hover::after {
    width: 100%;
  }
`;

/* --- Footer.jsx: styled --- */
export const FooterSocialRow = styled.div`
  display: flex;
  gap: 10px;
`;

/* --- Footer.jsx: styled --- */
export const FooterSocialBtn = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textTertiary};
  border: 1px solid ${({ theme }) => theme.border};
  backdrop-filter: blur(10px);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
    background: ${({ theme }) => theme.accentSubtle};
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`;

/* --- Footer.jsx: styled --- */
export const FooterBottom = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textTertiary};
  opacity: 0.7;
`;

/* --- Projects.jsx: styled --- */
export const ProjectsWrapper = styled.div`
  padding: 56px 0 60px;
`;

/* --- Projects.jsx: styled --- */
export const ProjectsHeader = styled.div`
  margin-bottom: 40px;
`;

/* --- Projects.jsx: styled --- */
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

/* --- Projects.jsx: styled --- */
export const ProjectsCardRoot = styled(motion.div)`
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

/* --- Projects.jsx: styled --- */
export const ProjectsCardImageBox = styled.div`
  width: 100%;
  height: ${IMG_H_CARD}px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  background: ${({ theme }) => theme.bgTertiary};
`;

/* --- Projects.jsx: styled --- */
export const ProjectsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

/* --- Projects.jsx: styled --- */
export const ProjectsYearBadge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;

  font-size: 0.68rem;
  font-weight: 700;

  padding: 3px 10px;
  border-radius: 999px;

  background: rgba(0, 0, 0, 0.55);
  color: rgba(255, 255, 255, 0.92);

  border: 1px solid rgba(255, 255, 255, 0.1);

  letter-spacing: 0.04em;

  pointer-events: none;
`;

/* --- Projects.jsx: styled --- */
export const ProjectsCardBody = styled.div`
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

/* --- Projects.jsx: styled --- */
export const ProjectsCardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.3;
  margin: 0;
`;

/* --- Projects.jsx: styled --- */
export const ProjectsCardDesc = styled.p`
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

/* --- Projects.jsx: styled --- */
export const ProjectsCardFooter = styled.div`
  display: flex;
  gap: 7px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.border || 'rgba(255,255,255,0.08)'};
  margin-top: 4px;
  align-items: center;
`;

/* --- Projects.jsx: styled --- */
export const ProjectsChip = styled.a`
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

/* --- Projects.jsx: styled --- */
export const ProjectsKnowMoreChip = styled.button`
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

/* --- Projects.jsx: styled --- */
export const ProjectsOverlay = styled(motion.div)`
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

/* --- Projects.jsx: styled --- */
export const ProjectsModalShell = styled(motion.div)`
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

/* --- Projects.jsx: styled --- */
export const ProjectsModalImageBox = styled.div`
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

/* --- Projects.jsx: styled --- */
export const ProjectsModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

/* --- Projects.jsx: styled --- */
export const ProjectsCloseBtn = styled.button`
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

/* --- Projects.jsx: styled --- */
export const ProjectsModalBody = styled.div`
  padding: 4px 30px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 600px) {
    padding: 2px 20px 22px;
    gap: 13px;
  }
`;

/* --- Projects.jsx: styled --- */
export const ProjectsModalTitle = styled.h2`
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

/* --- Projects.jsx: styled --- */
export const ProjectsModalDesc = styled.p`
  font-size: 0.93rem;
  line-height: 1.82;
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;
`;

/* --- Projects.jsx: styled --- */
export const ProjectsModalFooter = styled.div`
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

/* --- Projects.jsx: styled --- */
export const ProjectsModalLinkBtn = styled.a`
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

/* --- Skills.jsx: keyframes --- */
const SkillspulseDot = keyframes`
  0%,100% { opacity: .5; transform: scale(1); }
  50%      { opacity: 1;  transform: scale(1.3); }
`;

/* --- Skills.jsx: keyframes --- */
const SkillsmarqueeL = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

/* --- Skills.jsx: keyframes --- */
const SkillsmarqueeR = keyframes`
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
`;

/* --- Skills.jsx: styled --- */
export const SkillsWrapper = styled.section`
  padding: 80px 24px 100px;
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 56px 16px 72px;
  }
`;

/* --- Skills.jsx: styled --- */
export const SkillsHeader = styled.div`
  margin-bottom: 40px;
`;

/* --- Skills.jsx: styled --- */
export const SkillsViewToggle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  border: 1px solid ${({ theme }) => theme.glassBorder};
  border-radius: 980px;
  padding: 4px;
  margin-top: 22px;
`;

/* --- Skills.jsx: styled --- */
export const SkillsToggleBtn = styled.button`
  position: relative;
  overflow: hidden;
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

/* --- Skills.jsx: styled --- */
export const SkillsMosaicGrid = styled.div`
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

/* --- Skills.jsx: styled --- */
export const SkillsTile = styled(motion.div)`
  grid-area: ${({ $area }) => $area};
  position: relative;
  border-radius: 16px;
  padding: 16px 18px;
  overflow: hidden;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);

  @media (max-width: 768px) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
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
    z-index: 2;
    pointer-events: none;
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
    z-index: 0;
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

/* --- Skills.jsx: styled --- */
export const SkillsTileName = styled.span`
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

/* --- Skills.jsx: styled --- */
export const SkillsTagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  position: relative;
  z-index: 1;
`;

/* --- Skills.jsx: styled --- */
export const SkillsTag = styled.span`
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

  ${SkillsTile}:hover & {
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

/* --- Skills.jsx: styled --- */
export const SkillsGhostNum = styled.span`
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

/* --- Skills.jsx: styled --- */
export const SkillsListWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

/* --- Skills.jsx: styled --- */
export const SkillsListRow = styled(motion.div)`
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

/* --- Skills.jsx: styled --- */
export const SkillsRowLeft = styled.div`
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

/* --- Skills.jsx: styled --- */
export const SkillsDot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
  animation: ${SkillspulseDot} 2.8s ease infinite;
  animation-delay: ${({ $d }) => $d}s;
`;

/* --- Skills.jsx: styled --- */
export const SkillsRowLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
`;

/* --- Skills.jsx: styled --- */
export const SkillsRowPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  flex: 1;
`;

/* --- Skills.jsx: styled --- */
export const SkillsListPill = styled(motion.span)`
  position: relative;
  overflow: hidden;
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

/* --- Skills.jsx: styled --- */
export const SkillsRowCount = styled.div`
  width: 44px;
  flex-shrink: 0;
  text-align: right;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textTertiary};
  font-weight: 600;
  padding-top: 5px;

  @media (max-width: 600px) { display: none; }
`;

/* --- Skills.jsx: styled --- */
export const SkillsStreamWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
`;

/* --- Skills.jsx: styled --- */
export const SkillsLane = styled.div`
  display: flex;
  gap: 10px;
  width: max-content;
  animation: ${({ $rev }) => ($rev ? SkillsmarqueeR : SkillsmarqueeL)} ${({ $spd }) => $spd}s linear infinite;
  will-change: transform;

  &:hover { animation-play-state: paused; }
`;

/* --- Skills.jsx: styled --- */
export const SkillsChip = styled.div`
  position: relative;
  overflow: hidden;
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

/* --- Skills.jsx: styled --- */
export const SkillsChipCat = styled.span`
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  opacity: 0.4;
`;

/* --- Tabs.jsx: styled --- */
export const TabsWrapper = styled.section`
  padding: 0 0 120px;
  max-width: 1350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 0 80px;
  }
`;

/* --- Tabs.jsx: styled --- */
export const TabsTabBar = styled.div`
  position: sticky;
  top: 80px;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 16px 24px;

  @media (max-width: 768px) {
    top: 64px;
    padding: 12px 16px;
  }
`;

/* --- Tabs.jsx: styled --- */
export const TabsTabTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);

  @media (max-width: 768px) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  border: 1px solid ${({ theme }) => theme.glassBorder};
  border-radius: 980px;
  padding: 6px;
  box-shadow: ${({ theme }) => theme.shadowMd};
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

/* --- Tabs.jsx: styled --- */
export const TabsTabBtn = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border: none;
  background: transparent;
  border-radius: 980px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme, $active }) => ($active ? theme.textPrimary : theme.textSecondary)};
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s ease;
  z-index: 1;

  &:hover {
    color: ${({ theme }) => theme.textSecondary};
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.8125rem;
    gap: 4px;

    span.label {
      display: none;
    }
  }
`;

/* --- Tabs.jsx: styled --- */
export const TabsActivePill = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.bgSecondary};
  border-radius: 980px;
  z-index: 0;
  box-shadow: ${({ theme }) => theme.shadowSm};
  border: 1px solid ${({ theme }) => theme.glassBorder};
`;

/* --- Tabs.jsx: styled --- */
export const TabsContentArea = styled.div`
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

/* --- Tabs.jsx: styled --- */
export const TabsContentLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  color: ${({ theme }) => theme.textTertiary};
  font-size: 0.875rem;
`;

/* --- TopBar.jsx: css --- */
const TopBarglass = css`
  background: ${({ theme }) => theme.TopBarglass};
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid ${({ theme }) => theme.glassBorder};
`;

/* --- TopBar.jsx: styled --- */
export const TopBarBar = styled(motion.header)`
  position: fixed;
  top: 14px;
  left: 0;
  right: 0;
  margin: 0 auto;

  z-index: 1000;

  width: ${({ $scrolled }) =>
    $scrolled
      ? 'min(560px, calc(100vw - 32px))'
      : 'min(820px, calc(100vw - 32px))'};

  height: ${({ $scrolled }) =>
    $scrolled
      ? '56px'
      : '64px'};

  padding: ${({ $scrolled }) =>
    $scrolled
      ? '8px 16px'
      : '12px 20px'};

  border-radius: ${({ $scrolled }) =>
    $scrolled
      ? '28px'
      : '32px'};

  ${TopBarglass}

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.35),
    0 0 12px rgba(255, 255, 255, 0.08);

  transition:
    width 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    height 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    padding 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    border-radius 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    background 0.4s ease;

  will-change:
    transform,
    opacity,
    width,
    height;

  transform-origin: center top;

  &[data-scrolled="true"] {
    box-shadow: ${({ theme }) => theme.shadowLg};
    background: ${({ theme }) => theme.glassStrong};
  }

  @media (max-width: 768px) {
    top: 0;

    width: 100%;
    height: 60px;

    padding: 12px 20px;

    border-radius: 0;

    border-left: none;
    border-right: none;
    border-top: none;
  }
`;
export const TopBarStarBtn = styled(motion.button)`
  position: relative;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50%;

  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};

  cursor: pointer;

  transition:
    color 180ms ease,
    border-color 180ms ease,
    background 180ms ease,
    transform 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
    background: ${({ theme }) => theme.accent}12;
  }

  svg {
    transition: transform 180ms ease;
  }

  &:hover svg {
    transform: rotate(12deg) scale(1.08);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.accent};
    outline-offset: 3px;
  }
`;
/* --- TopBar.jsx: styled --- */
export const TopBarLogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  flex-shrink: 0;
`;

/* --- TopBar.jsx: styled --- */
export const TopBarAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 1.5px solid ${({ theme }) => theme.glassBorder};
  flex-shrink: 0;
`;

/* --- TopBar.jsx: styled --- */
export const TopBarLogoName = styled(motion.span)`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  letter-spacing: -0.01em;
  white-space: nowrap;

  @media (max-width: 860px) { display: none; }
`;

/* --- TopBar.jsx: styled --- */
export const TopBarNavTrack = styled.nav`
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) { display: none; }
`;

/* --- TopBar.jsx: styled --- */
export const TopBarNavBtn = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 6px 14px;
  border: none;
  background: transparent;
  border-radius: 999px;
  font-size: 0.8125rem;
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  color: ${({ $active, theme }) => $active ? theme.textPrimary : theme.textSecondary};
  cursor: pointer;
  white-space: nowrap;
  z-index: 1;
  transition: color 0.2s ease;

  &:hover { color: ${({ theme }) => theme.textPrimary}; }

  @media (max-width: 960px) {
    padding: 6px 10px;
    font-size: 0.75rem;
  }
`;

/* --- TopBar.jsx: styled --- */
export const TopBarActivePill = styled(motion.span)`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.bgSecondary};
  border-radius: 999px;
  z-index: -1;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08), 0 0 0 0.5px ${({ theme }) => theme.border};
`;

/* --- TopBar.jsx: styled --- */
export const TopBarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

/* --- TopBar.jsx: styled --- */
export const TopBarIconBtn = styled(motion.button)`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.bgTertiary};
    color: ${({ theme }) => theme.textPrimary};
  }
`;

/* --- TopBar.jsx: styled --- */
export const TopBarHamburgerBtn = styled(TopBarIconBtn)`
  display: none;
  @media (max-width: 768px) { display: flex; }
`;

/* --- TopBar.jsx: styled --- */
export const TopBarOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

/* --- TopBar.jsx: styled --- */
export const TopBarSidePanel = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(300px, 82vw);
  z-index: 1200;
  ${TopBarglass}
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  border-radius: 20px 0 0 20px;
  border-right: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

/* --- TopBar.jsx: styled --- */
export const TopBarSideHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

/* --- TopBar.jsx: styled --- */
export const TopBarSideLogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

/* --- TopBar.jsx: styled --- */
export const TopBarSideName = styled.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  letter-spacing: -0.01em;
`;

/* --- TopBar.jsx: styled --- */
export const TopBarSideCloseBtn = styled(motion.button)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.bgTertiary};
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.bgSecondary};
    color: ${({ theme }) => theme.textPrimary};
  }
`;

/* --- TopBar.jsx: styled --- */
export const TopBarSideNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 12px;
  flex: 1;
`;

/* --- TopBar.jsx: styled --- */
export const TopBarSideNavBtn = styled(motion.button)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 13px 16px;
  border: none;
  background: transparent;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  color: ${({ $active, theme }) => $active ? theme.accent : theme.textSecondary};
  cursor: pointer;
  text-align: left;
  transition: color 0.2s ease;
  overflow: hidden;

  &:hover { color: ${({ theme }) => theme.textPrimary}; }
`;

/* --- TopBar.jsx: styled --- */
export const TopBarSideActiveBg = styled(motion.span)`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.accentSubtle};
  border-radius: 14px;
  z-index: 0;
`;

/* --- TopBar.jsx: styled --- */
export const TopBarSideNavLabel = styled.span`
  position: relative;
  z-index: 1;
`;

/* --- TopBar.jsx: styled --- */
export const TopBarSideIndex = styled.span`
  position: relative;
  z-index: 1;
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 700;
  color: ${({ $active, theme }) => $active ? theme.accent : theme.textTertiary};
  opacity: ${({ $active }) => $active ? 1 : 0.5};
  font-variant-numeric: tabular-nums;
`;

/* --- TopBar.jsx: styled --- */
export const TopBarSideFooter = styled.div`
  padding: 12px;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

/* --- TopBar.jsx: styled --- */
export const TopBarThemeRow = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 14px;
  background: ${({ theme }) => theme.bgTertiary};
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.bgSecondary};
    color: ${({ theme }) => theme.textPrimary};
  }
`;

/* --- TopBar.jsx: styled --- */
export const TopBarThemeLabel = styled.span`
  flex: 1;
  text-align: left;
`;

/* --- TopBar.jsx: styled --- */
export const TopBarThemeChip = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentSubtle};
  color: ${({ theme }) => theme.accent};
`;
export const SpotlightGlowBase = styled.span`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  pointer-events: none;

  border-radius: inherit;

  z-index: 0;

  opacity: var(--spotlight-opacity, 0);

  background: radial-gradient(
    320px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%),
    ${({ $color, theme }) =>
      $color || theme.accent}35,
    transparent 70%
  );

  transition: opacity 180ms ease;

  will-change: opacity;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (hover: none), (pointer: coarse) {
    display: none;
  }
`;
/* ============================================================================
   GLOBAL STYLES
   ============================================================================ */

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text',
      'Helvetica Neue', Arial, sans-serif;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.textPrimary};
    overflow-x: hidden;
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.textTertiary};
    border-radius: 3px;
  }

  ::selection {
    background: ${({ theme }) => theme.accentSubtle};
    color: ${({ theme }) => theme.accent};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.accent};
    outline-offset: 2px;
    border-radius: 4px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  section[id] {
    scroll-margin-top: 90px;
  }

  @media (max-width: 768px) {
    section[id] {
      scroll-margin-top: 68px;
    }
  }

  /* Only animate explicitly interactive/theme properties.
     Never globally transition transforms, filters, layout, etc. */
  [data-theme-transition] {
    transition:
      background-color 0.25s ease,
      border-color 0.25s ease,
      color 0.25s ease,
      box-shadow 0.25s ease;
  }

  [data-no-transition] {
    transition: none !important;
  }

  /*
   * Jestsee-inspired interaction layer:
   * every element marked data-spotlight gets a soft mouse-following
   * illumination from SpotlightEffects.jsx. The effect is intentionally
   * subtle at rest and becomes visible only while the pointer is over it.
   */
  [data-spotlight] {
    --spotlight-x: 50%;
    --spotlight-y: 50%;
    position: relative;
    isolation: isolate;
  }
  @media (hover: none), (pointer: coarse) {
    [data-spotlight] > span[aria-hidden='true'] {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [data-spotlight] > span[aria-hidden='true'] {
      transition: none !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`
/* ================================================================
   COURAGE PAGE
================================================================ */

export const CouragePage = styled.main`
  position: relative;

  width: 100%;
  height: 100dvh;
  min-height: 560px;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 50% 45%,
      ${({ theme }) =>
        theme.mode === 'dark'
          ? 'rgba(41, 151, 255, 0.055)'
          : 'rgba(0, 113, 227, 0.045)'} 0%,
      transparent 55%
    ),
    ${({ theme }) => theme.bg};

  color: ${({ theme }) => theme.textPrimary};

  isolation: isolate;

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;


/* ================================================================
   AMBIENT ATMOSPHERE
================================================================ */

export const CourageAtmosphere = styled.div`
  position: absolute;
  inset: -20%;

  z-index: -5;
  pointer-events: none;

  background:
    radial-gradient(
      ellipse at 50% 50%,
      ${({ theme }) =>
        theme.mode === 'dark'
          ? 'rgba(41, 151, 255, 0.14)'
          : 'rgba(0, 113, 227, 0.09)'},
      transparent 52%
    );

  filter: blur(40px);

  opacity: ${({ theme }) =>
    theme.mode === 'dark' ? 0.9 : 0.7};

  transform: translateZ(0);

  animation: courageAtmosphere 12s ease-in-out infinite;

  @keyframes courageAtmosphere {
    0%,
    100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.04);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;


/* ================================================================
   BACKGROUND STARS / PARTICLES
================================================================ */

export const CourageStars = styled.div`
  position: absolute;
  inset: 0;

  z-index: -2;
  pointer-events: none;

  span {
    position: absolute;

    width: 2px;
    height: 2px;

    border-radius: 50%;

    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'rgba(114, 183, 255, 0.65)'
        : 'rgba(0, 113, 227, 0.35)'};

    box-shadow:
      0 0 6px
      ${({ theme }) =>
        theme.mode === 'dark'
          ? 'rgba(114, 183, 255, 0.35)'
          : 'rgba(0, 113, 227, 0.18)'};

    animation: courageStar 6s ease-in-out infinite;
  }

  span:nth-child(1) {
    top: 18%;
    left: 17%;
    animation-delay: -1s;
  }

  span:nth-child(2) {
    top: 27%;
    left: 79%;
    animation-delay: -3s;
  }

  span:nth-child(3) {
    top: 63%;
    left: 12%;
    animation-delay: -2s;
  }

  span:nth-child(4) {
    top: 73%;
    left: 86%;
    animation-delay: -4s;
  }

  span:nth-child(5) {
    top: 12%;
    left: 48%;
    animation-delay: -5s;
  }

  span:nth-child(6) {
    top: 84%;
    left: 39%;
    animation-delay: -2.5s;
  }

  span:nth-child(7) {
    top: 39%;
    left: 91%;
    animation-delay: -1.5s;
  }

  span:nth-child(8) {
    top: 49%;
    left: 7%;
    animation-delay: -4.5s;
  }

  @keyframes courageStar {
    0%,
    100% {
      opacity: 0.2;
      transform: scale(0.8);
    }

    50% {
      opacity: 0.75;
      transform: scale(1.15);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    span {
      animation: none;
      opacity: 0.35;
    }
  }
`;


/* ================================================================
   CENTRAL GLOW
================================================================ */

export const CourageGlow = styled.div`
  position: absolute;

  left: 50%;
  top: 45%;

  width: min(42vw, 620px);
  height: min(42vw, 620px);

  transform: translate(-50%, -50%);

  z-index: -3;
  pointer-events: none;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      ${({ theme }) =>
        theme.mode === 'dark'
          ? 'rgba(74, 157, 255, 0.07)'
          : 'rgba(0, 113, 227, 0.045)'} 0%,
      ${({ theme }) =>
        theme.mode === 'dark'
          ? 'rgba(74, 157, 255, 0.025)'
          : 'rgba(0, 113, 227, 0.012)'} 28%,
      transparent 68%
    );

  filter: blur(18px);

  animation: courageGlow 9s ease-in-out infinite;

  @keyframes courageGlow {
    0%,
    100% {
      opacity: 0.55;

      transform:
        translate(-50%, -50%)
        scale(0.96);
    }

    50% {
      opacity: 0.85;

      transform:
        translate(-50%, -50%)
        scale(1.04);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;


/* ================================================================
   CONTENT STAGE
================================================================ */

export const CourageContent = styled.div`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 6vh;

  box-sizing: border-box;

  text-align: center;

  pointer-events: none;
  overflow: visible;
`;


/* ================================================================
   COMPOSITION
================================================================ */

export const CourageComposition = styled.div`
  position: relative;

  width: min(900px, 88vw);

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;

  will-change: transform;

  transform: translateZ(0);
  backface-visibility: hidden;

  pointer-events: none;
`;


/* ================================================================
   STAR MARK
================================================================ */

export const CourageMark = styled.div`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 22px;

  color: ${({ theme }) => theme.accent};

  font-size: 40px;
  line-height: 1;

  opacity: 0.92;

  text-shadow:
    0 0 12px
    ${({ theme }) =>
      theme.mode === 'dark'
        ? 'rgba(41, 151, 255, 0.32)'
        : 'rgba(0, 113, 227, 0.18)'};
`;


/* ================================================================
   EYEBROW
================================================================ */

export const CourageEyebrow = styled.div`
  margin-bottom: 14px;

  color: ${({ theme }) => theme.textTertiary};

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;

  font-size: 12px;
  font-weight: 600;

  letter-spacing: 0.32em;
  line-height: 1;

  text-transform: uppercase;
  white-space: nowrap;
`;


/* ================================================================
   TITLE
================================================================ */

export const CourageTitle = styled.h1`
  margin: 0;

  color: ${({ theme }) => theme.textPrimary};

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: clamp(68px, 9vw, 124px);

  font-weight: 500;

  letter-spacing: -0.045em;

  line-height: 0.95;

  text-rendering: optimizeLegibility;

  white-space: nowrap;

  text-shadow:
    0 0 40px
    ${({ theme }) =>
      theme.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.025)'
        : 'rgba(0, 0, 0, 0.025)'};

  transform: translateZ(0);

  will-change:
    transform,
    opacity,
    filter;
`;


/* ================================================================
   QUOTE STATEMENT
================================================================ */

export const CourageStatement = styled.div`
  width: 100%;

  min-height: 112px;

  margin-top: 34px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  overflow: visible;
`;


/* ================================================================
   QUOTE LINE
================================================================ */

export const CourageLine = styled.div`
  margin: 0;

  color: ${({ theme }) => theme.textSecondary};

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;

  font-size: clamp(16px, 1.55vw, 22px);

  font-weight: 400;

  letter-spacing: -0.01em;

  line-height: 1.65;

  white-space: nowrap;

  transform: translateZ(0);

  will-change:
    transform,
    opacity,
    filter;

  &:last-child {
    margin-top: 1px;
  }
`;


/* ================================================================
   ACCENT
================================================================ */

export const CourageAccent = styled.span`
  color: ${({ theme }) => theme.accent};

  text-shadow:
    0 0 18px
    ${({ theme }) =>
      theme.mode === 'dark'
        ? 'rgba(41, 151, 255, 0.18)'
        : 'rgba(0, 113, 227, 0.12)'};
`;


/* ================================================================
   KEEP GOING
================================================================ */

export const CourageContinue = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 14px;

  margin-top: 34px;

  color: ${({ theme }) => theme.textTertiary};

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;

  font-size: 11px;

  font-weight: 600;

  letter-spacing: 0.32em;

  line-height: 1;

  white-space: nowrap;

  span:first-child,
  span:last-child {
    display: block;

    width: 28px;
    height: 1px;

    background:
      linear-gradient(
        90deg,
        transparent,
        ${({ theme }) => theme.borderStrong}
      );
  }

  span:last-child {
    background:
      linear-gradient(
        90deg,
        ${({ theme }) => theme.borderStrong},
        transparent
      );
  }
`;


/* ================================================================
   BACK BUTTON
================================================================ */

export const CourageBackButton = styled(motion.button)`
  position: absolute;

  top: 30px;
  left: 34px;

  z-index: 20;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 11px;

  padding: 11px 17px;

  border: 1px solid ${({ theme }) => theme.border};

  border-radius: 999px;

  background: ${({ theme }) => theme.glass};

  color: ${({ theme }) => theme.textSecondary};

  box-shadow: ${({ theme }) => theme.shadowSm};

  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);

  font-family: inherit;

  font-size: 0.875rem;
  font-weight: 500;

  cursor: pointer;

  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.glassHover};

    color: ${({ theme }) => theme.textPrimary};

    border-color: ${({ theme }) => theme.accent};

    box-shadow:
      ${({ theme }) => theme.shadowMd},
      0 0 20px
      ${({ theme }) =>
        theme.mode === 'dark'
          ? 'rgba(41, 151, 255, 0.08)'
          : 'rgba(0, 113, 227, 0.08)'};
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.accent};
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    top: 18px;
    left: 18px;

    padding: 9px 14px;

    font-size: 0.8125rem;
  }

  @media (prefers-reduced-transparency: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;

    background: ${({ theme }) => theme.bgSecondary};
  }
`;

