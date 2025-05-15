import React from 'react';
import { Link } from 'react-scroll';
import './Header.css'; // Import the CSS file for the header

const Header = () => {
  return (
    <header className="header">
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
