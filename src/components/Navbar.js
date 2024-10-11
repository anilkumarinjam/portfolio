import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="sidebar">
      <div className="initials-div">
        AK
      </div>
      
      <div className="nav-links-container">
        <Link className="nav-link" to="/">
          <div className="icon"><FontAwesomeIcon icon={faHome} /></div>
          <span>Home</span>
        </Link>
        <Link className="nav-link" to="/about">
          <div className="icon"><FontAwesomeIcon icon={faUser} /></div>
          <span>About</span>
        </Link>
        <Link className="nav-link" to="/projects">
          <div className="icon"><FontAwesomeIcon icon={faProjectDiagram} /></div>
          <span>Projects</span>
        </Link>
        <Link className="nav-link" to="/contact">
          <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
          <span>Contact</span>
        </Link>
      </div>
      <div className="scroll-arrow">
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </nav>
  );
};

export default Navbar;
