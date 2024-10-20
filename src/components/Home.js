import { motion } from 'framer-motion';
import Retrogrid from "./magicui/Retrogrid";
import Safari from "./magicui/Safari";
import ProfileSection from './ProfileSection.js';
import SkillsSection from './SkillsSection.js';
import Projects from './Projects.js';
import '../css/Home.css';
import '../css/Projects.css';

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 2 }}
    >
      <div id='profile'>
        <Retrogrid />
        <ProfileSection />
      </div>

      <div id='skills'>
        <SkillsSection />
      </div>

      <div className="overlay-container" id="projects">
        <Safari url="anilkumarinjam.github.io" />
        <Projects />
      </div>
    </motion.div>
  );
};

export default Home;
