import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './css/App.css'; 
import './css/globals.css';
import Hero from './components/Hero';
import Header from './components/header';
function App() {
  return (
    <Router basename="/portfolio">
      {/* <div className="relative z-0">
        <div>
          <Header />
          <Hero />
        </div>
      </div> */}
      <Header />
      {/* <Navbar /> */}
      <div className="content-wrapper">
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
