// src/components/Footer.js
import React, { useState } from 'react';
import styled from 'styled-components';

const colors = {
    richBlack: '#0d1b2a',
    oxfordBlue: '#1b263b',
    yinmnBlue: '#415a77',
    silverLakeBlue: '#778da9',
    platinum: '#e0e1dd',
};

const FooterContainer = styled.footer`
    background-color: ${colors.richBlack};
    color: ${colors.platinum};
    padding: 40px 20px;
    border-top: 4px solid ${colors.yinmnBlue};
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 30px 15px;
    }

    @media (max-width: 480px) {
        padding: 20px 10px;
    }
`;

const FooterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Section = styled.div`
    min-width: 200px;
    justify-content:center;
    align-items:center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @media (max-width: 768px) {
        border-bottom: 1px solid ${colors.silverLakeBlue};
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
`;

const SectionTitle = styled.h3`
    color: ${colors.yinmnBlue};
    margin-bottom: 15px;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }

    &:before {
        content: '';
        display: block;
        width: 50%;
        height: 2px;
        background: ${colors.yinmnBlue};
        position: absolute;
        bottom: -5px;
        left: 0;
        transition: width 0.3s ease;
    }

    &:hover:before {
        width: 100%;
    }
`;

const NavLink = styled.a`
    color: ${colors.platinum};
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: ${colors.yinmnBlue};
        text-decoration: underline;
    }
`;

const AccordionContainer = styled.div`
    @media (min-width: 769px) {
        display: none;
    }
`;

const AccordionButton = styled.div`
    background: ${colors.yinmnBlue};
    color: ${colors.platinum};
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
        background: ${colors.silverLakeBlue};
    }
`;

const AccordionContent = styled.div`
    max-height: ${props => (props.isOpen ? '300px' : '0')};
    overflow: hidden;
    background: ${colors.oxfordBlue};
    border-radius: 5px;
    padding: ${props => (props.isOpen ? '10px' : '0')};
    transition: max-height 0.5s ease, padding 0.5s ease;
`;

const Footer = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <FooterContainer>
            <FooterContent>
                <Section>
                    <SectionTitle>My Details</SectionTitle>
                    <div>Name: Your Name</div>
                    <div>Location: Your City, Country</div>
                </Section>
                <Section>
                    <SectionTitle>Topics</SectionTitle>
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                </Section>
                <Section>
                    <SectionTitle>Connect</SectionTitle>
                    <NavLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</NavLink>
                    <NavLink href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</NavLink>
                    <NavLink href="#connect">Let's Connect</NavLink>
                </Section>
            </FooterContent>
            <AccordionContainer>
                <AccordionButton onClick={() => toggleSection('details')}>
                    My Details
                </AccordionButton>
                <AccordionContent isOpen={openSection === 'details'}>
                    <div>Name: Your Name</div>
                    <div>Location: Your City, Country</div>
                </AccordionContent>
                
                <AccordionButton onClick={() => toggleSection('topics')}>
                    Topics
                </AccordionButton>
                <AccordionContent isOpen={openSection === 'topics'}>
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                </AccordionContent>

                <AccordionButton onClick={() => toggleSection('connect')}>
                    Connect
                </AccordionButton>
                <AccordionContent isOpen={openSection === 'connect'}>
                    <NavLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</NavLink>
                    <NavLink href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</NavLink>
                    <NavLink href="#connect">Let's Connect</NavLink>
                </AccordionContent>
            </AccordionContainer>
        </FooterContainer>
    );
};

export default Footer;
