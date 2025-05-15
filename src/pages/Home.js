import React from 'react';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import './Home.css';

const Home = () => {
  return (
      <div className="main-content">
        <section className="section" id="about-me">
          <h2>About Me</h2>
          <div className="card">
            <AboutMe />
          </div>
        </section>
        <section className="section" id="skills">
          <h2>Skills</h2>
          <div className="card">
            <Skills />
          </div>
        </section>
        <section className="section" id="projects">
          <h2>Projects</h2>
          <div className="card">
            <Projects />
          </div>
        </section>
        <section className="section" id="contact">
          <h2>Contact</h2>
          <div className="card">
            <Contact />
          </div>
        </section>
      </div>
  );
};

export default Home;
