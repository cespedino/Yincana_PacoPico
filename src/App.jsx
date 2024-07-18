import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navbar';
import Home from './pages/home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Fase1 from './teorema/Fase1.jsx';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div style={{ paddingTop: '20px' }}>
      <Routes>
        <Route path="/Yincana_PacoPico" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fase1" element={<Fase1 />} /> 
      </Routes>
      </div>
    </Router>
  );
}

export default App;

