import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './css/globals.css';
import Header from './components/header';
function App() {
  return (
    <Router basename="/portfolio">
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
