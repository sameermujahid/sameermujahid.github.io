import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled, { css, keyframes } from 'styled-components';
import { useThemeToggle } from '../styles/ThemeContext';
import resumeData from '../data/resumeData';

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

const glass = css`
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid ${({ theme }) => theme.glassBorder};
`;
const Bar = styled(motion.header)`
  position: fixed;
  top: 14px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1000;

  /* Dynamic width and height based on scroll state */
  width: ${({ $scrolled }) => $scrolled ? 'min(560px, calc(100vw - 32px))' : 'min(820px, calc(100vw - 32px))'};
  height: ${({ $scrolled }) => $scrolled ? '56px' : '64px'};
  transition:
    width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.3s ease,
    background 0.3s ease,
    border-radius 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    padding 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${glass}
  border-radius: ${({ $scrolled }) => $scrolled ? '28px' : '32px'};
  padding: ${({ $scrolled }) => $scrolled ? '8px 16px' : '12px 20px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  &[data-scrolled="true"] {
    box-shadow: ${({ theme }) => theme.shadowLg};
    background: ${({ theme }) => theme.glassStrong};
  }

  @media (max-width: 768px) {
    top: 0;
    width: 100%;
    height: 60px;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-top: none;
    padding: 12px 20px;
  }
`;

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
      {/* Top Bar */}
      <Bar
        $scrolled={scrolled}
        data-scrolled={scrolled}
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Logo */}
        <LogoWrap onClick={() => scrollTo('home')}>
          <Avatar src={resumeData.assets.profileImage} alt={resumeData.name} />
          <LogoName
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
          </LogoName>
        </LogoWrap>

        {/* Desktop / Tablet Nav — animated pill */}
        <NavTrack>
          {NAV_ITEMS.map(({ id, label }) => (
            <NavBtn
              key={id}
              $active={activeLink === id}
              onClick={() => scrollTo(id)}
            >
              {activeLink === id && (
                <ActivePill
                  layoutId="nav-active-pill"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              {label}
            </NavBtn>
          ))}
        </NavTrack>

        {/* Actions */}
        <Actions>
          <IconBtn
            onClick={toggle}
            whileTap={{ scale: 0.88, rotate: isDark ? 20 : -20 }}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </IconBtn>

          <HamburgerBtn
            onClick={() => setSidebarOpen(true)}
            whileTap={{ scale: 0.88 }}
            aria-label="Open menu"
          >
            <MenuIcon />
          </HamburgerBtn>
        </Actions>
      </Bar>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <Overlay
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Panel */}
            <SidePanel
              key="panel"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <SideHeader>
                <SideLogoWrap>
                  <Avatar src={resumeData.assets.profileImage} alt={resumeData.name} />
                  <SideName>{resumeData.shortName}</SideName>
                </SideLogoWrap>
                <SideCloseBtn
                  onClick={() => setSidebarOpen(false)}
                  whileTap={{ scale: 0.9 }}
                >
                  <CloseIcon />
                </SideCloseBtn>
              </SideHeader>

              {/* Nav Links */}
              <SideNav>
                {NAV_ITEMS.map(({ id, label }, i) => {
                  const isActive = activeLink === id;
                  return (
                    <SideNavBtn
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
                          <SideActiveBg
                            key="active-bg"
                            layoutId="sidebar-active-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                          />
                        )}
                      </AnimatePresence>
                      <SideNavLabel>{label}</SideNavLabel>
                      <SideIndex $active={isActive}>
                        {String(i + 1).padStart(2, '0')}
                      </SideIndex>
                    </SideNavBtn>
                  );
                })}
              </SideNav>

              {/* Footer — theme toggle */}
              <SideFooter>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.055 + 0.1, duration: 0.3 }}
                >
                  <ThemeRow
                    onClick={toggle}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isDark ? <SunIcon /> : <MoonIcon />}
                    <ThemeLabel>
                      {isDark ? 'Switch to Light' : 'Switch to Dark'}
                    </ThemeLabel>
                    <ThemeChip>{isDark ? 'Light' : 'Dark'}</ThemeChip>
                  </ThemeRow>
                </motion.div>
              </SideFooter>
            </SidePanel>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// ─── Styled Components ───────────────────────────────────────────────────────────────────

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  flex-shrink: 0;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 1.5px solid ${({ theme }) => theme.glassBorder};
  flex-shrink: 0;
`;

const LogoName = styled(motion.span)`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  letter-spacing: -0.01em;
  white-space: nowrap;

  @media (max-width: 860px) { display: none; }
`;

const NavTrack = styled.nav`
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) { display: none; }
`;

const NavBtn = styled.button`
  position: relative;
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

const ActivePill = styled(motion.span)`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.bgSecondary};
  border-radius: 999px;
  z-index: -1;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08), 0 0 0 0.5px ${({ theme }) => theme.border};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

const IconBtn = styled(motion.button)`
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

const HamburgerBtn = styled(IconBtn)`
  display: none;
  @media (max-width: 768px) { display: flex; }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const SidePanel = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(300px, 82vw);
  z-index: 1200;
  ${glass}
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  border-radius: 20px 0 0 20px;
  border-right: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SideHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const SideLogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SideName = styled.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  letter-spacing: -0.01em;
`;

const SideCloseBtn = styled(motion.button)`
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

const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 12px;
  flex: 1;
`;

const SideNavBtn = styled(motion.button)`
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

const SideActiveBg = styled(motion.span)`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.accentSubtle};
  border-radius: 14px;
  z-index: 0;
`;

const SideNavLabel = styled.span`
  position: relative;
  z-index: 1;
`;

const SideIndex = styled.span`
  position: relative;
  z-index: 1;
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 700;
  color: ${({ $active, theme }) => $active ? theme.accent : theme.textTertiary};
  opacity: ${({ $active }) => $active ? 1 : 0.5};
  font-variant-numeric: tabular-nums;
`;

const SideFooter = styled.div`
  padding: 12px;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const ThemeRow = styled(motion.button)`
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

const ThemeLabel = styled.span`
  flex: 1;
  text-align: left;
`;

const ThemeChip = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 999px;
  background: ${({ theme }) => theme.accentSubtle};
  color: ${({ theme }) => theme.accent};
`;

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


