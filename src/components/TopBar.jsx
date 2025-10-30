import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TopBarContainer,
  Logo,
  LogoText,
  LogoImage,
  NavLinks,
  NavLink,
  Sidebar,
  SidebarLink,
  MenuToggle,
  CloseButton
} from '../styles'; // Import styles from the new file
import PortfolioImage from '../assets/profile.jpg';

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleSetActiveLink = () => {
      const sections = ['home', 'skills', 'more', 'connect']; // Update here
      const scrollPosition = window.scrollY;
      const buffer = window.innerHeight / 2;

      let currentActive = '';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.clientHeight;
          if (
            scrollPosition >= elementTop - buffer &&
            scrollPosition < elementTop + elementHeight - buffer
          ) {
            currentActive = section;
          }
        }
      });
      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleSetActiveLink);
    return () => window.removeEventListener('scroll', handleSetActiveLink);
  }, []);

  const handleNavClick = (sectionId) => (event) => {
    event.preventDefault();
    setActiveLink(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setSidebarOpen(false); // Close sidebar on navigation
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <TopBarContainer scrolled={scrolled}>
        <Logo>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LogoText scrolled={scrolled}>My Portfolio</LogoText>
            <LogoImage 
              src={PortfolioImage} 
              alt="Portfolio Logo" 
              scrolled={scrolled}
              as={motion.img}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </Logo>
        <NavLinks>
          {['home', 'skills', 'more', 'connect'].map((link) => (
            <NavLink
              key={link}
              className={activeLink === link ? 'active' : ''}
              onClick={handleNavClick(link)}
              href={`#${link}`}
              as={motion.a}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link === 'connect' ? "Let's Connect" : link.charAt(0).toUpperCase() + link.slice(1)}
            </NavLink>
          ))}
        </NavLinks>
        <MenuToggle 
          onClick={toggleSidebar}
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ☰
        </MenuToggle>
      </TopBarContainer>
      <AnimatePresence>
        {sidebarOpen && (
          <Sidebar 
            open={sidebarOpen}
            as={motion.div}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <CloseButton 
              onClick={closeSidebar}
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              &times;
            </CloseButton>
            {['home', 'skills', 'more', 'connect'].map((link) => (
              <SidebarLink
                key={link}
                className={activeLink === link ? 'active' : ''}
                onClick={handleNavClick(link)}
                href={`#${link}`}
                as={motion.a}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link === 'connect' ? "Let's Connect" : link.charAt(0).toUpperCase() + link.slice(1)}
              </SidebarLink>
            ))}
          </Sidebar>
        )}
      </AnimatePresence>
    </>
  );
}

export default TopBar;
