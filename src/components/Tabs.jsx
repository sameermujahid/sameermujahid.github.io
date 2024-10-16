import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Certificates from './Certificates';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import { FaCertificate, FaGraduationCap, FaBriefcase, FaProjectDiagram } from 'react-icons/fa'; // Example icons

// Container for the tabs and content
const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

// Tab list container styling
const TabList = styled.div`
  position: sticky;
  top: 75px;
  display: flex;
  justify-content: center;
  background-color: #1b263b;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

// Individual Tab Button styling with animated border
const TabButton = styled(motion.button)`
  position: relative;
  background: none;
  border: none;
  color: #e0e1dd;
  font-size: 1rem;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #778da9;
  }

  &.active {
    color: #e0e1dd;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #415a77; /* Border color */
    border-radius: 50px; /* Slightly rounded corners */
    transform: scale(0); /* Start off as 0 scale */
    transition: transform 0.4s ease-in-out; /* Animation for scale */
    z-index: -1; /* Behind the text */
  }

  &.active:after {
    transform: scale(1); /* Scale to cover the button */
  }

  @media (max-width: 768px) {
    span {
      display: none; // Hide text on mobile
    }
  }
`;

// Tab content area styling with smooth transition and shadow effects
const TabContent = styled(motion.div)`
  width: 100%;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  transform: translateY(-10px);

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Certificates');

  // Function to handle hash change
  const handleHashChange = () => {
    const hash = window.location.hash.replace('#', '');
    if (['Certificates', 'Education', 'Experience', 'Projects'].includes(hash)) {
      setActiveTab(hash);
    } else {
      setActiveTab('Certificates'); // Default tab
    }
  };

  useEffect(() => {
    // Set the active tab based on the hash when the component mounts
    handleHashChange();
    // Add event listener to handle hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <TabsContainer id="more">
      <TabList>
        <TabButton
          className={activeTab === 'Certificates' ? 'active' : ''}
          onClick={() => setActiveTab('Certificates')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaCertificate size={24} />
          <span>Certificates</span>
        </TabButton>
        <TabButton
          className={activeTab === 'Education' ? 'active' : ''}
          onClick={() => setActiveTab('Education')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGraduationCap size={24} />
          <span>Education</span>
        </TabButton>
        <TabButton
          className={activeTab === 'Experience' ? 'active' : ''}
          onClick={() => setActiveTab('Experience')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaBriefcase size={24} />
          <span>Experience</span>
        </TabButton>
        <TabButton
          className={activeTab === 'Projects' ? 'active' : ''}
          onClick={() => setActiveTab('Projects')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaProjectDiagram size={24} />
          <span>Projects</span>
        </TabButton>
      </TabList>

      <AnimatePresence wait>
        {activeTab === 'Certificates' && (
          <TabContent
            key="Certificates"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Certificates />
          </TabContent>
        )}
        {activeTab === 'Education' && (
          <TabContent
            key="Education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Education />
          </TabContent>
        )}
        {activeTab === 'Experience' && (
          <TabContent
            key="Experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Experience />
          </TabContent>
        )}
        {activeTab === 'Projects' && (
          <TabContent
            key="Projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Projects />
          </TabContent>
        )}
      </AnimatePresence>
    </TabsContainer>
  );
};

export default Tabs;
