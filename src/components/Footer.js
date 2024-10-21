import React from 'react';
import '../css/Footer.css';
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa'; // Added FaArrowUp for the arrow

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Fetch the current year dynamically

  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#profile" className="footer-link">
          Back to top <FaArrowUp className="arrow-icon" /> {/* Arrow icon after "Back to top" */}
        </a>
        <a href="mailto:injamanilchowdary@gmail.com" className="footer-link">
          injamanilchowdary@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/anilkumarinjam" className="footer-icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/AnilKumarInjam" className="footer-icon" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className="footer-name">
        © {currentYear} Anil Kumar Injam {/* Dynamically display the current year */}
      </div>
    </footer>
  );
};

export default Footer;
