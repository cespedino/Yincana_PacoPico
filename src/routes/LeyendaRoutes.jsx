import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Fase1 from '../leyendaPM/Fase1';
import Fase2 from '../leyendaPM/Fase2';
import Fase3 from '../leyendaPM/Fase3';
import Fase4J1 from '../leyendaPM/Fase4J1.jsx';
import Fase4J2 from '../leyendaPM/Fase4J2';
import Fase4J3 from '../leyendaPM/Fase4J3.jsx';
import Fase4J4 from '../leyendaPM/Fase4J4';
import Fase4J5 from '../leyendaPM/Fase4J5';
import Fase4J6 from '../leyendaPM/Fase4J6';
import Fase5J1 from '../leyendaPM/Fase5J1.jsx';
import Fase5J2 from '../leyendaPM/Fase5J2';
import Fase5J3 from '../leyendaPM/Fase5J3.jsx';
import Fase5J4 from '../leyendaPM/Fase5J4';
import Fase5J5 from '../leyendaPM/Fase5J5';
import Fase5J6 from '../leyendaPM/Fase5J6';
import Fase6 from '../leyendaPM/Fase6';
import Fase7 from '../leyendaPM/Fase7';
import Fase8 from '../leyendaPM/Fase8';
import Fase9 from '../leyendaPM/Fase9';

const LeyendaRoutes = () => {
  return (
    <Routes>
      <Route path="/fase1" element={<Fase1 />} />
      <Route path="/fase2" element={<Fase2 />} />
      <Route path="/fase3" element={<Fase3 />} />
      <Route path="/fase4J1" element={<Fase4J1 />} />
      <Route path="/fase4J2" element={<Fase4J2 />} />
      <Route path="/fase4J3" element={<Fase4J3 />} />
      <Route path="/fase4J4" element={<Fase4J4 />} />
      <Route path="/fase4J5" element={<Fase4J5 />} />
      <Route path="/fase4J6" element={<Fase4J6 />} />
      <Route path="/fase5J1" element={<Fase5J1 />} />
      <Route path="/fase5J2" element={<Fase5J2 />} />
      <Route path="/fase5J3" element={<Fase5J3 />} />
      <Route path="/fase5J4" element={<Fase5J4 />} />
      <Route path="/fase5J5" element={<Fase5J5 />} />
      <Route path="/fase5J6" element={<Fase5J6 />} />
      <Route path="/fase6" element={<Fase6 />} />
      <Route path="/fase7" element={<Fase7 />} />
      <Route path="/fase8" element={<Fase8 />} />
      <Route path="/fase9" element={<Fase9 />} />
    </Routes>
  );
};

export default LeyendaRoutes;