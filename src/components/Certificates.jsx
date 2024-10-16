import React from 'react';
import styled from 'styled-components';
import resumeData from './resumeData'; // Ensure you import resumeData correctly

const colors = {
  richBlack: '#0d1b2aff',
  oxfordBlue: '#1b263bff',
  yinmnBlue: '#415a77ff',
  silverLakeBlue: '#778da9ff',
  platinum: '#e0e1ddff',
};

// Styled components for Certificates
const CertificatesContainer = styled.div`
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-content: center;
`;

const Card = styled.div`
  background: linear-gradient(135deg, #1b263b 30%, #415a77 100%);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const CardDate = styled.p`
  font-size: 0.875rem;
  margin: 0.5rem 0;
  color: #dcdcdc;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #f0f0f0;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
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

// Certificates component
const Certificates = () => {
  const certificates = resumeData.courses_certificates; // Get certificates from resumeData

  return (
    <CertificatesContainer>
      <Title>Certificates</Title>
      <CardContainer>
        {certificates.map((certificate, index) => (
          <Card key={index}>
            <CardTitle>{certificate.course}</CardTitle>
            <CardDate>Date: {certificate.duration}</CardDate>
            <Description>{certificate.description}</Description>
            <ButtonGroup>
              <Button href={certificate.pdf} download={`${certificate.course.replace(/\s+/g, '-')}_certificate.pdf`}>
                Download
              </Button>
              <Button href={certificate.pdf} target="_blank" rel="noopener noreferrer">
                View
              </Button>
            </ButtonGroup>
          </Card>
        ))}
      </CardContainer>
    </CertificatesContainer>
  );
};

export default Certificates;
