import IconCloud from "./magicui/IconCloud";
import "../css/skills.css";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaGit, FaJira, FaGithub, FaPython, FaJenkins } from "react-icons/fa";
import { SiApachekafka, SiNginx, SiMysql, SiTestinglibrary, SiSpringboot, SiSpring } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import {IoLogoJavascript} from 'react-icons/io5';
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "JavaScript", icon: <IoLogoJavascript style={{ color: '#f7df1e' }} /> },
  { name: "Java", icon: <FaJava style={{ color: '#007396' }} /> },
  { name: "React", icon: <FaReact style={{ color: '#61dafb' }} /> },
  { name: "HTML5", icon: <FaHtml5 style={{ color: '#e34f26' }} /> },
  { name: "CSS3", icon: <FaCss3Alt style={{ color: '#1572b6' }} /> },
  { name: "Amazon Web Services", icon: <FaAws style={{ color: '#ff9900' }} /> },
  { name: "MySQL", icon: <SiMysql style={{ color: '#00758f' }} /> },
  { name: "Nginx", icon: <SiNginx style={{ color: '#269539' }} /> },
  { name: "Testing Library", icon: <SiTestinglibrary style={{ color: '#e34c26' }} /> },
  { name: "Docker", icon: <FaDocker style={{ color: '#2496ed' }} /> },
  { name: "Git", icon: <FaGit style={{ color: '#f34f29' }} /> },
  { name: "Jira", icon: <FaJira style={{ color: '#0052cc' }} /> },
  { name: "GitHub", icon: <FaGithub style={{ color: '#181717' }} /> },
  { name: "VS Code", icon: <VscVscodeInsiders style={{ color: '#007acc' }} /> },
  { name: "Apache Kafka", icon: <SiApachekafka style={{ color: '#231f20' }} /> },
  { name: "Jenkins", icon: <FaJenkins style={{ color: '#d24939' }} /> },
  { name: "Python", icon: <FaPython style={{ color: '#3776ab' }} /> },
  { name: "Spring Boot", icon: <SiSpringboot style={{ color: '#6db33f' }} /> },
  { name: "Spring Framework", icon: <SiSpring style={{ color: '#6db33f' }} /> }
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
          setShowSkills(false);
        }
      },
      { threshold: 0.5}
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
        <h2 className={`check ${showSkills ? 'show' : ''}`}>
          Check{" "}
          <span className="icon-o">
            <IconCloud iconSlugs={skills.map(skill => skill.name.toLowerCase().replace(/\s+/g, ''))} />
          </span>{" "}
          ut my skills
        </h2>
      </div>

      <div className={`rounded-skills-table`}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`skill-card ${showSkills ? 'animate' : ''}`} 
            style={{ '--delay': index }}
          >
            <div className="icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
