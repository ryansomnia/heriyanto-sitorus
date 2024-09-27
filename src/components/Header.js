import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="profile">
          <img src="head.jpg" alt="Your Name" className="profile-pic" />
          <div className="intro">
            <h1 className="title">Heriyanto Sitorus</h1>
            <p className="highlight">“Experienced Software Engineer and experienced in developing applications both within the company and freelance projects. I have Passion in programming, especially in stacks such as node js, react, SQL, and Kafka but it is possible to learn other things”</p>
            <h2 className="position">Software Developer</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
