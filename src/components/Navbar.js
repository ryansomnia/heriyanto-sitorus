import React from 'react';
import './Navbar.css';

const Navbar = ({ onAboutClick, onProjectsClick, onContactClick }) => {

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="/">Heriyanto Sitorus</a>
        </div>
        <ul className="nav-links">
          <li><a href="#about" onClick={onAboutClick}>About</a></li>
          <li><a href="#projects" onClick={onProjectsClick}>Projects</a></li>
          <li><a href="#contact" onClick={onContactClick}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
