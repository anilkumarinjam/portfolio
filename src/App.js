import React from 'react';
// import { HashRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './css/App.css'; 
import './css/globals.css';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Routes basename="portfolio">
          <Route path="/portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
