import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Fase1 from '../spiderman/Fase1';
import Fase2 from '../spiderman/Fase2';
import Fase3 from '../spiderman/Fase3';
import Fase4 from '../spiderman/Fase4';
import Fase5 from '../spiderman/Fase5';
import Fase6 from '../spiderman/Fase6';

const SpidermanRoutes = () => {
  return (
    <Routes>
      <Route path="/fase1" element={<Fase1 />} />
      <Route path="/fase2" element={<Fase2 />} />
      <Route path="/fase3" element={<Fase3 />} />
      <Route path="/fase4" element={<Fase4 />} />
      <Route path="/fase5" element={<Fase5 />} />
      <Route path="/fase6" element={<Fase6 />} />
    </Routes>
  );
};

export default SpidermanRoutes;