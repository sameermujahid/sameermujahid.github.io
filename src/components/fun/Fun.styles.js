import styled, { css, keyframes } from 'styled-components';

// ================================================================
// MOTION
// ================================================================

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 18px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.88);
  }
  65% {
    opacity: 1;
    transform: scale(1.035);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const tileNew = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.65);
  }
  55% {
    opacity: 1;
    transform: scale(1.08);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const tileMerge = keyframes`
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.18);
  }
  65% {
    transform: scale(0.94);
  }
  100% {
    transform: scale(1);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(0.86);
    opacity: 0.9;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
`;

// ================================================================
// PAGE
// ================================================================

export const ArcadePage = styled.main`
  min-height: 100dvh;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 110px clamp(20px, 5vw, 80px) 80px;
  background:
    radial-gradient(
      circle at 50% 0%,
      ${({ theme }) => theme.accentSubtle || 'rgba(41,151,255,0.08)'} 0%,
      transparent 38%
    ),
    ${({ theme }) => theme.bg || '#ffffff'};
  color: ${({ theme }) => theme.textPrimary || '#1a1a1a'};
  isolation: isolate;

  ${({ $gameMode }) => $gameMode && css`
    height: 100dvh;
    min-height: 100dvh;
    padding: 76px clamp(12px, 3vw, 36px) 18px;
    overflow: hidden;

    @media (max-width: 700px) {
      padding: 68px 10px 10px;
    }
  `}

  @media (max-width: 700px) {
    padding: 90px 16px 50px;
  }
`;

// ================================================================
// ARCADE HEADER
// ================================================================

export const ArcadeHeader = styled.header`
  width: min(1100px, 100%);
  margin: 0 auto 55px;
  text-align: center;
  animation: ${fadeUp} 650ms cubic-bezier(0.22, 1, 0.36, 1) both;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
    color: ${({ theme }) => theme.accent || '#2997ff'};
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    font-size: clamp(2rem, 9vw, 1rem);
    line-height: 0.92;
    letter-spacing: -0.065em;
    font-weight: 850;
    background:
      ${({ theme }) =>
        theme.gradientAccent ||
        `linear-gradient(135deg, ${theme.accent || '#2997ff'}, ${theme.textPrimary || '#1a1a1a'})`};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin: 24px auto 0;
    max-width: 520px;
    color: ${({ theme }) => theme.textSecondary || '#666666'};
    font-size: clamp(0.95rem, 2vw, 1.1rem);
    line-height: 1.6;
  }
`;

// ================================================================
// GAME GRID / CARDS
// ================================================================

export const GameGrid = styled.section`
  width: min(1100px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  animation: ${fadeUp} 700ms 100ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const GameCard = styled.button`
  position: relative;
  min-height: 230px;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.glassBorder || theme.border || '#e0e0e0'};
  border-radius: 28px;
  background: ${({ theme }) => theme.glass || theme.bgSecondary || '#f5f5f5'};
  color: ${({ theme }) => theme.textPrimary || '#1a1a1a'};
  box-shadow: ${({ theme }) =>
    theme.shadowMd || '0 10px 30px rgba(0,0,0,0.12)'};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  cursor: pointer;
  text-align: left;
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 350ms ease,
    box-shadow 350ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      220px circle at 50% 0%,
      ${({ theme }) => theme.accentSubtle || 'rgba(41,151,255,0.08)'},
      transparent 70%
    );
    opacity: 0;
    transition: opacity 350ms ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-7px);
    border-color: ${({ theme }) => theme.accent || '#2997ff'};
    box-shadow: ${({ theme }) =>
      theme.shadowLg || '0 20px 50px rgba(0,0,0,0.18)'};

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px) scale(0.99);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 4px ${({ theme }) =>
        theme.accentSubtle || 'rgba(41,151,255,0.15)'};
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 560px) {
    min-height: 190px;
  }
`;

export const GameIcon = styled.div`
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  margin-bottom: 24px;
  border-radius: 20px;
  background: ${({ theme }) =>
    theme.accentSubtle || 'rgba(41,151,255,0.1)'};
  font-size: 2rem;
  transition:
    transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
    background 300ms ease;

  ${GameCard}:hover & {
    transform: rotate(-5deg) scale(1.08);
    background: ${({ theme }) =>
      theme.accentSubtle || 'rgba(41,151,255,0.16)'};
  }
`;

export const GameTitle = styled.h2`
  margin: 0 0 7px;
  color: ${({ theme }) => theme.textPrimary || '#1a1a1a'};
  font-size: 1.45rem;
  line-height: 1.1;
  letter-spacing: -0.035em;
`;

export const GameDescription = styled.p`
  margin: 0 0 22px;
  color: ${({ theme }) => theme.textSecondary || '#666666'};
  font-size: 0.92rem;
  line-height: 1.5;
`;

// ================================================================
// BACK BUTTON
// ================================================================

export const BackButton = styled.button`
  position: fixed;
  top: 20px;
  left: 22px;
  z-index: 100;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.glassBorder || theme.border || '#e0e0e0'};
  border-radius: 999px;
  background: ${({ theme }) => theme.glass || theme.bgSecondary || '#f5f5f5'};
  color: ${({ theme }) => theme.textPrimary || '#1a1a1a'};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: ${({ theme }) =>
    theme.shadowSm || '0 4px 15px rgba(0,0,0,0.1)'};
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 650;
  transition:
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 220ms ease,
    background 220ms ease;

  &:hover {
    transform: translateX(-3px);
    border-color: ${({ theme }) => theme.accent || '#2997ff'};
    color: ${({ theme }) => theme.accent || '#2997ff'};
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 4px ${({ theme }) => theme.accentSubtle || 'rgba(41,151,255,0.15)'};
  }

  @media (max-width: 600px) {
    top: 14px;
    left: 12px;
  }
`;

// ================================================================
// GAME VIEW
// ================================================================

export const GameShell = styled.div`
  width: min(980px, 100%);
  height: calc(100dvh - 94px);
  min-height: 0;
  margin: 0 auto;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

export const GameWrapper = styled.section`
  width: min(760px, 100%);
  max-height: 100%;
  min-height: 0;
  margin: 0 auto;
  padding: clamp(14px, 2.4vw, 28px);
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.glassBorder || theme.border || '#e0e0e0'};
  border-radius: clamp(22px, 3vw, 32px);
  background: ${({ theme }) => theme.glass || theme.bgSecondary || '#f5f5f5'};
  box-shadow: ${({ theme }) =>
    theme.shadowLg || '0 20px 60px rgba(0,0,0,0.15)'};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  animation: ${popIn} 450ms cubic-bezier(0.22, 1, 0.36, 1) both;
  text-align: center;
  overflow: hidden;

  p.game-hint {
    margin: 10px 0 0;
    color: ${({ theme }) => theme.textTertiary || theme.textSecondary || '#999999'};
    font-size: 0.78rem;
    opacity: 0.8;
  }

  @media (max-height: 720px) {
    padding: 12px 18px;

    p.game-hint {
      margin-top: 6px;
      font-size: 0.72rem;
    }
  }
`;

export const GameHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: clamp(12px, 2vh, 22px);
  text-align: left;

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.textPrimary || '#1a1a1a'};
    font-size: clamp(1.2rem, 3vw, 1.75rem);
    letter-spacing: -0.04em;
  }

  @media (max-width: 520px) {
    align-items: flex-start;
  }
`;

export const ScoreBar = styled.div`
  margin-top: 5px;
  color: ${({ theme }) => theme.textSecondary || '#666666'};
  font-size: 0.82rem;
  font-variant-numeric: tabular-nums;
`;

export const ActionButton = styled.button`
  flex-shrink: 0;
  padding: 10px 16px;
  border: 0;
  border-radius: 999px;
  background: ${({ theme }) => theme.accent || '#2997ff'};
  color: #fff;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 750;
  box-shadow: 0 8px 24px ${({ theme }) =>
    theme.accentSubtle || 'rgba(41,151,255,0.2)'};
  transition:
    transform 200ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 200ms ease,
    filter 200ms ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.04);
    box-shadow: 0 12px 30px ${({ theme }) =>
      theme.accentSubtle || 'rgba(41,151,255,0.25)'};
  }

  &:active {
    transform: translateY(0) scale(0.97);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.accentSubtle || 'rgba(41,151,255,0.15)'};
    outline-offset: 3px;
  }
`;

// ================================================================
// SNAKE
// ================================================================

export const GameBoard = styled.div`
  position: relative;
  width: min(52vh, 500px, 100%);
  max-width: 100%;
  aspect-ratio: 1;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  gap: 2px;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.border || '#e0e0e0'};
  border-radius: 18px;
  background: ${({ theme }) => theme.bgTertiary || '#f0f0f0'};
  overflow: hidden;
  box-shadow:
    inset 0 0 40px rgba(0,0,0,0.12),
    0 16px 40px rgba(0,0,0,0.08);

  @media (max-height: 720px) {
    width: min(55vh, 430px, 100%);
  }
`;

export const SnakeCell = styled.div`
  position: relative;
  border-radius: 4px;
  background: ${({ $snake, $head, $food, theme }) =>
    $head
      ? theme.accent || '#2997ff'
      : $snake
        ? `${theme.accent || '#2997ff'}cc`
        : $food
          ? '#ff5f57'
          : 'transparent'};

  box-shadow: ${({ $head, $food, theme }) =>
    $head
      ? `0 0 14px ${theme.accent || '#2997ff'}`
      : $food
        ? '0 0 14px rgba(255,95,87,0.7)'
        : 'none'};

  transform: ${({ $head, $food }) =>
    $head || $food ? 'scale(0.9)' : 'scale(1)'};

  transition:
    background 90ms ease,
    transform 90ms cubic-bezier(0.22, 1, 0.36, 1);

  ${({ $food }) => $food && css`
    border-radius: 50%;
    animation: ${pulse} 800ms ease-in-out infinite;
  `}
`;

export const GameOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  background: rgba(0,0,0,0.48);
  color: #fff;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  animation: ${fadeUp} 220ms ease both;

  > div {
    display: grid;
    gap: 7px;
    padding: 22px 28px;
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 20px;
    background: rgba(20,20,20,0.62);
    box-shadow: 0 20px 60px rgba(0,0,0,0.28);
  }

  strong {
    font-size: clamp(1.2rem, 4vw, 2rem);
    letter-spacing: -0.04em;
  }

  span {
    font-size: 0.82rem;
    opacity: 0.72;
  }
`;

// ================================================================
// 2048
// ================================================================

export const Grid2048 = styled.div`
  --gap: clamp(6px, 1.2vw, 10px);
  --pad: clamp(8px, 1.4vw, 12px);
  --tile-size: calc((100% - (2 * var(--pad)) - (3 * var(--gap))) / 4);

  position: relative;
  width: min(58vh, 470px, 100%);
  max-width: 100%;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  padding: var(--pad);
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  gap: var(--gap);
  border-radius: 22px;
  background: ${({ theme }) => theme.bgTertiary || '#f0f0f0'};
  box-shadow:
    inset 0 0 30px rgba(0, 0, 0, 0.08),
    0 18px 45px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  isolation: isolate;
  touch-action: none;

  .grid-cell {
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
    border-radius: clamp(8px, 1.5vw, 14px);
    background: ${({ theme }) => theme.bgSecondary || 'rgba(128, 128, 128, 0.12)'};
    opacity: 0.8;
    pointer-events: none;
    box-sizing: border-box;
  }

  @media (max-height: 720px) {
    width: min(56vh, 420px, 100%);
  }

  @media (max-width: 520px) {
    width: min(calc(100vw - 24px), 470px);
    border-radius: 18px;
  }
`;

export const Tile2048 = styled.div`
  --tile-size: calc((100% - (2 * var(--pad)) - (3 * var(--gap))) / 4);
  --tile-left: calc(var(--pad) + ${({ $x }) => $x} * (var(--tile-size) + var(--gap)));
  --tile-top: calc(var(--pad) + ${({ $y }) => $y} * (var(--tile-size) + var(--gap)));

  position: absolute;
  left: var(--tile-left);
  top: var(--tile-top);
  width: var(--tile-size);
  height: var(--tile-size);
  box-sizing: border-box;
  display: grid;
  place-items: center;
  border-radius: clamp(8px, 1.5vw, 14px);
  background: ${({ $value, theme }) => {
    const accent = theme.accent || '#2997ff';
    if (!$value) return theme.bgSecondary || '#f0f0f0';
    if ($value >= 2048) return accent;
    if ($value >= 512) return `${accent}dd`;
    if ($value >= 128) return `${accent}bb`;
    if ($value >= 32) return `${accent}88`;
    return `${accent}55`;
  }};
  color: ${({ $value }) => ($value ? '#ffffff' : '#999999')};
  font-size: ${({ $value }) =>
    $value >= 1000 ? 'clamp(0.85rem, 4.5vw, 1.75rem)' : 'clamp(1.1rem, 6vw, 2.35rem)'};
  font-weight: 850;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  user-select: none;
  pointer-events: none;
  z-index: 5;
  transition:
    left 180ms cubic-bezier(0.22, 1, 0.36, 1),
    top 180ms cubic-bezier(0.22, 1, 0.36, 1),
    background 140ms ease,
    box-shadow 140ms ease;
  box-shadow:
    0 7px 18px rgba(0, 0, 0, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);

  ${({ $new }) =>
    $new &&
    css`
      animation: ${tileNew} 240ms cubic-bezier(0.22, 1, 0.36, 1) both;
      transform-origin: center center;
    `}

  ${({ $merged }) =>
    $merged &&
    css`
      animation: ${tileMerge} 280ms cubic-bezier(0.22, 1, 0.36, 1) both;
      transform-origin: center center;
      box-shadow:
        0 0 28px ${({ theme }) => theme.accentSubtle || 'rgba(41, 151, 255, 0.2)'},
        0 8px 22px rgba(0, 0, 0, 0.1);
    `}

  ${({ $value }) =>
    $value >= 10000 &&
    css`
      font-size: clamp(0.7rem, 3.8vw, 1.45rem);
    `}
`;

// ================================================================
// REACTION
// ================================================================

export const ReactionArea = styled.button`
  width: 100%;
  min-height: min(48vh, 360px);
  display: grid;
  place-items: center;
  padding: 26px;
  box-sizing: border-box;
  border: 1px solid ${({ $ready, theme }) =>
    $ready ? theme.accent || '#2997ff' : theme.border || '#e0e0e0'};
  border-radius: 24px;
  background: ${({ $ready, theme }) =>
    $ready ? theme.accent || '#2997ff' : theme.bgTertiary || '#f0f0f0'};
  color: ${({ $ready, theme }) => ($ready ? '#fff' : theme.textPrimary || '#1a1a1a')};
  cursor: pointer;
  font-size: clamp(1.4rem, 5vw, 2.7rem);
  font-weight: 850;
  letter-spacing: -0.05em;
  transition:
    background 240ms ease,
    border-color 240ms ease,
    transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 240ms ease;
  box-shadow: ${({ $ready, theme }) =>
    $ready ? `0 0 55px ${theme.accentSubtle || 'rgba(41,151,255,0.2)'}` : 'none'};

  &:hover {
    transform: scale(1.005);
  }

  &:active {
    transform: scale(0.99);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.accent || '#2997ff'};
    outline-offset: 4px;
  }
`;

// ================================================================
// MEMORY
// ================================================================

export const MemoryGrid = styled.div`
  width: min(560px, 100%);
  max-height: min(62vh, 560px);
  aspect-ratio: 1;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(6px, 1.4vw, 12px);

  @media (max-height: 720px) {
    width: min(57vh, 470px, 100%);
  }
`;

export const MemoryCard = styled.button`
  position: relative;
  min-width: 0;
  min-height: 0;
  display: grid;
  place-items: center;
  border: 1px solid ${({ $open, $matched, theme }) =>
    $open || $matched ? theme.accent || '#2997ff' : theme.border || '#e0e0e0'};
  border-radius: clamp(10px, 1.8vw, 16px);
  background: ${({ $open, $matched, theme }) =>
    $open || $matched ? theme.accentSubtle || 'rgba(41,151,255,0.1)' : theme.bgTertiary || '#f0f0f0'};
  color: ${({ $open, $matched, theme }) =>
    $open || $matched ? theme.accent || '#2997ff' : theme.textSecondary || '#666666'};
  cursor: pointer;
  font-size: clamp(1.2rem, 5vw, 2.3rem);
  font-weight: 750;
  user-select: none;
  overflow: hidden;
  transition:
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
    background 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;

  span {
    display: block;
    transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
    transform: ${({ $open }) => ($open ? 'scale(1)' : 'scale(0.82)')};
  }

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.accent || '#2997ff'};
    box-shadow: 0 12px 26px rgba(0,0,0,0.08);
  }

  &:active {
    transform: scale(0.96);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.accentSubtle || 'rgba(41,151,255,0.15)'};
    outline-offset: 3px;
  }
`;

// ================================================================
// TYPING
// ================================================================

export const TypingArea = styled.div`
  width: 100%;
  min-height: 0;
  text-align: left;
`;

export const TypingText = styled.div`
  max-height: min(24vh, 180px);
  overflow: auto;
  padding: clamp(16px, 3vw, 24px);
  margin-bottom: 12px;
  border: 1px solid ${({ theme }) => theme.border || '#e0e0e0'};
  border-radius: 18px;
  background: ${({ theme }) => theme.bgTertiary || '#f0f0f0'};
  color: ${({ theme }) => theme.textPrimary || '#1a1a1a'};
  font-size: clamp(0.95rem, 2.3vw, 1.1rem);
  line-height: 1.7;
  letter-spacing: -0.01em;
  user-select: none;
`;

export const TypingInput = styled.textarea`
  display: block;
  width: 100%;
  height: min(25vh, 170px);
  min-height: 110px;
  box-sizing: border-box;
  resize: none;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.border || '#e0e0e0'};
  border-radius: 18px;
  outline: none;
  background: ${({ theme }) => theme.bgSecondary || '#f5f5f5'};
  color: ${({ theme }) => theme.textPrimary || '#1a1a1a'};
  font-family: inherit;
  font-size: 0.98rem;
  line-height: 1.7;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;

  &::placeholder {
    color: ${({ theme }) => theme.textTertiary || '#999999'};
  }

  &:focus {
    border-color: ${({ theme }) => theme.accent || '#2997ff'};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.accentSubtle || 'rgba(41,151,255,0.15)'};
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

// ================================================================
// STATUS
// ================================================================

export const StatusMessage = styled.div`
  margin-top: 12px;
  color: ${({ theme }) => theme.accent || '#2997ff'};
  font-size: 0.88rem;
  font-weight: 750;
  animation: ${fadeUp} 250ms ease both;
`;

// ================================================================
// REDUCED MOTION
// ================================================================
