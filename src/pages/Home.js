import AboutMe from '../components/sections/AboutMe';
import Contact from '../components/sections/Contact';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import SectionCard from '../components/ui/SectionCard';
import './Home.css';

const Home = () => {
  return (
      <div className="main-content">
        <section className="section" id="about-me">
          <h2>About Me</h2>
          <SectionCard>
            <AboutMe />
          </SectionCard>
        </section>
        <section className="section" id="skills">
          <h2>Skills</h2>
          <SectionCard>
            <Skills />
          </SectionCard>
        </section>
        <section className="section" id="projects">
          <h2>Projects</h2>
          <SectionCard>
            <Projects />
          </SectionCard>
        </section>
        <section className="section" id="contact">
          <h2>Contact</h2>
          <SectionCard>
            <Contact />
          </SectionCard>
        </section>
      </div>
  );
};

export default Home;
