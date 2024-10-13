import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation(); // Hook to get the current route

  // Toggle the menu on icon click
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Automatically close the menu when the user navigates to a different route
  useEffect(() => {
    setMenuVisible(false);
  }, [location]);

  return (
    <div>
      {/* Animated Hamburger/X Icon */}
      <div className={`menu-icon ${menuVisible ? 'open' : ''}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuVisible ? faTimes : faBars} />
      </div>

      {/* Navbar: only show when menuVisible is true */}
      {menuVisible && (
        <nav className="sidebar">
          <div className="initials-div">AK</div>
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
        </nav>
      )}
    </div>
  );
};

export default Navbar;
