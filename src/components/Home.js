import { motion } from 'framer-motion';
import Safari from "./magicui/Safari";
import SkillsSection from './SkillsSection.js';
import About from './About.js';
import Projects from './Projects.jsx';
import Footer from './Footer.js';
import '../css/Home.css';
import '../css/Projects.css';
import Hero from './Hero.jsx';

const Home = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 3 }}>
        <div className="relative z-0" id='profile'>
          <Hero />
        </div>
      {/* <div id='profile'>
        <Retrogrid />
        <ProfileSection />
      </div> */}
      <div id='about'>
        <About/>
      </div>

      <div id='skills'>
        <SkillsSection />
      </div>
      <Projects/>
      {/* <div className="overlay-container" id='projects'>
        <Safari url="anilkumarinjam.github.io" />
        <Projects />
      </div> */}
      <Footer />
    </motion.div>
  );
};

export default Home;
