import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  background: url('/path-to-your-image.jpg') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;
  background-attachment: fixed;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Overlay />
      <Content>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my work and projects</p>
      </Content>
    </HeroSection>
  );
};

export default Hero;
