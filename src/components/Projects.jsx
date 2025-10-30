import React from 'react';
import styled from 'styled-components';
import resumeData from './resumeData'; // Adjust path if needed

const colors = {
  richBlack: '#0d1b2aff',
  oxfordBlue: '#1b263bff',
  yinmnBlue: '#415a77ff',
  silverLakeBlue: '#778da9ff',
  platinum: '#e0e1ddff',
};

const ProjectsContainer = styled.div`
  text-align: center;
  color: ${colors.platinum};
  padding: 3rem 1rem;
  background: linear-gradient(145deg, ${colors.richBlack}, ${colors.oxfordBlue});
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 4rem 3rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: "Bebas Neue", sans-serif;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
  color: ${colors.platinum};
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(145deg, ${colors.oxfordBlue}, ${colors.yinmnBlue});
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    // box-shadow: 0 15px 35px rgba(119, 141, 169, 0.4);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.2rem;
  background: rgba(255, 255, 255, 0.05);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${colors.platinum};
  margin-bottom: 0.8rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${colors.platinum};
  line-height: 1.6;
  text-align: center;
  flex-grow: 1;
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: auto;
`;

const Button = styled.a`
  padding: 0.6rem 1.3rem;
  border-radius: 10px;
  background-color: ${colors.platinum};
  color: ${colors.richBlack};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  &:hover {
    background-color: ${colors.richBlack};
    color: ${colors.platinum};
    box-shadow: 0 0 10px ${colors.silverLakeBlue};
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
            <CardTitle>{project.name}</CardTitle>
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
          </Card>
        ))}
      </CardContainer>
    </ProjectsContainer>
  );
};

export default Projects;
