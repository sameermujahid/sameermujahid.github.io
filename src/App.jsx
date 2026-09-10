import React, { useRef, lazy, Suspense } from 'react';
import Hero from './components/Hero';
import { AppThemeProvider } from './styles/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import { BgGlow } from './styles/styles';
import TopBar from './components/TopBar';
import CustomCursor from './components/CustomCursor';

const AboutMe = lazy(() => import('./components/AboutMe'));
const Skills = lazy(() => import('./components/Skills'));
const Tabs = lazy(() => import('./components/Tabs'));
const Connect = lazy(() => import('./components/Connect'));
const Footer = lazy(() => import('./components/Footer'));

const Fallback = () => <div style={{ minHeight: 200 }} />;

function AppContent() {
  const stickyElement = useRef(null);   // <-- ref for the element you want sticky

  return (
    <>
      <GlobalStyles />
      {/* <CustomCursor stickyElement={stickyElement} /> */}
      <BgGlow />
      <TopBar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />

        <Suspense fallback={<Fallback />}>
          <AboutMe />
          <Skills />
          <Tabs />
          <Connect />
          <Footer />
        </Suspense>
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