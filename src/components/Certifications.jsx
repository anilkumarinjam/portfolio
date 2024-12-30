import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import awsccp from '../assets/awsccp.png';
import awssaa from '../assets/awssaa.png';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const projects = [
  {
    id: 'cert-1',
    name: 'AWS',
    description: 'AWS Certified Cloud Practitioner.',
    image: awsccp,
    verify: 'https://www.credly.com/badges/04bcdb86-657c-44c8-9018-8bba6f8eacd5/public_url',
  },
  {
    id: 'cert-2',
    name: 'DSA',
    description: 'AWS Certified Solutions Architect - Associate.',
    image: awssaa,
    verify: 'https://www.credly.com/badges/99e1c2a0-2f1b-4835-8840-ba5c628d54d1/public_url',
  },
];

const ProjectCard = ({ name, description, image, verify, index }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="relative lg:flex-[3.5] flex-[10] flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow">
      
      <div className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      <div className="absolute bottom-0 p-8 justify-start w-full 
          flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
        
        <h2 className="font-bold sm:text-[32px] text-[24px] 
          text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
          {name}
        </h2>
        
        <p className="text-silver sm:text-[14px] text-[12px] 
          max-w-3xl sm:leading-[24px] leading-[18px]
          font-poppins tracking-[1px]">
          {description}
        </p>

        <button
          className="live-demo flex justify-center 
          sm:text-[16px] text-[14px] text-timberWolf 
          font-bold font-beckman items-center py-5 pl-2 pr-3 
          whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
          w-[125px] h-[46px] rounded-[10px] glassmorphism 
          sm:mt-[22px] mt-[16px] hover:bg-battleGray 
          hover:text-eerieBlack transition duration-[0.2s] 
          ease-in-out"
          onClick={() => window.open(verify, '_blank')}>
          VERIFY
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadTextLight}`}>Certifications.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          These are my official active certifications.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
