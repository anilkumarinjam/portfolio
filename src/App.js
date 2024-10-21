import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './css/App.css'; 
import './css/globals.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Use effect to detect screen size on load
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set true if screen width is <= 768px (mobile devices)
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Listen for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the listener
    };
  }, []);

  if (isMobile) {
    return (
      <div className="mobile-warning">
        This application cannot be rendered on mobile devices. Please view it on a desktop browser.
      </div>
    );
  }

  return (
    <Router basename="/portfolio">
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
