// src/App.js
import React from 'react';
import styled from 'styled-components';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Experience from './components/Experience';
import Chatbot from './components/Chatbot';
import Tabs from './components/Tabs';
import CustomCursor from './components/CustomCursor';
import AboutMe from './components/AboutMe';

const AppContainer = styled.div`
    font-family: Arial, sans-serif;
`;

const App = () => (
    <AppContainer>
        {/* <CustomCursor/> */}
        <TopBar />
        <Hero />
        <AboutMe/>
        <Chatbot />
        <Skills />
        <Tabs/>
        {/* <Certificates />
        <Education />
        <Experience />
        <Projects /> */}
        <Connect />
        <Footer />
    </AppContainer>
);

export default App;
