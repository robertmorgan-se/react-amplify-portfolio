import { Link } from 'react-scroll';

const Header = () => {
  return (
<header className="fixed top-0 left-0 w-full bg-slate-800 text-white shadow-lg z-50 ">
      <nav className="max-w-md mx-auto px-4">
        <ul className="flex justify-between items-center py-4 text-sm font-medium tracking-wide">
          <li>
            <Link to="about-me" smooth={true} duration={300} offset={-76} className="cursor-pointer hover:underline">
              About Me
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={300} offset={-76} className="cursor-pointer hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={300}offset={-76}  className="cursor-pointer hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={300} offset={-76} className="cursor-pointer hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
