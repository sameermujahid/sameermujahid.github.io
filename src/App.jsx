import React, {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';

import Hero from './components/Hero';
import Courage from './components/Courage';

import { AppThemeProvider } from './styles/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import { BgGlow } from './styles/styles';
import TopBar from './components/TopBar';
import { SpotlightEffects } from './components/SpotlightEffects';
const AboutMe = lazy(() => import('./components/AboutMe'));
const Skills = lazy(() => import('./components/Skills'));
const Tabs = lazy(() => import('./components/Tabs'));
const Connect = lazy(() => import('./components/Connect'));
const Footer = lazy(() => import('./components/Footer'));
import styled from 'styled-components';
const RouteStage = styled.div`
  min-height: 100vh;
  width: 100%;

  background: ${({ theme }) => theme.bg};

  color: ${({ theme }) => theme.textPrimary};

  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;
/* ================================================================
   SECTION FALLBACK
================================================================ */

const SectionFallback = ({ minHeight }) => (
  <div
    aria-hidden="true"
    style={{
      minHeight,
      width: '100%',
    }}
  />
);


/* ================================================================
   DEFERRED SECTION
================================================================ */

const DeferredSection = ({
  Component,
  minHeight = 400,
}) => {
  const hostRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = hostRef.current;

    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '900px 0px 900px 0px',
        threshold: 0,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={hostRef}>
      {ready ? (
        <Suspense
          fallback={
            <SectionFallback minHeight={minHeight} />
          }
        >
          <Component />
        </Suspense>
      ) : (
        <SectionFallback minHeight={minHeight} />
      )}
    </div>
  );
};


/* ================================================================
   PORTFOLIO
================================================================ */
function Portfolio() {
  return (
    <>
      <GlobalStyles />

      <BgGlow />

      <TopBar />

      <SpotlightEffects />

      <main
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Hero />

        <DeferredSection
          Component={AboutMe}
          minHeight={650}
        />

        <DeferredSection
          Component={Skills}
          minHeight={850}
        />

        <DeferredSection
          Component={Tabs}
          minHeight={1050}
        />

        <DeferredSection
          Component={Connect}
          minHeight={850}
        />

        <DeferredSection
          Component={Footer}
          minHeight={300}
        />
      </main>
    </>
  );
}


/* ================================================================
   ROUTE TRANSITION
================================================================ */

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <RouteStage>
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <motion.div
          key={location.pathname}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            minHeight: '100vh',
            width: '100%',
          }}
        >
          <Routes location={location}>
            <Route
              path="/"
              element={<Portfolio />}
            />

            <Route
              path="/courage"
              element={<Courage />}
            />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </RouteStage>
  );
}


/* ================================================================
   APP
================================================================ */

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;