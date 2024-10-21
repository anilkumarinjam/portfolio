import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope, faBars, faTimes, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolling down
      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setScrollingDown(true); // Hide hamburger when scrolling down
      } else {
        setScrollingDown(false); // Show hamburger when scrolling up
      }

      setPrevScrollY(currentScrollY); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]); // Add prevScrollY as a dependency

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Animated Hamburger/X Icon */}
      {!scrollingDown && (
        <div className={`menu-icon ${menuVisible ? 'open' : ''}`} onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuVisible ? faTimes : faBars} />
        </div>
      )}

      {/* Navbar: only show when menuVisible is true */}
      {menuVisible && (
        <nav className="sidebar">
          <div className="initials-div">AK</div>
          <div className="nav-links-container">
            <a className="nav-link" href="#profile" onClick={() => setMenuVisible(false)}>
              <div className="icon"><FontAwesomeIcon icon={faHome} /></div>
              <span>Home</span>
            </a>
            <a className="nav-link" href="#about" onClick={() => setMenuVisible(false)}>
              <div className="icon"><FontAwesomeIcon icon={faUser} /></div>
              <span>About</span>
            </a>
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

      {/* Scroll to top arrow icon positioned to the left bottom */}
      {scrollingDown && (
        <div className="scroll-arrow" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
