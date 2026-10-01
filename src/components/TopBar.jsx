import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useThemeToggle } from '../styles/ThemeContext';
import resumeData from '../data/resumeData';
import { FiStar } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

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
  TopBarThemeChip,
  TopBarStarBtn,
} from '../styles/styles';


/* ================================================================
   NAV ITEMS
================================================================ */

const NAV_ITEMS = resumeData.navigation;


/* ================================================================
   BREAKPOINT
================================================================ */

const MOBILE_BREAKPOINT = 768;


/* ================================================================
   ICONS
================================================================ */

const SunIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />

    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />

    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />

    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />

    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);


const MoonIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);


const MenuIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);


const CloseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);


/* ================================================================
   COMPONENT
================================================================ */

const TopBar = ({ visible = true }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  const [activeLink, setActiveLink] =
    useState('home');

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  /*
   * true = mobile/small screen
   * false = desktop/large screen
   */
  const [isMobile, setIsMobile] =
    useState(() =>
      typeof window !== 'undefined'
        ? window.innerWidth <= MOBILE_BREAKPOINT
        : false
    );


  const {
    isDark,
    toggle,
  } = useThemeToggle();


  /* ================================================================
     RESPONSIVE SCREEN DETECTION
  ================================================================ */

  useEffect(() => {

    const mediaQuery =
      window.matchMedia(
        `(max-width: ${MOBILE_BREAKPOINT}px)`
      );


    const handleChange = (event) => {
      setIsMobile(event.matches);

      /*
       * If we move from mobile to desktop,
       * close the mobile sidebar.
       */
      if (!event.matches) {
        setSidebarOpen(false);
      }
    };


    setIsMobile(mediaQuery.matches);


    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener(
        'change',
        handleChange
      );
    } else {
      mediaQuery.addListener(handleChange);
    }


    return () => {

      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener(
          'change',
          handleChange
        );
      } else {
        mediaQuery.removeListener(handleChange);
      }

    };

  }, []);


  /* ================================================================
     SCROLL STATE
  ================================================================ */

  useEffect(() => {

    let raf = 0;
    let lastScrolled = false;


    const update = () => {

      raf = 0;

      const nextScrolled =
        window.scrollY > 20;


      if (
        nextScrolled !== lastScrolled
      ) {

        lastScrolled =
          nextScrolled;

        setScrolled(
          nextScrolled
        );

      }
    };


    const onScroll = () => {

      if (!raf) {
        raf =
          requestAnimationFrame(
            update
          );
      }

    };


    window.addEventListener(
      'scroll',
      onScroll,
      { passive: true }
    );


    update();


    return () => {

      window.removeEventListener(
        'scroll',
        onScroll
      );


      if (raf) {
        cancelAnimationFrame(raf);
      }

    };

  }, []);


  /* ================================================================
     ACTIVE NAVIGATION
  ================================================================ */

  useEffect(() => {

    const sections =
      NAV_ITEMS
        .map(({ id }) =>
          document.getElementById(id)
        )
        .filter(Boolean);


    if (!sections.length) {
      return;
    }


    const visibility =
      new Map();


    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              visibility.set(
                entry.target.id,
                entry.isIntersecting
                  ? entry.intersectionRatio
                  : 0
              );

            }
          );


          let active = 'home';
          let best = 0;


          for (
            const { id }
            of NAV_ITEMS
          ) {

            const ratio =
              visibility.get(id) || 0;


            if (ratio > best) {

              best = ratio;

              active = id;

            }

          }


          if (best > 0) {
            setActiveLink(active);
          }

        },

        {
          root: null,

          rootMargin:
            '-18% 0px -58% 0px',

          threshold: [
            0,
            0.15,
            0.35,
            0.55,
            0.75,
            1,
          ],
        }
      );


    sections.forEach(
      (section) =>
        observer.observe(section)
    );


    return () =>
      observer.disconnect();

  }, []);


  /* ================================================================
     BODY SCROLL LOCK
  ================================================================ */

  useEffect(() => {

    document.body.style.overflow =
      sidebarOpen
        ? 'hidden'
        : '';


    return () => {
      document.body.style.overflow =
        '';
    };

  }, [sidebarOpen]);


  /* ================================================================
     ESCAPE
  ================================================================ */

  useEffect(() => {

    const onKey = (event) => {

      if (
        event.key === 'Escape'
      ) {
        setSidebarOpen(false);
      }

    };


    window.addEventListener(
      'keydown',
      onKey
    );


    return () => {

      window.removeEventListener(
        'keydown',
        onKey
      );

    };

  }, []);


  /* ================================================================
     SMOOTH SCROLL
  ================================================================ */

  const scrollTo =
    useCallback((id) => {

      const element =
        document.getElementById(id);


      if (element) {
        const top =
          element.getBoundingClientRect().top +
          window.scrollY -
          80;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      } else if (location.pathname !== '/') {
        // Navigation was requested from another route. Return to the
        // portfolio first; the destination section will be resolved after
        // the portfolio route mounts.
        navigate('/', { state: { scrollTo: id } });
      }

      setActiveLink(id);
      setSidebarOpen(false);

    }, [location.pathname, navigate]);


  /* ================================================================
     COURAGE
  ================================================================ */

const goToCourage =
  useCallback(() => {

    setSidebarOpen(false);

    navigate('/courage');

  }, [navigate]);


  /* ================================================================
     RENDER
  ================================================================ */

  return (
    <>
      {/* ============================================================
          TOP BAR
      ============================================================ */}
<TopBarBar
  $scrolled={scrolled}
  data-scrolled={scrolled}
  $visible={visible}
  aria-hidden={!visible}
  initial={false}
  animate={{
    y: visible ? 0 : -96,
    opacity: visible ? 1 : 0,
    scale: visible ? 1 : 0.985,
  }}
  transition={{
    y: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
    opacity: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
    scale: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }}
  style={{
    pointerEvents: visible ? 'auto' : 'none',
  }}
>
        {/* ========================================================
            LOGO
        ======================================================== */}

        <TopBarLogoWrap
          onClick={() =>
            scrollTo('home')
          }
        >

          <TopBarAvatar
            src={
              resumeData.assets
                .profileImage
            }
            alt={
              resumeData.name
            }
          />

          <TopBarLogoName
            initial={{
              opacity: 0,
              x: -8,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
          />

        </TopBarLogoWrap>


        {/* ========================================================
            DESKTOP / TABLET NAV
        ======================================================== */}

        <TopBarNavTrack>

          {NAV_ITEMS.map(
            ({ id, label }) => (

              <TopBarNavBtn
                key={id}
                $active={
                  activeLink === id
                }
                onClick={() =>
                  scrollTo(id)
                }
                data-spotlight="true"
              >

                {activeLink === id && (
                  <TopBarActivePill
                    layoutId={
                      'nav-active-pill'
                    }

                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 35,
                    }}
                  />
                )}


                <span
                  style={{
                    position:
                      'relative',
                    zIndex: 2,
                  }}
                >
                  {label}
                </span>

              </TopBarNavBtn>

            )
          )}

        </TopBarNavTrack>


        {/* ========================================================
            ACTIONS
        ======================================================== */}

        <TopBarActions>

          {/* Theme */}

          <TopBarIconBtn
            onClick={toggle}

            whileTap={{
              scale: 0.88,
              rotate:
                isDark
                  ? 20
                  : -20,
            }}

            title={
              isDark
                ? 'Light mode'
                : 'Dark mode'
            }
          >

            {isDark
              ? <SunIcon />
              : <MoonIcon />
            }

          </TopBarIconBtn>


          {/* Hamburger */}

          <TopBarHamburgerBtn
            onClick={() =>
              setSidebarOpen(true)
            }

            whileTap={{
              scale: 0.88,
            }}

            aria-label="Open menu"
          >
            <MenuIcon />
          </TopBarHamburgerBtn>


          {/* ======================================================
              DESKTOP COURAGE ONLY

              IMPORTANT:
              This button is NOT rendered on mobile.
          ====================================================== */}

          {!isMobile && (
            <TopBarStarBtn
              onClick={goToCourage}

              aria-label="Courage"
              title="Courage"

              whileHover={{
                scale: 1.06,
                rotate: 3,
              }}

              whileTap={{
                scale: 0.88,
                rotate: 12,
              }}
            >
              <FiStar size={16} />
            </TopBarStarBtn>
          )}

        </TopBarActions>

      </TopBarBar>


      {/* ============================================================
          MOBILE SIDEBAR
      ============================================================ */}

      <AnimatePresence>

        {sidebarOpen && (
          <>

            {/* ======================================================
                BACKDROP
            ====================================================== */}

            <TopBarOverlay
              key="overlay"

              variants={
                overlayVariants
              }

              initial="hidden"
              animate="visible"
              exit="exit"

              onClick={() =>
                setSidebarOpen(false)
              }
            />


            {/* ======================================================
                PANEL
            ====================================================== */}

            <TopBarSidePanel
              key="panel"

              variants={
                panelVariants
              }

              initial="hidden"
              animate="visible"
              exit="exit"
            >

              {/* ==================================================
                  HEADER
              ================================================== */}

              <TopBarSideHeader>

                <TopBarSideLogoWrap>

                  <TopBarAvatar
                    src={
                      resumeData.assets
                        .profileImage
                    }
                    alt={
                      resumeData.name
                    }
                  />

                  <TopBarSideName>
                    {
                      resumeData.shortName
                    }
                  </TopBarSideName>

                </TopBarSideLogoWrap>


                <TopBarSideCloseBtn
                  onClick={() =>
                    setSidebarOpen(false)
                  }

                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <CloseIcon />
                </TopBarSideCloseBtn>

              </TopBarSideHeader>


              {/* ==================================================
                  NAVIGATION
              ================================================== */}

              <TopBarSideNav>

                {NAV_ITEMS.map(
                  ({ id, label }, i) => {

                    const isActive =
                      activeLink === id;


                    return (
                      <TopBarSideNavBtn
                        key={id}

                        $active={
                          isActive
                        }

                        onClick={() =>
                          scrollTo(id)
                        }

                        custom={i}

                        variants={
                          itemVariants
                        }

                        initial="hidden"
                        animate="visible"

                        whileTap={{
                          scale: 0.97,
                        }}
                      >

                        <AnimatePresence>

                          {isActive && (
                            <TopBarSideActiveBg
                              key="active-bg"

                              layoutId={
                                'sidebar-active-bg'
                              }

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
                                type: 'spring',
                                stiffness: 380,
                                damping: 35,
                              }}
                            />
                          )}

                        </AnimatePresence>


                        <TopBarSideNavLabel>
                          {label}
                        </TopBarSideNavLabel>


                        <TopBarSideIndex
                          $active={
                            isActive
                          }
                        >
                          {String(
                            i + 1
                          ).padStart(
                            2,
                            '0'
                          )}
                        </TopBarSideIndex>

                      </TopBarSideNavBtn>
                    );
                  }
                )}


                {/* =================================================
                    MOBILE COURAGE

                    ONLY EXISTS INSIDE THE SIDEBAR.

                    Since the desktop button above is rendered
                    only when !isMobile, there is never a
                    duplicate Courage button.
                ================================================== */}

                {isMobile && (
                  <motion.button
                    type="button"

                    onClick={
                      goToCourage
                    }

                    initial={{
                      opacity: 0,
                      x: 18,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    transition={{
                      delay:
                        NAV_ITEMS.length *
                          0.055 +
                        0.12,

                      duration: 0.42,

                      ease: [
                        0.16,
                        1,
                        0.3,
                        1,
                      ],
                    }}

                    whileHover={{
                      x: 2,
                    }}

                    whileTap={{
                      scale: 0.97,
                    }}

                    aria-label="Courage"

                    style={{
                      width: '100%',

                      display: 'flex',

                      alignItems:
                        'center',

                      justifyContent:
                        'space-between',

                      position:
                        'relative',

                      padding:
                        '15px 18px',

                      marginTop:
                        '8px',

                      border:
                        '1px solid rgba(113, 183, 255, 0.22)',

                      borderRadius:
                        '14px',

                      background:
                        'linear-gradient(135deg, rgba(34, 74, 125, 0.16), rgba(8, 18, 34, 0.28))',

                      color:
                        'rgba(235, 244, 255, 0.78)',

                      cursor:
                        'pointer',

                      fontFamily:
                        'Inter, system-ui, sans-serif',

                      boxSizing:
                        'border-box',

                      backdropFilter:
                        'blur(12px)',

                      WebkitBackdropFilter:
                        'blur(12px)',
                    }}
                  >

                    <span
                      style={{
                        display:
                          'flex',

                        alignItems:
                          'center',

                        gap: '12px',

                        position:
                          'relative',

                        zIndex: 2,
                      }}
                    >

                      <FiStar
                        size={17}
                        color="#72b7ff"
                      />


                      <span
                        style={{
                          fontSize:
                            '13px',

                          fontWeight:
                            500,

                          letterSpacing:
                            '0.08em',

                          textTransform:
                            'uppercase',
                        }}
                      >
                        Courage
                      </span>

                    </span>


                    <span
                      style={{
                        position:
                          'relative',

                        zIndex: 2,

                        fontSize:
                          '10px',

                        letterSpacing:
                          '0.12em',

                        color:
                          'rgba(235, 244, 255, 0.34)',
                      }}
                    >
                      ✦
                    </span>

                  </motion.button>
                )}

              </TopBarSideNav>


              {/* ==================================================
                  FOOTER
              ================================================== */}

              <TopBarSideFooter>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay:
                      NAV_ITEMS.length *
                        0.055 +
                      0.2,

                    duration: 0.4,

                    ease: [
                      0.16,
                      1,
                      0.3,
                      1,
                    ],
                  }}
                >

                  <TopBarThemeRow
                    onClick={toggle}

                    whileTap={{
                      scale: 0.98,
                    }}
                  >

                    {isDark
                      ? <SunIcon />
                      : <MoonIcon />
                    }


                    <TopBarThemeLabel>
                      {
                        isDark
                          ? 'Switch to Light'
                          : 'Switch to Dark'
                      }
                    </TopBarThemeLabel>


                    <TopBarThemeChip>
                      {
                        isDark
                          ? 'Light'
                          : 'Dark'
                      }
                    </TopBarThemeChip>

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


/* ================================================================
   ANIMATION VARIANTS
================================================================ */

const overlayVariants = {

  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.28,

      ease: [
        0.16,
        1,
        0.3,
        1,
      ],
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.24,

      ease: [
        0.16,
        1,
        0.3,
        1,
      ],
    },
  },
};


const panelVariants = {

  hidden: {
    x: '100%',
  },

  visible: {
    x: 0,

    transition: {
      type: 'spring',

      stiffness: 300,
      damping: 32,
      mass: 0.85,
    },
  },

  exit: {
    x: '100%',

    transition: {
      type: 'spring',

      stiffness: 340,
      damping: 36,
      mass: 0.8,
    },
  },
};


const itemVariants = {

  hidden: {
    opacity: 0,
    x: 18,
  },

  visible: (i) => ({
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.38,

      delay:
        i * 0.055,

      ease: [
        0.16,
        1,
        0.3,
        1,
      ],
    },
  }),
};


export default TopBar;