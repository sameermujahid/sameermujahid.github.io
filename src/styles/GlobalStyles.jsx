// GlobalStyles.jsx — performance-safe global styles
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
`;

export default GlobalStyles;


