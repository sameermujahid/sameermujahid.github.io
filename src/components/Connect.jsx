import React, { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import MailAnimation from './MailAnimation';

const planeAnimation = keyframes`
    0% {
        transform: translateX(0) translateY(0) rotate(0);
        opacity: 0;
    }
    50% {
        transform: translateX(50px) translateY(-20px) rotate(15deg);
        opacity: 0.5;
    }
    100% {
        transform: translateX(100px) translateY(-40px) rotate(30deg);
        opacity: 1;
    }
`;

const ConnectContainer = styled.section`
    align-items: center;
    padding: 50px;
    color: #e0e1ddff; /* platinum */
    position: relative;
    overflow: hidden;
    z-index: 1;
    margin-top: 50px;

  @media (max-width: 425px) {
    padding: 30px 10px;
    margin-top: 30px;
        justify-content:space-between;


  }
`;

const Container = styled.section`
    color: #e0e1ddff; /* platinum */
    display:flex;
    gap:30px;
      @media (max-width: 425px) {
   flex-direction:column;

  }
`;

const LeftSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    margin-bottom: 30px;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

const PaperPlane = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    animation: ${planeAnimation} 2s linear infinite;
    z-index: 1;
    border: none;
`;

const SVGContainer = styled.div`
    margin-bottom: 20px;
    transform: rotate(45deg);
    transition: transform 0.5s ease;

    @media (max-width: 768px) {
        display: none; /* Hide SVGContainer (and its content) on mobile screens */
    }

    &:hover {
        transform: rotate(0);
    }

    svg {
        width: 100%;
        height: 100%;
        fill: #e0e1ddff; /* platinum */
    }
`;

const Title = styled.h2`
    font-size: 2em;
    margin: 20px 0;
    position: relative;
    z-index: 2;
    transition: font-size 0.3s ease;
`;

const Paragraph = styled.p`
    font-size: 1.2em;
    text-align: center;
    position: relative;
    z-index: 2;
`;

const ContactInfo = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
`;

const Email = styled.span`
    font-size: 1.1em;
    margin-bottom: 10px;
`;

const Phone = styled.span`
    font-size: 1.1em;
    margin-bottom: 10px;
`;

const IconContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    position: relative;
    z-index: 2;
`;

const Icon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #778da9ff; /* silver lake blue */
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #415a77ff; /* yinmn blue */
    }

    svg {
        width: 60%;
        height: 60%;
        fill: #e0e1ddff; /* platinum */
    }
`;

const FormContainer = styled.div`
    flex: 1;
    padding: 40px;
    background-color: #1b263bff; /* oxford blue */
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        margin-left: 0;
        padding: 10px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
    margin: 0 auto;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 1.1em;
  border: none;
  border-radius: 8px;
  background-color: rgba(65, 90, 119, 0.8);
  color: #e0e1dd;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);

  &::placeholder {
    color: rgba(224, 225, 221, 0.7);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #778da9;
  }
`;

const Textarea = styled.textarea`
  padding: 15px;
  font-size: 1.1em;
  border: none;
  border-radius: 8px;
  background-color: rgba(65, 90, 119, 0.8);
  color: #e0e1dd;
  resize: none;
  height: 150px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);

  &::placeholder {
    color: rgba(224, 225, 221, 0.7);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #778da9;
  }
`;

const gradientMorph = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const gradientReverse = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Button = styled.button`
  padding: 15px;
  font-size: 1.2em;
  color: #e0e1dd;
  background: linear-gradient(135deg, #1b263b, #415a77, #1b263b);
  background-size: 200% 200%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    animation: ${gradientMorph} 2s ease forwards;
  }

  &:not(:hover) {
    animation: ${gradientReverse} 2s ease forwards;
  }
`;

const ConfirmationMessage = styled.p`
    margin-top: 20px;
    color: #e0e1ddff; /* platinum */
    font-size: 1.2em;
`;

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
        <path fill='#000' d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.63c0.85-1.3,2.1-3.21,5.25-3.21C37.66,19.42,39,22.42,39,27 C39,30.74,39,39,39,39z"></path>
    </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
        <path fill='#000' d="M25,0C11.19,0,0,11.19,0,25c0,11.16,7.29,20.68,17.5,24.04c1.28,0.24,1.75-0.55,1.75-1.23c0-0.61-0.02-2.22-0.03-4.36 c-7.14,1.55-8.64-3.45-8.64-3.45c-1.17-2.95-2.85-3.74-2.85-3.74c-2.32-1.59,0.17-1.56,0.17-1.56c2.56,0.18,3.91,2.64,3.91,2.64 c2.27,3.89,5.97,2.77,7.43,2.12c0.23-1.64,0.89-2.77,1.62-3.41c-5.72-0.65-11.75-2.86-11.75-12.71c0-2.8,1-5.1,2.66-6.9 c-0.27-0.65-1.16-3.29,0.25-6.87c0,0,2.17-0.69,7.14,2.64c2.08-0.58,4.31-0.87,6.54-0.87c2.22,0,4.45,0.29,6.54,0.87 c4.97-3.33,7.14-2.64,7.14-2.64c1.41,3.58,0.52,6.22,0.25,6.87c1.66,1.8,2.66,4.1,2.66,6.9c0,9.86-6.04,12.06-11.78,12.68 c0.92,0.79,1.74,2.34,1.74,4.72c0,3.41-0.03,6.15-0.03,6.97c0,0.69,0.47,1.48,1.76,1.22C41.71,45.68,49,36.16,49,25 C49,11.19,37.81,0,25,0z"></path>
    </svg>
);

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        axios.post('/api/contact', new FormData(form))
            .then(response => {
                setSubmitted(true);
            })
            .catch(error => {
                console.error(error);
                alert('There was an error. Please try again.');
            });
    };

    return (
        <ConnectContainer>
            <Container>
                <LeftSection>
                    <SVGContainer>
                        <MailAnimation />
                    </SVGContainer>
                    <Title>Contact Me</Title>
                    <Paragraph>If you have any questions or just want to say hello, feel free to reach out!</Paragraph>
                    <ContactInfo>
                        <Email>Email: example@example.com</Email>
                        <Phone>Phone: +123 456 7890</Phone>
                    </ContactInfo>
                    <IconContainer>
                        <Icon href="https://www.linkedin.com/in/yourprofile" target="_blank">
                            <LinkedInIcon />
                        </Icon>
                        <Icon href="https://github.com/yourprofile" target="_blank">
                            <GitHubIcon />
                        </Icon>
                    </IconContainer>
                </LeftSection>
                <FormContainer>
                    <Form onSubmit={handleSubmit}>
                        <Input type="text" name="name" placeholder="Your Name" required />
                        <Input type="email" name="email" placeholder="Your Email" required />
                        <Textarea name="message" placeholder="Your Message" required></Textarea>
                        <Button type="submit">Send Message</Button>
                    </Form>
                    {submitted && <ConfirmationMessage>Thank you for your message! I'll get back to you soon.</ConfirmationMessage>}
                </FormContainer>
            </Container>
        </ConnectContainer>
    );
};

export default Contact;
