import React, { useState, useEffect } from 'react';
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
          <LogoText scrolled={scrolled}>My Portfolio</LogoText>
          <LogoImage src={PortfolioImage} alt="Portfolio Logo" scrolled={scrolled} />
        </Logo>
        <NavLinks>
          <NavLink className={activeLink === 'home' ? 'active' : ''} onClick={handleNavClick('home')} href="#home">Home</NavLink>
          <NavLink className={activeLink === 'skills' ? 'active' : ''} onClick={handleNavClick('skills')} href="#skills">Skills</NavLink>
          <NavLink className={activeLink === 'more' ? 'active' : ''} onClick={handleNavClick('more')} href="#more">More</NavLink> {/* Update here */}
          <NavLink className={activeLink === 'connect' ? 'active' : ''} onClick={handleNavClick('connect')} href="#connect">Let's Connect</NavLink>
        </NavLinks>
        <MenuToggle onClick={toggleSidebar}>
          ☰
        </MenuToggle>
      </TopBarContainer>
      <Sidebar open={sidebarOpen}>
        <CloseButton onClick={closeSidebar}>&times;</CloseButton>
        <SidebarLink className={activeLink === 'home' ? 'active' : ''} onClick={handleNavClick('home')} href="#home">Home</SidebarLink>
        <SidebarLink className={activeLink === 'skills' ? 'active' : ''} onClick={handleNavClick('skills')} href="#skills">Skills</SidebarLink>
        <SidebarLink className={activeLink === 'more' ? 'active' : ''} onClick={handleNavClick('more')} href="#more">More</SidebarLink> {/* Update here */}
        <SidebarLink className={activeLink === 'connect' ? 'active' : ''} onClick={handleNavClick('connect')} href="#connect">Let's Connect</SidebarLink>
      </Sidebar>
    </>
  );
}

export default TopBar;
