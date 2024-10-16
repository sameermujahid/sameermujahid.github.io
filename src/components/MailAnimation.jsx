import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100px;
  width: 150px;
  background-color: #415a77ff; /* Yinmn Blue */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  border-radius: 10px;
`;

const Lid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-right: 15px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid transparent;
  transform-origin: top;
  transition: transform 0.25s linear;
`;

const Envelope = styled.div`
  position: absolute;
  height: auto;
  width: auto;
  top: 0;
  left: 0;
  border-top: 50px solid transparent;
  border-right: 75px solid #e0e1ddff; /* Platinum */
  border-bottom: 50px solid #e0e1ddff; /* Platinum */
  border-left: 75px solid #778da9ff; /* Silver Lake Blue */
  z-index: 2;
  border-radius: 10px;
`;

const Letter = styled.div`
  position: absolute;
  top: 0;
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 20px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${props => props.show ? '-50px' : '0'});
  transition: transform 0.5s;
  z-index: 0;
`;

const Text = styled.p`
  text-align: center;
  font-size: 30px;
  margin-top: 30px;
  color: #0d1b2aff; /* Rich Black */
`;

const EnvelopeComponent = () => {
  const [open, setOpen] = useState(false);

  const handleHover = () => {
    setOpen(!open);
  };

  return (
    <Wrapper onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <Lid className="lid one" open={open}></Lid>
      <Lid className="lid two" open={open}></Lid>
      <Envelope className="envelope"></Envelope>
      <Letter className="letter" show={open}>
        <Text>Hello</Text>
      </Letter>
    </Wrapper>
  );
};

export default EnvelopeComponent;
