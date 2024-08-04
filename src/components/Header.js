import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header style={{ position: 'fixed', width: '100%', top: 0 }}>
      <nav>
        <ul>
          <li>
            <Link to="about-me" smooth={true} duration={500}>About Me</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
