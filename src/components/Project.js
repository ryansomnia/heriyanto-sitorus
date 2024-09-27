import React from 'react';
import './Project.css';
// import cbimg from '../../public/assets/webcerdasbangsa.png'

const ProjectSection = () => {
  const projects = [
    {
      title: 'Hospital QR Web Project',
      image: 'https://picsum.photos/id/237/400/300',
      stack: ['React', 'Node.js', 'MongoDB', 'QR Code'],
      highlight:
        'A web application that generates PCR test documents with a QR code for hospital verification.',
      link: 'https://sekolahcerdasbangsa.sch.id',
    },
    {
      title: 'Office Management System',
      image: 'https://picsum.photos/id/238/400/300',
      stack: ['React', 'SQL', 'Kafka'],
      highlight:
        'An office management system that automates workflows, reduces paperwork, and tracks employee progress.',
      link: 'https://sekolahcerdasbangsa.sch.id',
    },
    {
      title: 'Church Website',
      image: 'https://picsum.photos/id/239/400/300',
      stack: ['Vue.js', 'Firebase'],
      highlight:
        'A church website to share upcoming events, stream services, and manage the community with ease.',
      link: 'https://sekolahcerdasbangsa.sch.id',
    },
    {
      title: 'Sekolah Cerdas Bangsa',
      image: '/assets/webcerdasbangsa.png',
      stack: ['HTML', 'CSS', 'JavaScript'],
      highlight:
        'A landing page for a private school that includes an admin panel for content management.',
      link: 'https://sekolahcerdasbangsa.sch.id',
    },
  ];

  return (
    <section className="project-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-stack">
                <strong>Stack:</strong> {project.stack.join(', ')}
              </p>
              <p className="project-highlight">{project.highlight}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">
                See My Creation
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
