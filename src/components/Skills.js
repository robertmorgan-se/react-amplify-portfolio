/* src/components/Skills.js */

import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <section className="skills-section">
        <h3>Front End</h3>
        <p className="skills-text">HTML5, CSS3, JavaScript, React</p>
      </section>
      <section className="skills-section">
        <h3>Back End</h3>
        <p className="skills-text">SQL, Firebase, AWS Amplify</p>
      </section>
      <section className="skills-section">
        <h3>Programming Languages</h3>
        <p className="skills-text">Python, Java, C#, C++, JavaScript</p>
      </section>
      <section className="skills-section">
        <h3>Tools & Technologies</h3>
        <p className="skills-text">GitHub, Visual Studio, Firebase, Oracle SQL Developer, MySQL</p>
      </section>
      <section className="skills-section">
        <h3>Other Relevant Skills</h3>
        <p className="skills-text">User Interface(UI), Android Development, Analysis Skills, Research, IoT</p>
      </section>
      
    </div>
  );
};

export default Skills;
