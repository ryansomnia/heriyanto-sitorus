import React from 'react';
import './ContactFooter.css';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactFooter = () => {
  return (
    <footer className="contact-footer">
      <h2 className="footer-title">Get in Touch</h2>
      <p className="footer-description">Feel free to reach out to me through any of the platforms below.</p>
      
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/heriyanto-sitorus-7018a3111/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaLinkedin className="icon" />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:heriyantositorus14@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaEnvelope className="icon" />
          <span>Email</span>
        </a>
        <a
          href="https://wa.me/6287781018141"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaWhatsapp className="icon" />
          <span>WhatsApp</span>
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Heriyanto Sitorus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default ContactFooter;
