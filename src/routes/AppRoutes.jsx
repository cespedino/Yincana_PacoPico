import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Instrucciones from '../pages/Instrucciones';
import Teorema_PP from '../pages/Teorema_PP';
import TeoremaRoutes from './TeoremaRoutes';
import Leyenda from '../pages/Leyenda';
import LeyendaRoutes from './LeyendaRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Yincana_PacoPico" element={<Home />} />
      <Route path="/Instrucciones" element={<Instrucciones />} />
      <Route path="/Teorema_PP" element={<Teorema_PP />} />
      <Route path="/Leyenda" element={<Leyenda />} />
      <Route path="/Teorema/*" element={<TeoremaRoutes />} />
      <Route path="/LeyendaPM/*" element={<LeyendaRoutes />} />
    </Routes>
  );
};

export default AppRoutes;

