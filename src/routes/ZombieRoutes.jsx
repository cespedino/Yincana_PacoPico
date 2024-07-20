import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Fase1 from '../zombie/Fase1';
import Fase2 from '../zombie/Fase2';
import Fase3 from '../zombie/Fase3';

const ZombieRoutes = () => {
  return (
    <Routes>
      <Route path="/fase1" element={<Fase1 />} />
      <Route path="/fase2" element={<Fase2 />} />
      <Route path="/fase3" element={<Fase3 />} />
    </Routes>
  );
};

export default ZombieRoutes;