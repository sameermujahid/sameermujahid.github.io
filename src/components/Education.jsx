import React, { useMemo } from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Color palette
const colors = {
    richBlack: '#0d1b2aff',
    oxfordBlue: '#1b263bff',
    yinmnBlue: '#415a77ff',
    silverLakeBlue: '#778da9ff',
    platinum: '#e0e1ddff',
};

// Styled components
const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
    color: ${colors.platinum};
    margin-bottom: 2.5rem;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

const TimelineContent = styled.div`
    background: linear-gradient(135deg, ${colors.oxfordBlue} 30%, ${colors.yinmnBlue} 100%);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4), 0 0.75rem 2rem rgba(0, 0, 0, 0.3);
    padding: 2rem;
    border-radius: 20px;
    color: ${colors.platinum};
    font-family: "Montserrat", sans-serif;
    position: relative;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5), 0 1.5rem 3rem rgba(0, 0, 0, 0.4);
    }

    h3 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;

        @media (max-width: 768px) {
            font-size: 1.6rem;
        }

        @media (max-width: 480px) {
            font-size: 1.4rem;
        }
    }

    h5 {
        font-size: 1.4rem;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
            font-size: 1.2rem;
        }

        @media (max-width: 480px) {
            font-size: 1rem;
        }
    }

    p {
        margin: 1rem 0;
        line-height: 1.8;
    }
`;

const Date = styled.div`
    color: #ffffff; /* White color */
    font-size: 1.1rem;
    font-weight: bold; /* Bold text */
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

const Button = styled.a`
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    border-radius: 30px;
    color: ${colors.platinum};
    background-color: ${props => props.primary ? colors.yinmnBlue : colors.silverLakeBlue};
    font-size: 1rem;
    display: inline-block;
    margin-top: 1rem;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: ${props => props.primary ? '#0ac593' : '#f3bc3c'};
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        padding: 0.7rem 1.3rem;
        font-size: 0.9rem;
    }

    @media (max-width: 480px) {
        padding: 0.6rem 1.1rem;
        font-size: 0.8rem;
    }
`;

const Icon = styled.div`
    background: ${colors.yinmnBlue};
    color: ${colors.platinum};
    border-radius: 50%;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    font-family: "Montserrat", sans-serif;

    @media (max-width: 768px) {
        font-size: 1.75rem;
        width: 50px;
        height: 50px;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
        width: 45px;
        height: 45px;
    }
`;

// GPA Dots
const DotsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

const Dot = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-right: 6px;
    background-color: ${props => props.filled ? colors.yinmnBlue : colors.oxfordBlue};

    @media (max-width: 768px) {
        width: 12px;
        height: 12px;
    }

    @media (max-width: 480px) {
        width: 10px;
        height: 10px;
    }
`;

// Education Component
const Education = () => {
    const educationData = useMemo(() => [
        {
            id: 1,
            title: 'SSC',
            location: 'Keshava Reddy High School',
            date: '2017-2018',
            description: 'Completed secondary school with outstanding performance.',
            icon: 'school',
            buttonText: 'Certificate',
            gpa: '10.00'
        },
        {
            id: 2,
            title: 'Intermediate (MPC)',
            location: 'Tirumala Junior College, Katheru',
            date: '2018-2020',
            description: 'Completed intermediate with a focus on Mathematics, Physics, and Chemistry.',
            icon: 'school',
            buttonText: 'Projects',
            gpa: '96%'
        },
        {
            id: 3,
            title: 'B.Tech (Computer Science and Engineering)',
            location: 'Adikavi Nannaya University, Rajanagaram',
            date: '2020-2024',
            description: 'Pursuing a Bachelor\'s degree in Computer Science with various projects and internships.',
            icon: 'school',
            buttonText: 'See Projects',
            gpa: '8.8'
        },
    ], []);

    // Calculate filled dots based on GPA
    const calculateFilledDots = (gpa) => {
        const gpaNumber = parseFloat(gpa.replace('%', ''));
        if (!isNaN(gpaNumber)) {
            return Math.round((gpaNumber / 10) * 10); // Assuming GPA scale is out of 10
        }
        return 0;
    };

    return (
        <div>
            <Title>Education</Title>
            <VerticalTimeline>
                {educationData.map((education) => (
                    <VerticalTimelineElement 
                        key={education.id}
                        date={education.date}
                        dateClassName="date"
                        iconStyle={{ background: colors.yinmnBlue, color: colors.platinum }}
                        icon={<Icon>{education.id}</Icon>}
                    >
                        <TimelineContent>
                            <h3>{education.title}</h3>
                            <h5>{education.location}</h5>
                            <Date>{education.date}</Date>
                            <p>{education.description}</p>
                            <DotsContainer>
                                {[...Array(10)].map((_, i) => (
                                    <Dot key={i} filled={i < calculateFilledDots(education.gpa)} />
                                ))}
                            </DotsContainer>
                           
                        </TimelineContent>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Education;
