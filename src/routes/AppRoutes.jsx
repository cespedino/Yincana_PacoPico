import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import TeoremaRoutes from './TeoremaRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Yincana_PacoPico" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<TeoremaRoutes />} /> {/* Enruta las rutas de Teorema */}
    </Routes>
  );
};

export default AppRoutes;
