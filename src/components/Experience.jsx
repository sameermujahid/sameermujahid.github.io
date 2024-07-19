import React from 'react';
import styled from 'styled-components';

// Import your certificate PDFs
import mycCertificate from '../assets/myc-certificate.pdf';
import arthashastraCertificate from '../assets/arthashastra-certificate.pdf';
const colors = {
  richBlack: '#0d1b2aff',
  oxfordBlue: '#1b263bff',
  yinmnBlue: '#415a77ff',
  silverLakeBlue: '#778da9ff',
  platinum: '#e0e1ddff',
};
const ExperienceSection = styled.div`
  padding: 50px 20px;
  margin-top: 50px;

  @media (max-width: 768px) {
    padding: 30px 10px;
    margin-top: 30px;
  }
`;
const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: ${colors.platinum};
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
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
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 10px;
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
      justify-content: center;
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
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content:center;
    gap: 10px;
  }
`;

const Button = styled.a`
  background-color: #1b263b;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e0e1dd;
    color: #1b263b;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 8px 16px;
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
