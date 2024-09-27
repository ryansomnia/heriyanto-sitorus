import React, {useRef} from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import BioData from '../components/Biodata'
import Stack from '../components/Stack'
import Project from '../components/Project'
import ContactFooter from './ContactFooter'

function Home() {
  const bioDataRef = useRef(null);
  const projectDataRef = useRef(null);
  const contactDataRef = useRef(null);

  const scrollToBioData = () => {
    if (bioDataRef.current) {
      bioDataRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToProject = () => {
    if (projectDataRef.current) {
      projectDataRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToContact = () => {
    if (contactDataRef.current) {
      contactDataRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
<Navbar onAboutClick={scrollToBioData} onProjectsClick={scrollToProject} onContactClick={scrollToContact} />
    <Header />
    <section ref={bioDataRef}>
    <BioData/>
    </section>
  
    <Stack/>
    <section ref={projectDataRef}>
    <Project/>
    </section>
    <section ref={contactDataRef}>
    <ContactFooter/>
    </section>
   
  </>
  )
}

export default Home