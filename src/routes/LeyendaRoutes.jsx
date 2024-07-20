import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Fase1L from '../leyendaPM/Fase1L';


const LeyendaRoutes = () => {
  return (
    <Routes>
      <Route path="/fase1L" element={<Fase1L />} />
    </Routes>
  );
};

export default LeyendaRoutes;