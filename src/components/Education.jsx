import React, { useMemo } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Color palette
const colors = {
    richBlack: '#0d1b2a',
    oxfordBlue: '#1b263b',
    yinmnBlue: '#415a77',
    silverLakeBlue: '#778da9',
    platinum: '#e0e1dd',
};

// Global styles to disable animation
const GlobalStyle = createGlobalStyle`
    .vertical-timeline-element {
        transition: none !important;
    }

    .vertical-timeline-element-content {
        transition: none !important;
        animation: none !important;
    }

    .vertical-timeline-element-content-arrow {
        transition: none !important;
        animation: none !important;
    }
`;

const EducationContainer = styled.div`
    color: ${colors.platinum};
    padding: 1.5rem 1rem;
    
    @media (min-width: 768px) {
        padding: 2rem 1.5rem;
    }

    @media (min-width: 1024px) {
        padding: 3rem 2rem;
    }
`;

// Styled components
const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
    color: ${colors.platinum};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.75rem;
    }
`;

const NumberIcon = styled.div`
    background: ${colors.yinmnBlue};
    color: ${colors.platinum};
    border-radius: 50%;
    font-size: 2.5rem; // Reduced font size
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; // Reduced width
    height: 100%; // Reduced height
    font-family: "Montserrat", sans-serif;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    transition: background 0.4s ease, transform 0.4s ease;

    &:hover {
        background: ${colors.richBlack};
        transform: rotate(360deg) scale(1.1); // Slightly smaller scale
    }

    @media (max-width: 1024px) {
        font-size: 2rem;
        width: 100%; // Reduced width
    height: 100%; // Reduced height
    }

    @media (max-width: 768px) {
        font-size: 1.75rem;
        width: 100%; // Reduced width
    height: 100%; // Reduced height
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
        width: 100%; // Reduced width
    height: 100%; // Reduced height
    }
`;

const Date = styled.div`
    color: ${colors.platinum};
    font-size: 1.1rem; // Reduced font size
    font-weight: bold;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid ${colors.silverLakeBlue};
    padding-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

const TimelineContent = styled.div`
    background: linear-gradient(135deg, ${colors.oxfordBlue} 30%, ${colors.yinmnBlue} 100%);
    color: ${colors.platinum};
    padding: 1rem; // Reduced padding
    border-radius: 20px; // Reduced border radius
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    border: 1px solid ${colors.silverLakeBlue};
    position: relative;
display:flex;
flex-direction:column;
gap:5px;
    &:before {
        content: '';
        position: absolute;
        top: -15px; // Adjusted for smaller content
        left: -15px; // Adjusted for smaller content
        width: calc(100% + 30px);
        height: calc(100% + 30px);
        background: linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 100%);
        border-radius: 20px;
        z-index: -1;
    }

    h3 {
        font-size: 1.5rem; // Reduced font size
        margin-bottom: 0.5rem;
        font-weight: 700;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

        @media (max-width: 768px) {
            font-size: 1.4rem;
        }

        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
    }

    h5 {
        font-size: 1.2rem; // Reduced font size
        margin-bottom: 1rem;
        font-weight: 500;

        @media (max-width: 768px) {
            font-size: 1.1rem;
        }

        @media (max-width: 480px) {
            font-size: 1rem;
        }
    }

    p {
        margin: 0;
        line-height: 1.5; // Adjusted line height
    }

    &:hover {
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.6);
    }
`;

const GPAWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
`;

const GPADot = styled.div`
    width: 15px; // Reduced size
    height: 15px; // Reduced size
    border-radius: 50%;
    background: ${props => props.isFilled ? colors.platinum : colors.yinmnBlue};
    margin-right: 0.5rem;
    transition: background 0.4s ease;
    
    @media (max-width: 480px) {
        width: 8px; // Reduced size
        height: 8px; // Reduced size
    }
`;

const GPAText = styled.span`
    color: ${colors.platinum};
    font-size: 0.9rem; // Reduced font size
`;

const EducationTitle = styled.span`
  font-size: 2rem;  // Larger for the main title
  font-weight: bold;
  color: #ffffff;
`;

const EducationLocation = styled.span`
  font-size: 1.2rem;  // Medium size for location
  font-weight: 500;
  color: #c4c4c4;
`;

const Description = styled.span`
  font-size: 1rem;  // Standard font size for the description
  color: #d3d3d3;
`;



// Function to determine the number of filled dots based on GPA
const getFilledDots = (gpa) => {
    if (typeof gpa === 'number') {
        return Math.round(gpa);
    } else if (gpa.includes('%')) {
        return Math.round(parseFloat(gpa) / 10);
    }
    return 0;
};

// Education Component
const Education = () => {
    const educationData = useMemo(() => [
        {
            id: 1,
            title: 'SSC',
            location: 'Keshava Reddy High School',
            date: '2017-2018',
            description: 'Completed secondary school with outstanding performance.',
            gpa: 10.00
        },
        {
            id: 2,
            title: 'Intermediate (MPC)',
            location: 'Tirumala Junior College, Katheru',
            date: '2018-2020',
            description: 'Completed intermediate with a focus on Mathematics, Physics, and Chemistry.',
            gpa: 8.1
        },
        {
            id: 3,
            title: 'B.Tech (Computer Science and Engineering)',
            location: 'Adikavi Nannaya University, Rajanagaram',
            date: '2020-2024',
            description: 'Pursuing a Bachelor\'s degree in Computer Science with various projects and internships.',
            gpa: 8.8
        },
    ], []);

    return (
        <EducationContainer>
            <GlobalStyle />
            <Title>Education</Title>
            <VerticalTimeline>
                {educationData.map((education) => (
                    <VerticalTimelineElement
                        key={education.id}
                        date={education.date}
                        contentStyle={{ background: 'none', color: colors.platinum }}
                        contentArrowStyle={{ borderRight: `7px solid ${colors.oxfordBlue}` }}
                        iconStyle={{ background: colors.yinmnBlue, color: colors.platinum }}
                        icon={<NumberIcon>{education.id}</NumberIcon>}
                    >
                        <TimelineContent>
                        <EducationTitle>{education.title}</EducationTitle>
              <EducationLocation>{education.location}</EducationLocation>
              <Date>{education.date}</Date>
              <Description>{education.description}</Description>
                            <GPAWrapper>
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <GPADot key={index} isFilled={index < getFilledDots(education.gpa)} />
                                ))}
                                <GPAText>GPA: {education.gpa}</GPAText>
                            </GPAWrapper>
                        </TimelineContent>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </EducationContainer>
    );
};

export default Education;
