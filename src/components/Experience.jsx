import React from 'react';
import styled from 'styled-components';

// Import your certificate PDFs
import mycCertificate from '../assets/myc_certificate.pdf';
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
=    }

    @media (max-width: 480px) {
        font-size: 2rem;
=    }
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

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const Responsibilities = styled.ul`
  margin-top: 20px;
  color: #e0e1dd;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const ResponsibilityItem = styled.li`
  margin-bottom: 8px;
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
  border: none; /* Removes border */
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  outline: none; /* Removes any outline on focus */

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

  &:focus {
    outline: none; /* Ensures no outline appears on focus */
  }

  &:active {
    transform: scale(0.98); /* Adds a subtle effect on click */
  }
`;

const Experience = () => {
  const experienceData = [
    {
      company: 'MYC Mine and Yours Company, Vizag',
      role: 'Full Stack Developer (Intern)',
      duration: 'Duration: 3 months',
      description: 'MYC is a leading company in Vizag specializing in innovative solutions for various industries.',
      responsibilities: [
        'Gained insights into business planning and pre-production steps for live projects.',
        'Contributed to various tasks, enhancing understanding of industry practices.',
      ],
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'PhpMyAdmin'],
      certificateUrl: mycCertificate,
      companyUrl: 'https://www.linkedin.com/company/my-company-mine-and-yours-company/',
    },
    {
      company: 'Arthashastra Intelligence, Hyderabad',
      role: 'Frontend Developer (Intern)',
      duration: 'Duration: 5 months',
      description: 'Arthashastra Intelligence provides cutting-edge AI solutions for businesses across the globe.',
      responsibilities: [
        'Developed responsive interfaces using React for frontend components.',
        'Created essential components in React using Django Rest Framework.',
        'Built and maintained entire websites using Wordpress.',
        'Collaborated to implement new features and enhance existing ones.',
      ],
      skills: ['React', 'Django Rest Framework', 'Wordpress'],
      certificateUrl: arthashastraCertificate,
      companyUrl: 'https://arthashastra.ai/',
    },
  ];

  const handleDownload = (url) => {
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
              <Description>{experience.description}</Description>
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
              <Button href={experience.companyUrl} target="_blank" rel="noopener noreferrer">About Company</Button>
              <Button as="button" onClick={() => handleDownload(experience.certificateUrl)}>Download Certificate</Button>
            </ButtonContainer>
          </ExperienceItem>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
