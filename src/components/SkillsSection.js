import IconCloud from "./magicui/IconCloud";
import "../css/skills.css"; // Import the updated CSS file
import TextRevealByWord from './magicui/TextRevealByWord';
import AnimatedList from "./magicui/AnimatedList"; // Import your animated list
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaGit, FaJira, FaGithub, FaPython, FaJenkins } from "react-icons/fa";
import { SiNginx, SiMysql, SiTestinglibrary, SiSpringboot, SiSpring } from "react-icons/si"; // Other icons

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
  { name: "VS Code", icon: <FaReact /> }, // No dedicated icon, reusing FaReact for example
  { name: "Apache Kafka", icon: <FaReact /> }, // You can replace with a Kafka logo if desired
  { name: "Jenkins", icon: <FaJenkins /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Spring Framework", icon: <SiSpring /> }
];

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-background" /> {/* Gradient background */}
      <TextRevealByWord text={"Check out my skills"} />
      <div className="skills-content">
        <div className="icon-cloud">
          <IconCloud iconSlugs={skills.map(skill => skill.name.toLowerCase().replace(/\s+/g, ''))} />
        </div>
        <div className="animated-list">
          <AnimatedList>
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-icon">{skill.icon}</span>
                {skill.name}
              </div>
            ))}
          </AnimatedList>
        </div>
      </div>
    </div>
  );
}
