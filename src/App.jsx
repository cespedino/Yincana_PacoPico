import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navbar';
import Home from './pages/home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Fase1 from './teorema/Fase1.jsx';
import Fase2 from './teorema/Fase2.jsx';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div>
      <Routes>
        <Route path="/Yincana_PacoPico" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fase1" element={<Fase1 />} />
        <Route path="/fase2" element={<Fase2 />} /> 
      </Routes>
      </div>
    </Router>
  );
}

export default App;

