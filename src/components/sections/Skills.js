/* src/components/Skills.js */

import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <section className="skills-section">
        <h3>Front End</h3>
        <p className="skills-text">HTML5, CSS3, JavaScript, React, Windows Forms, Android Development, Material Design</p>
      </section>
      <section className="skills-section">
        <h3>Back End</h3>
        <p className="skills-text">SQL, Firebase, AWS Amplify, OAuth, API Integration</p>
      </section>
      <section className="skills-section">
        <h3>Programming Languages</h3>
        <p className="skills-text">Python, Java, C#, C++, JavaScript</p>
      </section>
      <section className="skills-section">
        <h3>Tools & Technologies</h3>
        <p className="skills-text">GitHub, Visual Studio, Firebase, Oracle SQL Developer, MySQL, Android Studio, Gradle</p>
      </section>
      <section className="skills-section">
        <h3>Other Relevant Skills</h3>
        <p className="skills-text">User Interface (UI), Android Development, Analysis Skills, Research, IoT</p>
      </section>
      <section className="skills-section">
        <h3>Development Practices</h3>
        <p className="skills-text">Responsive Design, RESTful APIs, Authentication, CI/CD Pipelines, Agile Methodologies, Mobile App Development</p>
      </section>
    </div>
  );
};

export default Skills;
