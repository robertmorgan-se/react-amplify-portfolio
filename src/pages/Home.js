import AboutMe from '../components/sections/AboutMe';
import Contact from '../components/sections/Contact';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import SectionCard from '../components/ui/SectionCard';

const Home = () => {
  return (
      <div className="bg-slate-100 text-gray-800 pt-24 pb-10 px-4 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
        <section className="mb-10" id="about-me">
          <SectionCard title="About Me">
            <AboutMe />
          </SectionCard>
        </section>
        <section className="mb-10" id="skills">
          <SectionCard title="Skills">
            <Skills />
          </SectionCard>
        </section>
        <section className="mb-10" id="projects">
          <SectionCard title="Projects">
            <Projects />
          </SectionCard>
        </section>
        <section className="mb-10" id="contact">
          <SectionCard title="Contact">
            <Contact />
          </SectionCard>
        </section>
      </div>
  );
};

export default Home;
