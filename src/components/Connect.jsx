import React, { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import MailAnimation from './MailAnimation';
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub, FiLinkedin } from "react-icons/fi";

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

    @media (max-width: 480px) {
        padding: 30px 10px;
        justify-content: space-between;
    }
`;

const Container = styled.section`
    color: #e0e1ddff; /* platinum */
    display: flex;
    gap: 30px;

    @media (max-width: 480px) {
        flex-direction: column;
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

const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
    color: #e0e1ddff;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-size: 2.5rem;
=    }

    @media (max-width: 480px) {
        font-size: 2rem;
=    }
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
  font-size: 1.75em;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color:#000;
    background-color: #415a77ff; /* silver lake blue */
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0d1b2aff; /* yinmn blue */
            color:#fff;

    }

    svg {
        width: 60%;
        height: 60%;
    }
`;

const FormContainer = styled.div`
    flex: 1;
    padding: 40px;
    background-color: #1b263bff; /* oxford blue */
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 2;
flex-direction:column;
 display:flex;
    align-items:center;
    justify-content:center;
    @media (max-width: 768px) {
        margin-left: 0;
        padding: 1px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
    padding: 0px; /* Default padding for larger screens */
    
    @media (max-width: 768px) {
        width: 90%; /* Adjust width for tablet screens */
        padding: 15px; /* Adjust padding for tablet screens */
        font-size: 16px; /* Adjust font size for tablet screens */
    }

    @media (max-width: 480px) {
        width: 95%; /* Adjust width for mobile screens */
        padding: 10px; /* Adjust padding for mobile screens */
        font-size: 14px; /* Adjust font size for mobile screens */
    }
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

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;
const CircleTickIcon = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px; /* Size of the circle */
    height: 40px; /* Size of the circle */
    background-color: #28a745; /* Circle background color */
    border-radius: 50%; /* Makes it circular */
    margin-right: 10px; /* Space between the icon and text */
`;

const Tick = () => (
    <CircleTickIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill="#ffffff">
            <path d="M20.285 5.293a1 1 0 00-1.414 0L9 14.586 5.707 11.293a1 1 0 00-1.414 1.414l4.293 4.293a1 1 0 001.414 0l11-11a1 1 0 000-1.414z" />
        </svg>
    </CircleTickIcon>
);

const ConfirmationMessage = styled.div`
    animation: ${fadeIn} 0.5s ease forwards; /* Animation effect */
    color: #fff; /* Dark teal text */
    border: 2px solid #fff; /* Darker border */
    border-radius: 20px; /* Rounded corners */
    padding: 20px;
    width:80%;
    margin-top: 20px; /* Space above the message */
    text-align: center; /* Center align text */
    font-size: 1.2em; /* Larger font size */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Shadow effect */
    display:flex;
    align-items:center;
    justify-content:center;
`;


const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        // Log the form submission action to the console
        console.log('Submit button clicked!');

        // Prepare form data
        const formData = new FormData(form);
        formData.append("access_key", "9ee753a6-c053-4819-9996-56a1043ba7f4"); // Add your Web3Forms Access Key

        // Submit to Web3Forms
        axios.post('https://api.web3forms.com/submit', formData)
            .then(response => {
                if (response.data.success) {
                    setSubmitted(true);
                } else {
                    alert('There was an error. Please try again.');
                }
            })
            .catch(error => {
                console.error(error);
                alert('There was an error. Please try again.');
            });
    };

    return (
        <ConnectContainer id="connect">
            <Title>Let's Connect</Title>
            <Container>
                <LeftSection>
                    <SVGContainer>
                        <MailAnimation />
                    </SVGContainer>
                    <Title>Contact Me</Title>
                    <Paragraph>If you have any questions or just want to say hello, feel free to reach out!</Paragraph>
                    <ContactInfo>
                        <Email>Email: sameermujahid7777@gmail.com</Email>
                        <Phone>Phone: +91 8317506633</Phone>
                    </ContactInfo>
                    <IconContainer>
                        <Icon href="https://www.linkedin.com/in/shaik-sameer-mujahid/" target="_blank" aria-label="LinkedIn Profile">
                            <FiLinkedin />
                        </Icon>
                        <Icon href="https://github.com/sameermujahid" target="_blank" aria-label="GitHub Profile">
                            <FiGithub />
                        </Icon>
                        <Icon href="https://www.instagram.com/sameer.mujahid/" target="_blank" aria-label="Instagram Profile">
                            <IoLogoInstagram />
                        </Icon>
                        <Icon href="https://x.com/sameer__mujahid" target="_blank" aria-label="Twitter Profile">
                            <RiTwitterXFill />
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
                    {submitted && <ConfirmationMessage><Tick/>Thank you for your message! I'll get back to you soon.</ConfirmationMessage>}
                </FormContainer>
            </Container>
        </ConnectContainer>
    );
};

export default Contact;
