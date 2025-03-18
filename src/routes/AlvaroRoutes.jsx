import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Fase1 from '../city/Fase1';
import Fase2 from '../city/Fase2';
import Fase3 from '../city/Fase3';
import Fase4 from '../city/Fase4';


const AlvaroRoutes = () => {
  return (
    <Routes>
      <Route path="/fase1" element={<Fase1 />} />
      <Route path="/fase2" element={<Fase2 />} />
      <Route path="/fase3" element={<Fase3 />} />
      <Route path="/fase4" element={<Fase4 />} />
    </Routes>
  );
};

export default AlvaroRoutes;