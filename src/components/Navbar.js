import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Toggle the menu on icon click
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Automatically close the menu when it is opened
  useEffect(() => {
    if (menuVisible) {
      const handleScroll = () => setMenuVisible(false);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [menuVisible]);

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
          <Link className="nav-link" to="/" onClick={() => setMenuVisible(false)}>
              <div className="icon"><FontAwesomeIcon icon={faHome} /></div>
              <span>Home</span>
              </Link>
            <Link className="nav-link" to="/about" onClick={() => setMenuVisible(false)}>
              <div className="icon"><FontAwesomeIcon icon={faUser} /></div>
              <span>About</span>
            </Link>
            <a className="nav-link" href="#skills" onClick={() => setMenuVisible(false)}>
              <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
              <span>Skills</span>
            </a>
            <a className="nav-link" href="#projects" onClick={() => setMenuVisible(false)}>
              <div className="icon"><FontAwesomeIcon icon={faProjectDiagram} /></div>
              <span>Projects</span>
            </a>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
