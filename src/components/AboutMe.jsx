import React from 'react';
import styled from 'styled-components';
import aboutImage from '../assets/about5.jpg';
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Icon } from '../styles';

const colors = {
    platinum: '#e0e1dd',
};

const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
    color: ${colors.platinum};
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

const OuterSection = styled.section`
    padding: 4rem 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 3rem 2rem;
    }

    @media (max-width: 480px) {
        padding: 2rem 1rem;
    }
`;

const AboutMeSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 40px;
    background: linear-gradient(90deg, #3b5c8e, #1b263b, #0a0d12);
    color: ${colors.platinum};
    border-radius: 40px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
    max-width: 1200px;
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        padding: 30px 20px;
            background: linear-gradient(180deg, #3b5c8e, #1b263b, #0a0d12);

    }

    @media (max-width: 480px) {
        padding: 20px 10px;
            border-radius: 20px;
                background: linear-gradient(180deg, #3b5c8e, #1b263b, #0a0d12);


    }
`;
const ImageContainer = styled.div`
    flex: 1;
    padding: 20px;

    img {
        width: 100%;
        max-height: 300px; /* Adjusted for mobile responsiveness */
        border-radius: 30px;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease, filter 0.5s ease; /* Add filter transition */
        object-fit: cover;
        filter: grayscale(100%); /* Start with black and white */

        &:hover {
            transform: scale(1.02);
            filter: grayscale(0%); /* Transition to color on hover */
        }
    }

    @media (max-width: 768px) {
        padding: 15px;

        img {
            max-height: 250px; /* Smaller image height for tablets */
                    border-radius: 20px;

        }
    }

    @media (max-width: 480px) {
        padding: 10px;
        width: 100%;
        
        img {
            max-height: 200px; /* Even smaller for mobile */
        }
    }
`;

const TextContainer = styled.div`
    flex: 1;
    padding: 20px;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 50px;
            height: 5px;
            background-color: ${colors.platinum};
            border-radius: 5px;
            opacity: 0.7;
        }

        @media (max-width: 768px) {
            font-size: 2rem; /* Smaller heading for tablets */
        }

        @media (max-width: 480px) {
            font-size: 1.5rem; /* Even smaller heading for mobile */
        }
    }

    p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 15px;

        @media (max-width: 768px) {
            font-size: 1rem; /* Smaller paragraph text for tablets */
        }

        @media (max-width: 480px) {
            font-size: 0.9rem; /* Even smaller paragraph text for mobile */
        }
    }
`;

const AboutMe = () => {
    return (
        <OuterSection id="about">
            <Title>About Me</Title>
            <AboutMeSection>
                <ImageContainer>
                    <img src={aboutImage} alt="About Me" />
                </ImageContainer>
                <TextContainer>
                    <p>
                        Hello! I’m a passionate and dedicated individual with a keen interest in technology and innovation. My journey in the world of data science and software development has equipped me with a strong skill set in various programming languages and frameworks. I thrive in collaborative environments and enjoy solving complex problems through creative solutions.
                    </p>
                    <p>
                        In my free time, I love exploring new technologies, working on personal projects, I am always eager to learn and grow, both personally and professionally.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <Icon href="https://www.linkedin.com/in/shaik-sameer-mujahid/" target="_blank" aria-label="LinkedIn Profile">
                            <FiLinkedin />
                        </Icon>
                        <Icon href="https://github.com/sameermujahid" target="_blank" aria-label="GitHub Profile">
                            <FiGithub />
                        </Icon>
                        <Icon href="https://www.instagram.com/sameer.mujahid/" target="_blank" aria-label="Instagram Profile">
                            <IoLogoInstagram />
                        </Icon>
                        <Icon href="https://x.com/sameer__mujahid" target="_blank" aria-label="Twitter Profile">
                            <RiTwitterXFill />
                        </Icon>
                    </div>
                </TextContainer>
            </AboutMeSection>
        </OuterSection>
    );
};

export default AboutMe;
