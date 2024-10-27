import { motion } from 'framer-motion';
import SkillsSection from './SkillsSection.js';
import About from './About.js';
import Projects from './Projects.jsx';
import Footer from './Footer.js';
import '../css/Home.css';
import Profile from './Profile.jsx';
import Experience from './Experience.jsx';
import Contact from './Contact.jsx';
import Certifications from './Certifications.jsx';

const Home = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 3 }}>
        <div className="relative z-0" id='profile'>
          <Profile />
        </div>
      <div id='about'>
        <About/>
      </div>

      <div id='skills'>
        <SkillsSection />
      </div>
      <div id='projects'><Projects/></div>
        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]" id='exp'>
            <Experience />
          </div>
        </div>
        <div id='certs'><Certifications/></div>
        <div className="relative z-0">
          <Contact />
        </div>
      <Footer />
    </motion.div>
  );
};

export default Home;
