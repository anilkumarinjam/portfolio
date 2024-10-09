import React, { useState, useEffect, useRef } from 'react';
import '../css/About.css';

const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [userInput, setUserInput] = useState('');
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);
  const inputRef = useRef(null);

  // Function to get formatted date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'short' });
    const month = now.toLocaleDateString('en-US', { month: 'short' });
    const date = now.getDate();
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    return `login: ${day} ${month} ${date} ${time} on console`;
  };

  // Store the full text including the date and time only once
  const [fullText] = useState(` 
<span class="welcome"> ${getCurrentDateTime()} </span>

Hello! My name is Anil Kumar Injam.

I'm a Software Engineer with experience & strong foundation in <span class="highlight">backend development</span>, <span class="highlight">cloud computing</span>, and <span class="highlight">data integration</span>. Demonstrated expertise in <span class="highlight">Java</span>, <span class="highlight">Python</span>, and <span class="highlight">Spring Boot</span>, with hands-on experience in developing scalable web applications and real-time communication systems. Passionate about leveraging technology to solve complex challenges and committed to continuous learning in emerging technologies.

I'm graduating in Dec 2024 and am <span class="red">actively seeking a full-time software engineering position.</span> I am always eager to explore new opportunities for learning and growth. Feel free to reach out to me if you have any questions or just want to connect!

                                                <span class="welcome">Welcome to my portfolio!</span>

Change Directory to Navigate: 
cd Home 
cd Projects 
cd Contact
(base) user@mac ~ % `);

  useEffect(() => {
    setDisplayedText('');
    indexRef.current = 0;

    const typingSpeed = 3; // Adjust the typing speed if necessary

    const typeText = () => {
      if (indexRef.current < fullText.length-1) {
        setDisplayedText((prev) => prev + fullText[indexRef.current]);
        indexRef.current++;
        timeoutRef.current = setTimeout(typeText, typingSpeed);
      }
    };

    typeText();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [fullText]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Automatically focus the input area
    }
  }, []);

  // Function to handle user input with Enter key navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default behavior
      if (userInput === 'cd Home') {
        window.location.href = '/my-portfolio';
      } else if (userInput === 'cd Projects') {
        window.location.href = '/projects';
      } else if (userInput === 'cd Contact') {
        window.location.href = '/contact';
      } else {
        alert('Please enter a valid option (cd Home, cd Projects, or cd Contact).');
      }
      setUserInput(''); // Clear the input after submission
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.textContent);
  };

  const handleKeyPress = (e) => {
    if (e.key.length === 1) {
      setUserInput((prev) => prev + e.key); // Add the pressed key to the input
      e.preventDefault(); // Prevent default behavior to avoid duplication
    }
  };

  const handleBackspace = (e) => {
    if (e.key === 'Backspace') {
      e.preventDefault(); // Prevent default backspace behavior
      setUserInput((prev) => prev.slice(0, -1)); // Remove last character
    }
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="buttons">
          <span className="close-btn"></span>
          <span className="minimize-btn"></span>
          <span className="maximize-btn"></span>
        </div>
        <div className="terminal-title">About - zsh - 80 x 24</div>
      </div>
      <div className="terminal-body">
        <pre dangerouslySetInnerHTML={{ __html: displayedText.trim() }} />
        <div style={{ display: 'inline', position: 'relative' }}>
          <div
            ref={inputRef}
            className="input-line"
            contentEditable
            suppressContentEditableWarning
            tabIndex={0}
            onKeyDown={(e) => {
              handleKeyDown(e);
              handleBackspace(e);
            }}
            onInput={handleInputChange}
            onKeyPress={handleKeyPress}
            style={{
              outline: 'none',
              display: 'inline',
              position: 'relative',
              caretColor: 'transparent', // Hide the default caret
              whiteSpace: 'nowrap', // Prevent text wrapping
              overflowWrap: 'normal', // Prevent breaking words
            }}
          >
            {userInput}
          </div>
          <span className="cursor"></span> {/* Custom blinking cursor */}
        </div>
      </div>
    </div>
  );
};

export default About;
