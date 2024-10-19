import IconCloud from "./magicui/IconCloud";
import "../css/skills.css";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaGit, FaJira, FaGithub, FaPython, FaJenkins } from "react-icons/fa";
import { SiNginx, SiMysql, SiTestinglibrary, SiSpringboot, SiSpring } from "react-icons/si";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "JavaScript", icon: <FaReact /> },
  { name: "Java", icon: <FaJava /> },
  { name: "React", icon: <FaReact /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Amazon Web Services", icon: <FaAws /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Nginx", icon: <SiNginx /> },
  { name: "Testing Library", icon: <SiTestinglibrary /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Git", icon: <FaGit /> },
  { name: "Jira", icon: <FaJira /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "VS Code", icon: <FaReact /> },
  { name: "Apache Kafka", icon: <FaReact /> },
  { name: "Jenkins", icon: <FaJenkins /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Spring Framework", icon: <SiSpring /> }
];

export default function Skills() {
  const skillsRef = useRef(null);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSkills(true);
          observer.disconnect(); // Stop observing once the element is in view
        }
      },
      { threshold: 0.9 } // Trigger when 10% of the component is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (showSkills) {
      const skillsBackground = skillsRef.current.querySelector('.skills-background');
      const skillElements = skillsBackground.querySelectorAll('.skill-background-text');

      // Randomize positions
      skillElements.forEach(element => {
        const x = Math.random() * (skillsBackground.offsetWidth - element.offsetWidth);
        const y = Math.random() * (skillsBackground.offsetHeight - element.offsetHeight);

        element.style.position = 'absolute'; // Set position to absolute
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
      });
    }
  }, [showSkills]);

  return (
    <div className="skills-container" ref={skillsRef}>
      <div className="skills-background">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className={`skill-background-text ${showSkills ? 'show' : ''}`}
          >
            {skill.name}
          </span>
        ))}
      </div>
      <h2 className={`skills-header ${showSkills ? 'show' : ''}`}>Check out my skills</h2>
      <div className="skills-content">
        <div className="icon-cloud">
          <IconCloud iconSlugs={skills.map(skill => skill.name.toLowerCase().replace(/\s+/g, ''))} />
        </div>
      </div>
    </div>
  );
}
