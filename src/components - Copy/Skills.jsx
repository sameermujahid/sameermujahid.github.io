import React from 'react';
import styled from 'styled-components';

// Import skill images
import skill1 from '../assets/python.webp';
import skill2 from '../assets/c-.webp'; // Corrected name
import skill3 from '../assets/js.webp'; // Corrected image for JavaScript
import skill4 from '../assets/aws.webp'; // AWS
import skill5 from '../assets/sql.webp'; // SQL
import skill6 from '../assets/postgresql.webp'; // PostgreSQL
import skill7 from '../assets/excel.webp'; // Excel
import skill8 from '../assets/powerbi.webp'; // Data Visualizations
import skill9 from '../assets/html.webp'; // HTML
import skill10 from '../assets/css.webp'; // CSS
import skill11 from '../assets/react.webp'; // React
import skill12 from '../assets/wp.webp'; // WordPress
import skill13 from '../assets/django.webp'; // Django
import skill14 from '../assets/flask.png'
import skill15 from '../assets/git.png'

const SkillsContainer = styled.section`
  text-align: center;
  padding: 2rem 1rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: "Bebas Neue", sans-serif;
  color: #e0e1dd;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px; // Increase gap for a more spacious look
  width: 100%;
`;

const SkillCard = styled.div`
  background: rgba(30, 39, 73, 0.8); // Semi-transparent background
  border-radius: 20px;
  padding: 1rem;
  text-align: center;
  color: #e0e1dd;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center; // Center align items in the card
  justify-content: space-between; // Space out the image and title
    border: 2px solid #415a77;

  &:hover {
    transform: translateY(-5px); // Slightly lift the card
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3); // Increased shadow on hover
  }
`;

const SkillImage = styled.img`
  width: 100%; // Make image fill the container width
  height: auto; // Maintain aspect ratio
  max-height: 80px; // Set a maximum height for the image
  object-fit: contain; // Maintain the aspect ratio while fitting the container
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
  ${SkillCard}:hover & {
    transform: scale(1.1); // Scale the image on card hover
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.1rem; // Increased font size for better readability
  margin: 0.5rem 0;
  font-family: 'Arial', sans-serif;
  font-weight: bold; // Bold font for titles
`;

const SkillData = [
  { id: 1, image: skill1, title: 'Python', category: 'Languages' },
  { id: 2, image: skill5, title: 'SQL', category: 'Languages' },
  { id: 3, image: skill3, title: 'JavaScript', category: 'Languages' },
  { id: 9, image: skill9, title: 'HTML', category: 'Front-End' },
  { id: 10, image: skill10, title: 'CSS', category: 'Front-End' },
  { id: 11, image: skill11, title: 'React JS', category: 'Front-End' },
  { id: 12, image: skill12, title: 'WordPress', category: 'Front-End' },
  { id: 13, image: skill13, title: 'Django', category: 'Back-End' },  { id: 5, image: skill14, title: 'Flask', category: 'Back-End' },

  { id: 4, image: skill4, title: 'AWS', category: 'Back-End' },
  { id: 6, image: skill6, title: 'PostgreSQL', category: 'Back-End' },
  { id: 7, image: skill7, title: 'MS Excel', category: 'Tools' },
  { id: 8, image: skill8, title: 'Power BI', category: 'Tools' },
    { id: 15, image: skill15, title: 'Git', category: 'Tools' },

];

const categories = ['Languages', 'Front-End', 'Back-End', 'Tools'];

const CategoriesContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const CategoryColumn = styled.div`
  background: rgba(30, 39, 73, 0.7);
  border-radius: 20px;
  padding: 1rem;
  min-width: 200px;
  flex: 1 1 200px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const CategoryTitle = styled.h2`
  color: #e0e1dd;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: "Bebas Neue", sans-serif;
  text-align: center;
`;

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <Title style={{ marginBottom: '2.5rem' }}>My Skills</Title>
            <CategoriesContainer>
              {categories.map(category => (
                <CategoryColumn key={category}>
                  <CategoryTitle>{category}</CategoryTitle>
                  <SkillsGrid>
                    {SkillData.filter(skill => skill.category === category).map(skill => (
                      <SkillCard key={skill.id}>
                        <SkillImage src={skill.image} alt={skill.title} />
                        <SkillTitle>{skill.title}</SkillTitle>
                      </SkillCard>
                    ))}
                  </SkillsGrid>
                </CategoryColumn>
              ))}
            </CategoriesContainer>
        </SkillsContainer>
    );
};

export default Skills;
