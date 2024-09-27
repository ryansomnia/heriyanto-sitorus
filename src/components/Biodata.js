
import React from 'react';
import './Biodata.css';
// import samplePhoto from '../assets/sample-photo.jpg'; // Sample square image of activities

const BioData = () => {
  return (
    <section className="bio-section">
      <div className="bio-container">
        <div className="bio-content">
          <div className="bio-photo">
            <img src="bio.png" alt="Heriyanto's Activity" />
          </div>
          <div className="bio-details">
            <h1>My Resume</h1>
            <p className="title">as Software Developer</p>
            
            {/* Education */}
            <div className="bio-section-item">
              <h2>Education</h2>
              <p><strong>Bachelor of Computer Science (S1 Ilmu Komputer)</strong></p>
            </div>

            {/* Freelance Projects */}
            <div className="bio-section-item">
              <h2>Freelance Projects</h2>
              <p><strong>QR Web for Hospital Project:</strong> Created a web for handling PCR test documents and generating a QR code for proof of completion.</p>
              <p><strong>Private School Landing Page in Bogor:</strong> Developed a landing page with an admin panel for content management.</p>
            </div>

            {/* Work Experience */}
            <div className="bio-section-item">
              <h2>Work Experience at PT Asuransi BRI Life</h2>
              <p><strong>Software Engineer (August 2020 - Present)</strong></p>
              <ul>
                <li><strong>WA Corporate:</strong> Verified customer policy data with BRI Life as Host and Qiscus as Client.</li>
                <li><strong>Contact Center:</strong> Created Restful APIs for IVR, Welcome Call, and Profiling Data.</li>
                <li><strong>My Access:</strong> Managed Registration, Login, and Policy Detail services.</li>
                <li><strong>Notification Center:</strong> Handled API notifications using Kafka technology.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioData;
