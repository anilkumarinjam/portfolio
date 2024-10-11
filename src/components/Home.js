import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/ai.png';
import resume from '../assets/Anil_Resume_Dev.pdf'; 
import '../css/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <motion.div className="profile-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div className="image-container">
          <img src={profileImage} alt="Anil Kumar Injam" width="300" />
        </div>
        <div className="text-content">
          <h1>HI THERE! I'M <span>Anil Kumar Injam</span></h1>
          <p>
            A <span>Full Stack Software Engineer</span> with expertise in
            developing high-quality applications and cloud infrastructure.
          </p>
          
          <a className="button" href={resume}> Resume </a>
          
          <div className="social-icons">
            <a href="https://linkedin.com/in/anilkumarinjam" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/anilkumarinjam" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
