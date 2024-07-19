import React from 'react';
import styled from 'styled-components';
const colors = {
  richBlack: '#0d1b2aff',
  oxfordBlue: '#1b263bff',
  yinmnBlue: '#415a77ff',
  silverLakeBlue: '#778da9ff',
  platinum: '#e0e1ddff',
};
const ProjectsContainer = styled.div`
  margin-top: 50px;
  text-align: center;
  color: #e0e1ddff;
  padding: 50px 20px;

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

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(135deg, #1b263b 30%, #415a77 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: transform 0.3s ease;
  padding: 20px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 8px;
  }
`;

const Content = styled.div`
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.8em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Date = styled.p`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Description = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: #e0e1dd;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
justify-content:center;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  font-weight: 600;
  color: black;
  background-color: #fff;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #778da9ff;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 8px 16px;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'MERA SAHAI: Mera Sahai Platform',
      date: '',
      description:
        "As a web developer for the jobseeker support platform, I oversaw modules allowing everyone to upload job and project alerts. I'm proud of my part in this important effort, which aims to make it easier for jobseekers.",
      downloadLink: '/assets/mera_sahai_project.pdf',
    },
    {
      title: 'College Project: Water Quality Prediction and Classification',
      date: '',
      description:
        'For my college project, I developed a system using SVM and XGBoost to predict and classify water quality based on diverse parameters. This project highlighted my machine learning skills and strengthened my abilities in project management, problem-solving, and independent work.',
      downloadLink: '/assets/water_quality_project.pdf',
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <Title>Projects</Title>
      <CardContainer>
        {projects.map((project, index) => (
          <Card key={index}>
            <Content>
              <CardTitle>{project.title}</CardTitle>
              <Date>Date: {project.date}</Date>
              <Description>{project.description}</Description>
            </Content>
            <ButtonGroup>
              {project.downloadLink && (
                <Button href={project.downloadLink} download={`${project.title.replace(/\s+/g, '-')}_project.pdf`}>
                  Download
                </Button>
              )}
              <Button href={project.downloadLink} target="_blank">
                View
              </Button>
            </ButtonGroup>
          </Card>
        ))}
      </CardContainer>
    </ProjectsContainer>
  );
};

export default Projects;
