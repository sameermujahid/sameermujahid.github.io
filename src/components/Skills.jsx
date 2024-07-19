import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import skill images
import python from '../assets/python.webp';
import skill2 from '../assets/skill2.jpg';
import skill3 from '../assets/skill3.jpg';
import skill4 from '../assets/skill4.jpg';
import skill5 from '../assets/skill5.jpg';
import skill6 from '../assets/skill6.jpg';

const colors = {
    primary: '#1b263b',
    secondary: '#778da9',
    accent: '#e0e1dd',
};

const SkillsContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 50px 20px;
    text-align: center;
    color: ${colors.accent};
    position: relative;
    animation: slide-up 1s ease forwards;
    opacity: 0;

    @keyframes slide-up {
        0% {
            transform: translateY(50px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;
const SectionWrapper = styled.div`
    border: 2px solid ${colors.secondary};
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 30px;

    @media (max-width: 1024px) {
        padding: 15px;
        margin-bottom: 25px;
    }

    @media (max-width: 768px) {
        padding: 10px;
        margin-bottom: 20px;
    }

    @media (max-width: 425px) {
        padding: 10px;
        margin-bottom: 15px;
    }
`;

const SectionTitle = styled.h3`
    font-size: 1.5em;
    margin-bottom: 20px;
    color: ${colors.secondary};

    @media (max-width: 768px) {
        font-size: 1.2em;
    }

    @media (max-width: 425px) {
        font-size: 1em;
    }
`;

const SkillsGrid = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const SkillContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 125px;
    height: 125px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 1024px) {
        max-width: 110px;
        height: 110px;
    }

    @media (max-width: 768px) {
        max-width: 100px;
        height: 100px;
    }

    @media (max-width: 425px) {
        max-width: 90px;
        height: 90px;
    }
`;

const SkillImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`;

const ProgressBarContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProgressBar = styled.svg`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`;

const Circle = styled.circle`
    fill: none;
    stroke-width: 10px;
    stroke-linecap: round;
    stroke-dasharray: ${({ circumference }) => circumference};
    stroke-dashoffset: ${({ offset }) => offset};
    stroke: ${({ color }) => color};
`;

const InnerCircle = styled.circle`
    fill: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
    opacity: ${({ hovered }) => (hovered ? 1 : 0)};
`;

const PercentageText = styled.text`
    font-size: 2em;
    fill: ${colors.accent};
    transition: opacity 0.3s ease;
    opacity: ${({ hovered }) => (hovered ? 1 : 0)};
    z-index: 100;
    font-weight: 900;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }

    @media (max-width: 425px) {
        font-size: 1.2em;
    }
`;

const calculateCircumference = radius => 2 * Math.PI * radius;

const skillsData = {
    programmingLanguages: [
        { id: 1, image: python, title: 'Python', percentage: 80, color: '#415a77' },
        { id: 2, image: skill2, title: 'C', percentage: 70, color: '#415a77' },
        { id: 3, image: skill3, title: 'JAVA Basics', percentage: 60, color: '#415a77' },
        { id: 4, image: skill4, title: 'PHP', percentage: 65, color: '#415a77' },
        { id: 5, image: skill5, title: 'Ruby', percentage: 75, color: '#415a77' },
        { id: 6, image: skill6, title: 'JavaScript', percentage: 85, color: '#415a77' },
    ],
    platforms: [
        { id: 7, image: skill4, title: 'Google', percentage: 85, color: '#415a77' },
        { id: 8, image: skill5, title: 'AWS', percentage: 75, color: '#415a77' },
        { id: 9, image: skill6, title: 'Azure', percentage: 70, color: '#415a77' },
    ],
    database: [
        { id: 10, image: skill2, title: 'SQL', percentage: 80, color: '#415a77' },
        { id: 11, image: skill3, title: 'MySQL', percentage: 75, color: '#415a77' },
        { id: 12, image: skill4, title: 'PostgreSQL', percentage: 70, color: '#415a77' },
    ],
    presentation: [
        { id: 13, image: skill5, title: 'MS Excel', percentage: 70, color: '#415a77' },
        { id: 14, image: skill6, title: 'MS Word', percentage: 80, color: '#415a77' },
        { id: 15, image: skill2, title: 'MS PowerPoint', percentage: 85, color: '#415a77' },
    ],
    webFundamentals: [
        { id: 16, image: skill3, title: 'HTML', percentage: 90, color: '#415a77' },
        { id: 17, image: skill4, title: 'CSS', percentage: 85, color: '#415a77' },
        { id: 18, image: skill5, title: 'React JS', percentage: 80, color: '#415a77' },
    ],
    framework: [
        { id: 19, image: skill6, title: 'Django Restframework', percentage: 80, color: '#415a77' },
        { id: 20, image: python, title: 'Flask', percentage: 70, color: '#415a77' },
        { id: 21, image: skill2, title: 'Express.js', percentage: 75, color: '#415a77' },
    ],
    additionalSkills: [
        { id: 22, image: skill3, title: 'Jira Management', percentage: 70, color: '#415a77' },
        { id: 23, image: skill4, title: 'Keka', percentage: 60, color: '#415a77' },
        { id: 24, image: skill5, title: 'MS Teams', percentage: 75, color: '#415a77' },
    ],
};

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [currentSection, setCurrentSection] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'slide-up 1s forwards ease';
                        entry.target.style.opacity = 1;
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        const skillsContainer = document.getElementById('skills');
        if (skillsContainer) {
            observer.observe(skillsContainer);
        }

        return () => {
            if (skillsContainer) {
                observer.unobserve(skillsContainer);
            }
        };
    }, []);

    const handleSkillHover = skillId => setHoveredSkill(skillId);
    const handleSkillLeave = () => setHoveredSkill(null);

    const formatTitle = title => title.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

    const renderSkillsGrid = (title, skills) => (
        <SectionWrapper key={title}>
            <SectionTitle>{formatTitle(title)}</SectionTitle>
            <SkillsGrid>
                {skills.map(skill => (
                    <ProgressBarContainer
                        key={skill.id}
                        onMouseEnter={() => handleSkillHover(skill.id)}
                        onMouseLeave={handleSkillLeave}
                    >
                        <SkillContainer>
                            <SkillImage src={skill.image} alt={skill.title} />
                            <ProgressBar viewBox="0 0 150 150">
                                <Circle
                                    cx="75"
                                    cy="75"
                                    r="70"
                                    circumference={calculateCircumference(70)}
                                    offset={
                                        calculateCircumference(70) - (calculateCircumference(70) * skill.percentage) / 100
                                    }
                                    color={skill.color}
                                />
                                <InnerCircle cx="75" cy="75" r="50" hovered={hoveredSkill === skill.id} />
                                <PercentageText
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    hovered={hoveredSkill === skill.id}
                                >
                                    {skill.percentage}%
                                </PercentageText>
                            </ProgressBar>
                        </SkillContainer>
                    </ProgressBarContainer>
                ))}
            </SkillsGrid>
        </SectionWrapper>
    );

    const handlePrevious = () => {
        setCurrentSection(prev => (prev > 0 ? prev - 1 : Object.keys(skillsData).length - 1));
    };

    const handleNext = () => {
        setCurrentSection(prev => (prev < Object.keys(skillsData).length - 1 ? prev + 1 : 0));
    };

    const LeftArrowSVG = (
        <svg fill={colors.accent} height="24" width="24" viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg">
            <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394 c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"/>
        </svg>
    );

    const RightArrowSVG = (
        <svg fill={colors.accent} height="24" width="24" viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg">
            <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605 l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396 l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998 c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"/>
        </svg>
    );

    return (
        <SkillsContainer id="skills">
        <Title>Skills</Title>
        <div className="desktop-tablet-grid">
            {Object.keys(skillsData).map((category, index) => renderSkillsGrid(category, skillsData[category]))}
        </div>
        <div className="mobile-slider">
            <button className="arrow-button left" onClick={handlePrevious}>
                <svg fill={colors.accent} height="24" width="24" viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg">
                    <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394 c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998 c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0 c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"/>
                </svg>
            </button>
            <button className="arrow-button right" onClick={handleNext}>
                <svg fill={colors.accent} height="24" width="24" viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg">
                    <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M225.606,175.605 l-80,80.002C142.678,258.535,138.839,260,135,260s-7.678-1.464-10.606-4.394c-5.858-5.857-5.858-15.355,0-21.213l69.393-69.396 l-69.393-69.392c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.858,15.355-5.858,21.213,0l80,79.998 c2.814,2.813,4.394,6.628,4.394,10.606C230,168.976,228.42,172.792,225.606,175.605z"/>
                </svg>
            </button>
            <div className="slider-container">
                {Object.keys(skillsData).map((category, index) => (
                    <div key={category} className={`slider-item ${index === currentSection ? 'active' : ''}`}>
                        {renderSkillsGrid(category, skillsData[category])}
                    </div>
                ))}
            </div>
            <div className="indicators">
                {Object.keys(skillsData).map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentSection ? 'active' : ''}`}
                        onClick={() => setCurrentSection(index)}
                    />
                ))}
            </div>
        </div>
        <style jsx>{`
            .desktop-tablet-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 30px;

                @media (max-width: 1024px) {
                    grid-template-columns: repeat(2, 1fr);
                }

                @media (max-width: 768px) {
                    display: none;
                }
            }

            .mobile-slider {
                display: none;

                @media (max-width: 768px) {
                    display: block;
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                }
            }

            .slider-container {
                display: flex;
                transition: transform 0.5s ease;
                transform: translateX(-${currentSection * 100}%);
                align-items:center;
            }

            .slider-item {
                min-width: 100%;
                box-sizing: border-box;
            }

            .arrow-button {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: transparent;
                border: none;
                cursor: pointer;
                z-index: 10;
                transition: opacity 0.3s ease;
            }

            .arrow-button.left {
                left: 10px;
            }

            .arrow-button.right {
                right: 10px;
            }

            .indicators {
                display: flex;
                justify-content: center;
                margin-top: 20px;
            }

            .indicator {
                width: 12px;
                height: 12px;
                background: ${colors.indicatorInactive};
                border-radius: 50%;
                margin: 0 5px;
                cursor: pointer;
                transition: background 0.3s ease;
            }

            .indicator.active {
                background: ${colors.indicatorActive};
            }
        `}</style>
    </SkillsContainer>
);
};

export default Skills;
