import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 2rem;
  background-color: #ecf0f1;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <Section id="about">
      <ProfileImage src="/path-to-your-profile-image.jpg" alt="Your Name" />
      <h2>About Me</h2>
      <p>This is the About section where you can introduce yourself.</p>
    </Section>
  );
};

export default About;
