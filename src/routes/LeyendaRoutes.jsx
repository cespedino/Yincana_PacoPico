import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Fase1 from '../leyendaPM/Fase1';
import Fase2 from '../leyendaPM/Fase2';
import Fase3 from '../leyendaPM/Fase3';
import Fase4 from '../leyendaPM/Fase4';
import Fase5J1 from '../leyendaPM/Fase5J1.jsx';
import Fase5J2 from '../leyendaPM/Fase5J2';
import Fase5J3 from '../leyendaPM/Fase5J3.jsx';
import Fase5J4 from '../leyendaPM/Fase5J4';
import Fase5J5 from '../leyendaPM/Fase5J5';
import Fase5J6 from '../leyendaPM/Fase5J6';

const LeyendaRoutes = () => {
  return (
    <Routes>
      <Route path="/fase1" element={<Fase1 />} />
      <Route path="/fase2" element={<Fase2 />} />
      <Route path="/fase3" element={<Fase3 />} />
      <Route path="/fase4" element={<Fase4 />} />
      <Route path="/fase5J1" element={<Fase5J1 />} />
      <Route path="/fase5J2" element={<Fase5J2 />} />
      <Route path="/fase5J3" element={<Fase5J3 />} />
      <Route path="/fase5J4" element={<Fase5J4 />} />
      <Route path="/fase5J5" element={<Fase5J5 />} />
      <Route path="/fase5J6" element={<Fase5J6 />} />
    </Routes>
  );
};

export default LeyendaRoutes;