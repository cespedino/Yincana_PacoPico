import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Fase1 from '../city/Fase1';
import Fase2 from '../city/Fase2';
import Fase3 from '../city/Fase3';
import Fase4 from '../city/Fase4';
import Fase5 from '../city/Fase5';
import Fase6 from '../city/Fase6';
import Fase7 from '../city/Fase7';
import Fase8 from '../city/Fase8';

const AlvaroRoutes = () => {
  return (
    <Routes>
      <Route path="/fase1" element={<Fase1 />} />
      <Route path="/fase2" element={<Fase2 />} />
      <Route path="/fase3" element={<Fase3 />} />
      <Route path="/fase4" element={<Fase4 />} />
      <Route path="/fase5" element={<Fase5 />} />
      <Route path="/fase6" element={<Fase6 />} />
      <Route path="/fase7" element={<Fase7 />} />
      <Route path="/fase8" element={<Fase8 />} />
    </Routes>
  );
};

export default AlvaroRoutes;