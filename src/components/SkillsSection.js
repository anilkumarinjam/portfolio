// Skills.js
import IconCloud from "./magicui/IconCloud";
import "../css/skills.css"; // Import the updated CSS file
import TextRevealByWord from './magicui/TextRevealByWord';

const slugs = [
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "amazonaws",
  "mysql",
  "nginx",
  "testinglibrary",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "apachekafka",
  "jenkins",
  "python",
  "springboot",
  "spring"
];

export default function Skills() {
  return (
    <div className="skills-container">
        <TextRevealByWord text={"Check out my skills" }/>
    {/* <h2 className="skills-header">Check out my skills</h2> */}
      <div className="skills">
        <div className="icon-cloud">
      </div>
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}