

import React from 'react';
import './Stack.css';
import { FaJava, FaJs, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';
import { RiEnglishInput } from "react-icons/ri";
import { FaGolang } from 'react-icons/fa6';
import { SiMicrosoftsqlserver, SiMysql, SiMongodb, SiApachekafka } from 'react-icons/si';

const Stack = () => {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <div className="icon-container">
            <FaJs className="skill-icon" />
          </div>
          <p>JavaScript</p>
          <span className="skill-level">MID</span>
        </div>

        <div className="skill-item">
          <div className="icon-container">
            <FaNodeJs className="skill-icon" />
          </div>
          <p>Node.js</p>
          <span className="skill-level">MID</span>
        </div>

        <div className="skill-item">
          <div className="icon-container">
            <FaReact className="skill-icon" />
          </div>
          <p>React Native/JS</p>
          <span className="skill-level">Junior</span>
        </div>

        <div className="skill-item">
          <div className="icon-container">
            <SiMysql className="skill-icon" />
          </div>
          <p>MYSQL</p>
          <span className="skill-level">MID</span>
        </div>
        <div className="skill-item">
          <div className="icon-container">
            <SiMicrosoftsqlserver className="skill-icon" />
          </div>
          <p>SQL Server</p>
          <span className="skill-level">MID</span>
        </div>

        <div className="skill-item">
          <div className="icon-container">
            <SiMongodb className="skill-icon" />
          </div>
          <p>MongoDB</p>
          <span className="skill-level">Junior</span>
        </div>
        <div className="skill-item">
          <div className="icon-container">
            <SiApachekafka className="skill-icon" />
          </div>
          <p>Kafka</p>
          <span className="skill-level">MID</span>
        </div>
        <div className="skill-item">
          <div className="icon-container">
            <FaJava className="skill-icon" />
          </div>
          <p>Java</p>
          <span className="skill-level">On Learning</span>
        </div>
        <div className="skill-item">
          <div className="icon-container">
            <FaGolang className="skill-icon" />
          </div>
          <p>Golang</p>
          <span className="skill-level">On Learning</span>
        </div>
        <div className="skill-item">
          <div className="icon-container">
            <RiEnglishInput className="skill-icon" />
          </div>
          <p>English language</p>
          <span className="skill-level">Low Intermediate
       </span>
        </div>
      
       
      </div>
    </section>
  );
};

export default Stack;
