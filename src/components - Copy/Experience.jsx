import React from 'react';
import styled from 'styled-components';

// Import your certificate PDFs
import arthashastraCertificate from '../assets/arthashastra_certificate.pdf';

const colors = {
  richBlack: '#0d1b2aff',
  oxfordBlue: '#1b263bff',
  yinmnBlue: '#415a77ff',
  silverLakeBlue: '#778da9ff',
  platinum: '#e0e1ddff',
};

const ExperienceSection = styled.div`
  padding: 50px 20px;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem;
  }
`;

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

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  font-family: 'Arial', sans-serif;
`;

const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(135deg, #1b263b 30%, #415a77 100%);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Company = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  color: #e0e1dd;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Role = styled.div`
  font-size: 1.4em;
  color: #e0e1dd;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const Duration = styled.div`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Description = styled.p`
  color: #e0e1dd;
  margin-top: 10px;
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const Responsibilities = styled.ul`
  margin-top: 15px;
  margin-bottom: 10px;
  color: #e0e1dd;
  padding-left: 18px;
  line-height: 1.6;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const ResponsibilityItem = styled.li`
  margin-bottom: 8px;
  line-height: 1.6;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;

const Skill = styled.div`
  background-color: #415a77;
  color: #e0e1dd;
  padding: 8px 12px;
  border-radius: 20px;

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 6px 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #000;
  font-weight: 600;
  background-color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  outline: none;

  @media (min-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  }

  &:hover {
    background-color: #0d1b2aff;
    color: #fff;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Experience = () => {
  const experienceData = [
    {
      company: 'CINCYR Tech Private Limited, Hyderabad',
      role: 'Data Scientist',
      duration: 'December 2024 – Present',
      responsibilities: [
        'Led the development of Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) models, enhancing AI-driven decision-making.',
        'Created custom datasets and fine-tuned LLMs to improve response accuracy, ensuring domain-specific real estate AI models.',
        'Deployed machine learning (ML) models, increasing operational efficiency and optimizing business workflows.',
        'Collaborated with cross-functional teams to integrate AI solutions, reducing manual effort by 20% and improving processes.',
        'Integrated the AI model into multiple applications, enabling real-time data retrieval and contextually accurate responses.'
      ],
      skills: ['Python', 'LLMs', 'RAG', 'Machine Learning', 'Deployment', 'Data Engineering'],
      certificateUrl: '',
      companyUrl: 'https://cincyrtech.com/',
    },
    {
      company: 'SocialTek, Hyderabad',
      role: 'Data Science Intern',
      duration: 'July 2024 – December 2024',
      responsibilities: [
        'Analyzed large datasets with over 500,000 records, ensuring 99% data accuracy and reducing retrieval time by 20%.',
        'Conducted exploratory data analysis (EDA), uncovering actionable insights that improved data-driven decision-making by 18%.',
        'Created synthetic datasets, augmenting training data by 35% and improving model accuracy.',
        'Developed an ATS (Applicant Tracking System) compatibility assessment tool, increasing recruitment efficiency by 25% and reducing hiring time by 30%.',
        'Designed scoring algorithms to evaluate resumes against job descriptions, streamlining candidate selection and improving accuracy.'
      ],
      skills: ['Python', 'EDA', 'Pandas', 'Data Analysis', 'ATS', 'Algorithm Design'],
      certificateUrl: '',
      companyUrl: 'https://socialtek.in/',
    },
    {
      company: 'Arthashastra Intelligence, Hyderabad',
      role: 'Machine Learning Intern',
      duration: 'December 2023 – June 2024',
      responsibilities: [
        'Optimized data preprocessing pipelines, reducing processing time by 20% while maintaining 98% data integrity.',
        'Built and deployed scalable web applications using React and Django.',
        'Developed predictive machine learning models in Python, improving customer segmentation and marketing efficiency by 12%.',
        'Integrated AI solutions with cross-functional teams, reducing operational costs by 10% and enhancing process efficiency.'
      ],
      skills: ['Python', 'React', 'Django', 'Machine Learning', 'Data Preprocessing'],
      certificateUrl: arthashastraCertificate,
      companyUrl: 'https://arthashastra.ai/',
    },
  ];

  const handleDownload = (url) => {
    if (!url) return;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ExperienceSection>
      <Title>Internship and Experience</Title>
      <ExperienceContainer>
        {experienceData.map((experience, index) => (
          <ExperienceItem key={index}>
            <Content>
              <Company>{experience.company}</Company>
              <Role>{experience.role}</Role>
              <Duration>{experience.duration}</Duration>
              <Responsibilities>
                {experience.responsibilities.map((responsibility, idx) => (
                  <ResponsibilityItem key={idx}>{responsibility}</ResponsibilityItem>
                ))}
              </Responsibilities>
              <SkillList>
                {experience.skills.map((skill, idx) => (
                  <Skill key={idx}>{skill}</Skill>
                ))}
              </SkillList>
            </Content>
            <ButtonContainer>
              <Button href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                About Company
              </Button>
              {experience.certificateUrl && (
                <Button as="button" onClick={() => handleDownload(experience.certificateUrl)}>
                  Download Certificate
                </Button>
              )}
            </ButtonContainer>
          </ExperienceItem>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
