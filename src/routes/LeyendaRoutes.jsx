import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Fase1 from '../leyendaPM/Fase1';
import Fase2 from '../leyendaPM/Fase2';
import Fase3 from '../leyendaPM/Fase3';
import Fase4 from '../leyendaPM/Fase4';


const LeyendaRoutes = () => {
  return (
    <Routes>
      <Route path="/fase1" element={<Fase1 />} />
      <Route path="/fase2" element={<Fase2 />} />
      <Route path="/fase3" element={<Fase3 />} />
      <Route path="/fase4" element={<Fase4 />} />
    </Routes>
  );
};

export default LeyendaRoutes;