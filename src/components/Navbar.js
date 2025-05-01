import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      {/* Mobile Menu */}
      <div className="navbar-right-menubar">
        {isMenuOpen ? (
          <div className="navbar-menu-options">
            <CloseIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <Link onClick={() => setIsMenuOpen(false)} to="home" spy={true} smooth={true} duration={500}>
              home
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} to="about" spy={true} smooth={true} duration={500}>
              about
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} to="skills" spy={true} smooth={true} duration={500}>
              skills
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} to="projects" spy={true} smooth={true} duration={500}>
              projects
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} to="experience" spy={true} smooth={true} duration={500}>
              experience
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} to="education" spy={true} smooth={true} duration={500}>
              education
            </Link>
          </div>
        ) : (
          <MenuIcon onClick={() => setIsMenuOpen(true)} />
        )}
      </div>

      {/* Desktop Menu */}
      <div className="navbar-right-options">
        <Link to="home" spy={true} smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          About
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="experience" spy={true} smooth={true} duration={500}>
          Experience
        </Link>
        <Link to="education" spy={true} smooth={true} duration={500}>
          Education
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
