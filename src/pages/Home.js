import React from 'react';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import './Home.css'; // Create this CSS file for card styling

const Home = () => {
  return (
    <div>
      <section className="section">
        <h2>About Me</h2>
        <div className="card">
          <AboutMe />
        </div>
      </section>
      <section className="section">
        <h2>Contact</h2>
        <div className="card">
          <Contact />
        </div>
      </section>
      <section className="section">
        <h2>Projects</h2>
        <div className="card">
          <Projects />
        </div>
      </section>
      <section className="section">
        <h2>Skills</h2>
        <div className="card">
          <Skills />
        </div>
      </section>
    </div>
  );
};

export default Home;