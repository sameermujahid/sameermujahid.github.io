// GlobalStyles.jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
html, body {
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
    transition: background 0.4s ease, color 0.4s ease;
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

  a { color: inherit; text-decoration: none; }

  /* Hide default cursor everywhere for custom cursor */
  *, *::before, *::after {
  }

  img { max-width: 100%; display: block; }

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

  button {
    font-family: inherit;
  }

  /* Theme transition — only on color-related props */
  *, *::before, *::after {
    transition-property: background-color, border-color, box-shadow, color, fill;
    transition-duration: 0.25s;
    transition-timing-function: ease;
  }

  /* Prevent transition on transforms/layout */
  [data-no-transition] {
    transition: none !important;
  }
`;

export default GlobalStyles;