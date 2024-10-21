import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import '../css/Projects.css';
import chat from '../assets/chat.png';
import image from '../assets/task.png';
import api from '../assets/api.png';

const projects = [
  {
    title: "Web-Chat",
    description: "Real-Time Chat Application using WebSocket, Socket.io",
    viewLink: "https://github.com/anilkumarinjam/Projects",
    codeLink: "https://github.com/anilkumarinjam/Projects",
    imageUrl: chat,
  },
  {
    title: "Task Pulse",
    description: "A full stack task management/todo application built using Java, Spring Boot",
    viewLink: "https://github.com/anilkumarinjam/Projects",
    codeLink: "https://github.com/anilkumarinjam/Projects",
    imageUrl: image,
  },
  {
    title: "Course Blend",
    description: "An API interface allowing comprehensive management of course records. Leveraged Spring's Rest services to ensure seamless communication and interaction with the API",
    viewLink: "https://github.com/anilkumarinjam/Projects",
    codeLink: "https://github.com/anilkumarinjam/Projects",
    imageUrl: api,
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.6, // Adjust threshold as needed
      }
    );
  
    const currentProjectsRef = projectsRef.current; // Copy ref value
  
    if (currentProjectsRef) {
      observer.observe(currentProjectsRef);
    }
  
    return () => {
      if (currentProjectsRef) { // Use the copied value in cleanup
        observer.unobserve(currentProjectsRef);
      }
    };
  }, []);
  

  return (
    <motion.section
      id="projects-section"
      className="projects-container"
      ref={projectsRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }} // Start below and fade in
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6, ease: "easeInOut" }} // Smooth transition
          >
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-hover">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className='buttons-container'>
                <a href={project.viewLink} className="view-button" target='_blank' rel="noreferrer">View</a>
                <a href={project.codeLink} className="code-button" target='_blank' rel="noreferrer">Code</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
