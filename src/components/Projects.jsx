import React from 'react';
import styled from 'styled-components';
import resumeData from './resumeData'; // Adjust the path according to your project structure

const colors = {
  richBlack: '#0d1b2aff',
  oxfordBlue: '#1b263bff',
  yinmnBlue: '#415a77ff',
  silverLakeBlue: '#778da9ff',
  platinum: '#e0e1ddff',
};

const ProjectsContainer = styled.div`
  text-align: center;
  color: #e0e1dd;
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
  flex-direction: row;
  background: linear-gradient(135deg, #1b263b 30%, #415a77 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  transition: transform 0.3s ease;
  padding: 20px;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`;

const ImageWrapper = styled.div`
  width: 30%; // The image occupies 30% of the card
  @media (max-width: 768px) {
    width: 100%; // Full width for mobile devices
  }
`;

const Image = styled.img`
  width: 100%; // Ensures the image fills the width of its container
  height: 100%; // Ensures the image fills the height

  @media (max-width: 768px) {
    height: 200px; // Fixed height for tablet and mobile devices
  }

  @media (min-width: 769px) {
    height: 100%; // Height 100% for larger screens
  }

  border-radius: 10px; // Adds rounded corners
  object-fit: cover; // Ensures the image maintains its aspect ratio
`;

const ContentWrapper = styled.div`
  width: 70%; // The content occupies 70% of the card
  padding-left: 20px; // Space between image and content
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
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
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
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
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

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
`;

const Projects = () => {
  const projects = resumeData.projects;

  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <CardContainer>
        {projects.map((project, index) => (
          <Card key={index}>
            <ImageWrapper>
              <Image src={project.image} alt={project.name} />
            </ImageWrapper>
            <ContentWrapper>
              <CardTitle>{project.name}</CardTitle>
              <Date>{project.date}</Date>
              <Description>{project.description}</Description>
              <ButtonGroup>
                {project.downloadLink && (
                  <Button href={project.downloadLink} target="_blank" download>
                    Download
                  </Button>
                )}
                {project.view && (
                  <Button href={project.view} target="_blank">
                    View
                  </Button>
                )}
              </ButtonGroup>
            </ContentWrapper>
          </Card>
        ))}
      </CardContainer>
    </ProjectsContainer>
  );
};

export default Projects;
