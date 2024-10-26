import IconCloud from "./magicui/IconCloud";
import "../css/skills.css";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaGit, FaJira, FaGithub, FaPython, FaJenkins } from "react-icons/fa";
import { SiApachekafka,SiNginx, SiMysql, SiTestinglibrary, SiSpringboot, SiSpring } from "react-icons/si";
import {VscVscodeInsiders} from "react-icons/vsc";
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
  { name: "VS Code", icon: <VscVscodeInsiders /> },
  { name: "Apache Kafka", icon: <SiApachekafka /> },
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
        } else {
          setShowSkills(false); // Reset the skills display when out of view
        }
      },
      { threshold: 0.2 }
    );

    const currentSkillsRef = skillsRef.current;

    if (currentSkillsRef) {
      observer.observe(currentSkillsRef);
    }

    return () => {
      if (currentSkillsRef) {
        observer.unobserve(currentSkillsRef);
      }
    };
  }, []);

  return (
    <div className="skills-container" ref={skillsRef}>
      <div className="skills-header">
        <h2 className={`check ${showSkills ? 'show' : ''}`}>Check out my skills</h2>
      </div>

      <div className={`icon-cloud`}>
        <IconCloud iconSlugs={skills.map(skill => skill.name.toLowerCase().replace(/\s+/g, ''))} />
      </div>

      <div className={`rounded-skills-table`}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`skill-card ${showSkills ? 'animate' : ''}`} 
            style={{ '--delay': index }} // Pass index for staggered animation
          >
            <div className="icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
