import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Instrucciones from '../pages/Instrucciones';
import Teorema_PP from '../pages/Teorema_PP';
import TeoremaRoutes from './TeoremaRoutes';
import Leyenda from '../pages/Leyenda';
import LeyendaRoutes from './LeyendaRoutes';
import Zombie from '../pages/Zombie';
import ZombieRoutes from './ZombieRoutes';
import City from '../pages/city';
import AlvaroRoutes from './AlvaroRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Yincana_PacoPico" element={<Home />} />
      <Route path="/Instrucciones" element={<Instrucciones />} />
      <Route path="/Teorema_PP" element={<Teorema_PP />} />
      <Route path="/Leyenda" element={<Leyenda />} />
      <Route path="/Zombie" element={<Zombie />} />
      <Route path="/Teorema/*" element={<TeoremaRoutes />} />
      <Route path="/LeyendaPM/*" element={<LeyendaRoutes />} />
      <Route path="/Zombie/*" element={<ZombieRoutes />} />
      <Route path="/city" element={<City />} />
      <Route path="/city/*" element={<AlvaroRoutes />} />
    </Routes>
  );
};

export default AppRoutes;

