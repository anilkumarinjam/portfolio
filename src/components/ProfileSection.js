import profileImage from '../assets/ai.png';
import resume from '../assets/Anil_Resume_Dev.pdf';
import HyperText from './magicui/HyperText.js';
import RainbowButton from "./magicui/RainbowButton.js";
import '../css/Profile.css';
const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="image-container">
        <img src={profileImage} alt="Anil Kumar Injam"/>
      </div>
      <div className="text-content">
        <h1>
          HI THERE! I'M <span><HyperText text="Anil Kumar Injam"/></span>
        </h1>
        <p>
          A <span>Full Stack Software Engineer</span> with expertise in developing
          high-quality applications and cloud infrastructure.
        </p>
        <RainbowButton><a href={resume}>Resume</a></RainbowButton>
        <div className="social-icons">
          <a href="https://linkedin.com/in/anilkumarinjam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/anilkumarinjam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
