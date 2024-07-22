import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Fase1 from '../teorema/Fase1';
import Fase2 from '../teorema/Fase2';
import Fase3 from '../teorema/Fase3';
import Fase4 from '../teorema/Fase4';
import Fase5 from '../teorema/Fase5';
import Fase6 from '../teorema/Fase6';
import Fase7 from '../teorema/Fase7';
import Fase8 from '../teorema/Fase8';
import Fase9 from '../teorema/Fase9';
import Fase10 from '../teorema/Fase10';
import Fase1J1 from '../teorema/Fase1J1';
import Fase1J2 from '../teorema/Fase1J2';
import Fase1J3 from '../teorema/Fase1J3.jsx';
import Fase1J4 from '../teorema/Fase1J4';
import Fase1J5 from '../teorema/Fase1J5';
import Fase1J6 from '../teorema/Fase1J6';

import Final from '../teorema/Final';

const TeoremaRoutes = () => {
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
      <Route path="/fase9" element={<Fase9 />} />
      <Route path="/fase10" element={<Fase10 />} />
      <Route path="/fase1J1" element={<Fase1J1 />} />
      <Route path="/fase1J2" element={<Fase1J2 />} />
      <Route path="/fase1J3" element={<Fase1J3 />} />
      <Route path="/fase1J4" element={<Fase1J4 />} />
      <Route path="/fase1J5" element={<Fase1J5 />} />
      <Route path="/fase1J6" element={<Fase1J6 />} />
      <Route path="/final" element={<Final />} />
      
    </Routes>
  );
};

export default TeoremaRoutes;
