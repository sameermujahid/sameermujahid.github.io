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

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import Hero from './components/Hero';

import {
  AppThemeProvider,
} from './styles/ThemeContext';

import {
  BgGlow,
  GlobalStyles,
} from './styles/styles';

import TopBar from './components/TopBar';
import { SpotlightEffects } from './components/SpotlightEffects';


/* --------------------------------------------------------------------------
   Lazy-loaded pages
-------------------------------------------------------------------------- */

const Courage = lazy(
  () => import('./components/Courage')
);


/* --------------------------------------------------------------------------
   Lazy-loaded portfolio sections
-------------------------------------------------------------------------- */

const AboutMe = lazy(
  () => import('./components/AboutMe')
);

const Skills = lazy(
  () => import('./components/Skills')
);

const Tabs = lazy(
  () => import('./components/Tabs')
);

const Connect = lazy(
  () => import('./components/Connect')
);

const Footer = lazy(
  () => import('./components/Footer')
);


/* --------------------------------------------------------------------------
   Route loading screen
-------------------------------------------------------------------------- */

const RouteLoader = () => {
  return (
    <div
      className="route-loader"
      aria-hidden="true"
    >
      <div className="route-loader-glow" />
    </div>
  );
};


/* --------------------------------------------------------------------------
   Section fallback
-------------------------------------------------------------------------- */

const SectionFallback = ({
  minHeight,
}) => {
  return (
    <div
      aria-hidden="true"
      style={{
        minHeight,
        width: '100%',
      }}
    />
  );
};


/* --------------------------------------------------------------------------
   Deferred Section
-------------------------------------------------------------------------- */

const DeferredSection = ({
  Component,
  minHeight = 400,
}) => {
  const hostRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = hostRef.current;

    if (!node) {
      return;
    }

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={hostRef}>
      {ready ? (
        <Suspense
          fallback={
            <SectionFallback
              minHeight={minHeight}
            />
          }
        >
          <Component />
        </Suspense>
      ) : (
        <SectionFallback
          minHeight={minHeight}
        />
      )}
    </div>
  );
};


/* --------------------------------------------------------------------------
   Portfolio
-------------------------------------------------------------------------- */
function Portfolio() {
  return (
    <>
      <GlobalStyles />

      <BgGlow />

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


/* --------------------------------------------------------------------------
   Scroll manager
-------------------------------------------------------------------------- */

function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
}


/* --------------------------------------------------------------------------
   Page transition wrapper
-------------------------------------------------------------------------- */

const pageTransition = {
  initial: {
    opacity: 0,
    y: 14,
    filter: 'blur(8px)',
  },

  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },

  exit: {
    opacity: 0,
    y: -10,
    filter: 'blur(8px)',
  },
};


const courageTransition = {
  initial: {
    opacity: 0,
    scale: 0.985,
    filter: 'blur(10px)',
  },

  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },

  exit: {
    opacity: 0,
    scale: 1.025,
    filter: 'blur(12px)',
  },
};


function AnimatedPage({
  children,
  type = 'portfolio',
}) {
  const variants =
    type === 'courage'
      ? courageTransition
      : pageTransition;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{
        width: '100%',
      }}
    >
      {children}
    </motion.div>
  );
}


/* --------------------------------------------------------------------------
   Routes
-------------------------------------------------------------------------- */
function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollManager />

      {/* TopBar only on the portfolio/home page */}
      {/* {location.pathname === '/' && <TopBar />} */}
<TopBar visible={location.pathname === '/'} />
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route
            path="/"
            element={
              <AnimatedPage type="portfolio">
                <Portfolio />
              </AnimatedPage>
            }
          />

          <Route
            path="/courage"
            element={
              <AnimatedPage type="courage">
                <Courage />
              </AnimatedPage>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}


/* --------------------------------------------------------------------------
   App
-------------------------------------------------------------------------- */

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <div
          id="app-shell"
          style={{
            minHeight: '100vh',
            width: '100%',
            overflowX: 'clip',
            background: '#050505',
          }}
        >
          <AppRoutes />
        </div>
      </BrowserRouter>
    </AppThemeProvider>
  );
}


export default App;