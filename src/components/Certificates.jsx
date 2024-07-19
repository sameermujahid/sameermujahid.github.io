import React from 'react';
import styled from 'styled-components';

// Import your certificate PDFs
import awsCertificate from '../assets/aws_certificate.pdf';
import nptelCertificate from '../assets/nptel_certificate.pdf';
import courseraCertificate from '../assets/coursera_certificate.pdf';

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
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 3rem;
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
  border-radius: 15px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* Ensure buttons are at the base */

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
  margin-top: auto; /* Push buttons to the bottom of the card */
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
    background-color: #778da9;
    color: #fff;
  }
`;

const certificates = [
  {
    title: 'AWS - Academy Foundation',
    date: 'OCT-DEC 2022',
    description:
      'Completed the AWS Academy Foundation program, mastering cloud computing and AWS services to design, develop, and deploy scalable applications.',
    downloadLink: awsCertificate,
  },
  {
    title: 'NPTEL - Internet of Things',
    date: 'JUL-OCT 2022',
    description:
      'Completed the Internet of Things course, understanding IoT concepts and technologies, and gaining hands-on experience in designing IoT solutions.',
    downloadLink: nptelCertificate,
  },
  {
    title: 'Coursera - Data Science',
    date: 'FEB-APR 2022',
    description:
      'Completed the Data Science course, learning data wrangling, exploratory data analysis, statistical modeling, and machine learning.',
    downloadLink: courseraCertificate,
  },
];

// Certificates component
const Certificates = () => {
  return (
    <CertificatesContainer>
      <Title>Certificates</Title>
      <CardContainer>
        {certificates.map((certificate, index) => (
          <Card key={index}>
            <CardTitle>{certificate.title}</CardTitle>
            <CardDate>Date: {certificate.date}</CardDate>
            <Description>{certificate.description}</Description>
            <ButtonGroup>
              <Button href={certificate.downloadLink} download={`${certificate.title.replace(/\s+/g, '-')}_certificate.pdf`}>
                Download
              </Button>
              <Button href={certificate.downloadLink} target="_blank">
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
