import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useThemeToggle } from '../styles/ThemeContext';
import resumeData from '../data/resumeData';

import {
  TopBarBar,
  TopBarLogoWrap,
  TopBarAvatar,
  TopBarLogoName,
  TopBarNavTrack,
  TopBarNavBtn,
  TopBarActivePill,
  TopBarActions,
  TopBarIconBtn,
  TopBarHamburgerBtn,
  TopBarOverlay,
  TopBarSidePanel,
  TopBarSideHeader,
  TopBarSideLogoWrap,
  TopBarSideName,
  TopBarSideCloseBtn,
  TopBarSideNav,
  TopBarSideNavBtn,
  TopBarSideActiveBg,
  TopBarSideNavLabel,
  TopBarSideIndex,
  TopBarSideFooter,
  TopBarThemeRow,
  TopBarThemeLabel,
  TopBarThemeChip
} from '../styles/styles';
// import { SpotlightGlow } from './SpotlightEffects';

// ─── Nav items ──────────────────────────────────────────────────────────────────

const NAV_ITEMS = resumeData.navigation;

// ─── Icons ──────────────────────────────────────────────────────────────────────

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1"  x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1"  y1="12" x2="3"  y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6"  x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6"  x2="6"  y2="18"/>
    <line x1="6"  y1="6"  x2="18" y2="18"/>
  </svg>
);

// ─── Glassmorphism mixin ───────────────────────────────────────────────────────────────




// ─── Component ───────────────────────────────────────────────────────────────────

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isDark, toggle } = useThemeToggle();

  // Scroll state: one requestAnimationFrame per frame.
  useEffect(() => {
    let raf = 0;
    let lastScrolled = false;

    const update = () => {
      raf = 0;
      const nextScrolled = window.scrollY > 20;

      if (nextScrolled !== lastScrolled) {
        lastScrolled = nextScrolled;
        setScrolled(nextScrolled);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Active navigation: IntersectionObserver avoids getBoundingClientRect/
  // offsetTop work for every section on every scroll event.
  useEffect(() => {
    const sections = NAV_ITEMS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const visibility = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        });

        let active = 'home';
        let best = 0;

        for (const { id } of NAV_ITEMS) {
          const ratio = visibility.get(id) || 0;
          if (ratio > best) {
            best = ratio;
            active = id;
          }
        }

        if (best > 0) setActiveLink(active);
      },
      {
        root: null,
        rootMargin: '-18% 0px -58% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  // Close sidebar on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSidebarOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Smooth scroll
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setActiveLink(id);
    setSidebarOpen(false);
  }, []);

  return (
    <>
      {/* Top TopBarBar */}
      <TopBarBar
        $scrolled={scrolled}
        data-scrolled={scrolled}
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Logo */}
        <TopBarLogoWrap onClick={() => scrollTo('home')}>
          <TopBarAvatar src={resumeData.assets.profileImage} alt={resumeData.name} />
          <TopBarLogoName
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
          </TopBarLogoName>
        </TopBarLogoWrap>

        {/* Desktop / Tablet Nav — animated pill */}
        <TopBarNavTrack>
          {NAV_ITEMS.map(({ id, label }) => (
            <TopBarNavBtn
              key={id}
              $active={activeLink === id}
              onClick={() => scrollTo(id)}
              data-spotlight="true"
            >
              {/* <SpotlightGlow /> */}
              {activeLink === id && (
                <TopBarActivePill
                  layoutId="nav-active-pill"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span style={{ position: 'relative', zIndex: 2 }}>{label}</span>
            </TopBarNavBtn>
          ))}
        </TopBarNavTrack>

        {/* TopBarActions */}
        <TopBarActions>
          <TopBarIconBtn
            onClick={toggle}
            whileTap={{ scale: 0.88, rotate: isDark ? 20 : -20 }}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </TopBarIconBtn>

          <TopBarHamburgerBtn
            onClick={() => setSidebarOpen(true)}
            whileTap={{ scale: 0.88 }}
            aria-label="Open menu"
          >
            <MenuIcon />
          </TopBarHamburgerBtn>
        </TopBarActions>
      </TopBarBar>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <TopBarOverlay
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Panel */}
            <TopBarSidePanel
              key="panel"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <TopBarSideHeader>
                <TopBarSideLogoWrap>
                  <TopBarAvatar src={resumeData.assets.profileImage} alt={resumeData.name} />
                  <TopBarSideName>{resumeData.shortName}</TopBarSideName>
                </TopBarSideLogoWrap>
                <TopBarSideCloseBtn
                  onClick={() => setSidebarOpen(false)}
                  whileTap={{ scale: 0.9 }}
                >
                  <CloseIcon />
                </TopBarSideCloseBtn>
              </TopBarSideHeader>

              {/* Nav Links */}
              <TopBarSideNav>
                {NAV_ITEMS.map(({ id, label }, i) => {
                  const isActive = activeLink === id;
                  return (
                    <TopBarSideNavBtn
                      key={id}
                      $active={isActive}
                      onClick={() => scrollTo(id)}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      whileTap={{ scale: 0.97 }}
                    >
                      {/* Animated background for active item */}
                      <AnimatePresence>
                        {isActive && (
                          <TopBarSideActiveBg
                            key="active-bg"
                            layoutId="sidebar-active-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                          />
                        )}
                      </AnimatePresence>
                      <TopBarSideNavLabel>{label}</TopBarSideNavLabel>
                      <TopBarSideIndex $active={isActive}>
                        {String(i + 1).padStart(2, '0')}
                      </TopBarSideIndex>
                    </TopBarSideNavBtn>
                  );
                })}
              </TopBarSideNav>

              {/* Footer — theme toggle */}
              <TopBarSideFooter>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.055 + 0.1, duration: 0.3 }}
                >
                  <TopBarThemeRow
                    onClick={toggle}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isDark ? <SunIcon /> : <MoonIcon />}
                    <TopBarThemeLabel>
                      {isDark ? 'Switch to Light' : 'Switch to Dark'}
                    </TopBarThemeLabel>
                    <TopBarThemeChip>{isDark ? 'Light' : 'Dark'}</TopBarThemeChip>
                  </TopBarThemeRow>
                </motion.div>
              </TopBarSideFooter>
            </TopBarSidePanel>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// ─── Styled Components ───────────────────────────────────────────────────────────────────

















































const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:   { opacity: 0, transition: { duration: 0.2 } },
};

const panelVariants = {
  hidden:  { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 380, damping: 36, mass: 0.9 },
  },
  exit: {
    x: '100%',
    transition: { type: 'spring', stiffness: 400, damping: 40, duration: 0.25 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, x: 18 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.32, delay: i * 0.055, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default TopBar;



