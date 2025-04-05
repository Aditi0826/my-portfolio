import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope, FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`sidebar ${isOpen ? "open" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </div>

      <ul>
        <li>
          <Link to="home" smooth={true} duration={500} offset={-50}>
            <FaHome className="icon" />
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-50}>
            <FaUser className="icon" />
            <span className="link-text">About</span>
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-50}>
            <FaCode className="icon" />
            <span className="link-text">Skills</span>
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500} offset={-50}>
            <FaBriefcase className="icon" />
            <span className="link-text">Experience</span>
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-50}>
            <FaProjectDiagram className="icon" />
            <span className="link-text">Projects</span>
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-50}>
            <FaEnvelope className="icon" />
            <span className="link-text">Contact</span>
          </Link>
        </li>

        {/* Example route-based navigation */}
        {/* <li>
          <RouterLink to="/blog">
            <FaBook className="icon" />
            <span className="link-text">Blog</span>
          </RouterLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
