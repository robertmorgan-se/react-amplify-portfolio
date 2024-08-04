import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="background">
        <Header />
        <div className="main-conent"> {/* Ensures padding for the header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
