// Skills.js
import IconCloud from "./magicui/IconCloud";
import "../css/skills.css"; // Import the updated CSS file

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
      <div className="icon-cloud">
        <IconCloud iconSlugs={slugs} />
      </div>
      <div className="skills-list">
        {slugs.map((slug) => (
          <div className="skill-item" key={slug}>
            <img
              className="skill-icon"
              src={`path_to_icons/${slug}.png`} // Update this to your icon path
              alt={slug}
            />
            <span>{slug.charAt(0).toUpperCase() + slug.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
