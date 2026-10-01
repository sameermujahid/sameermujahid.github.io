import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import { AppThemeProvider } from './styles/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import { BgGlow } from './styles/styles';
import TopBar from './components/TopBar';

/*
 * Important startup optimization:
 * The old app rendered all lazy sections immediately. That still caused
 * React to resolve/parse several large chunks right after the first paint.
 * Sections now enter the DOM shortly before they are needed.
 */
const AboutMe = lazy(() => import('./components/AboutMe'));
const Skills = lazy(() => import('./components/Skills'));
const Tabs = lazy(() => import('./components/Tabs'));
const Connect = lazy(() => import('./components/Connect'));
const Footer = lazy(() => import('./components/Footer'));

const SectionFallback = ({ minHeight }) => (
  <div
    aria-hidden="true"
    style={{
      minHeight,
      width: '100%',
    }}
  />
);

const DeferredSection = ({ Component, minHeight = 400 }) => {
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
        <Suspense fallback={<SectionFallback minHeight={minHeight} />}>
          <Component />
        </Suspense>
      ) : (
        <SectionFallback minHeight={minHeight} />
      )}
    </div>
  );
};

function AppContent() {
  return (
    <>
      <GlobalStyles />
      <BgGlow />
      <TopBar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />

        <DeferredSection Component={AboutMe} minHeight={650} />
        <DeferredSection Component={Skills} minHeight={850} />
        <DeferredSection Component={Tabs} minHeight={1050} />
        <DeferredSection Component={Connect} minHeight={850} />
        <DeferredSection Component={Footer} minHeight={300} />
      </main>
    </>
  );
}

function App() {
  return (
    <AppThemeProvider>
      <AppContent />
    </AppThemeProvider>
  );
}

export default App;


