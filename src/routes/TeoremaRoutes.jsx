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
import Fase11J1 from '../teorema/Fase11J1.jsx';
import Fase11J2 from '../teorema/Fase11J2';
import Fase11J3 from '../teorema/Fase11J3.jsx';
import Fase11J4 from '../teorema/Fase11J4';
import Fase11J5 from '../teorema/Fase11J5';
import Fase11J6 from '../teorema/Fase11J6';
import Fase12J1 from '../teorema/Fase12J1.jsx';
import Fase12J2 from '../teorema/Fase12J2';
import Fase12J3 from '../teorema/Fase12J3.jsx';
import Fase12J4 from '../teorema/Fase12J4';
import Fase12J5 from '../teorema/Fase12J5';
import Fase12J6 from '../teorema/Fase12J6';
import Fase13 from '../teorema/Fase13';
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
      <Route path="/fase11J1" element={<Fase11J1 />} />
      <Route path="/fase11J2" element={<Fase11J2 />} />
      <Route path="/fase11J3" element={<Fase11J3 />} />
      <Route path="/fase11J4" element={<Fase11J4 />} />
      <Route path="/fase11J5" element={<Fase11J5 />} />
      <Route path="/fase11J6" element={<Fase11J6 />} />
      <Route path="/fase12J1" element={<Fase12J1 />} />
      <Route path="/fase12J2" element={<Fase12J2 />} />
      <Route path="/fase12J3" element={<Fase12J3 />} />
      <Route path="/fase12J4" element={<Fase12J4 />} />
      <Route path="/fase12J5" element={<Fase12J5 />} />
      <Route path="/fase12J6" element={<Fase12J6 />} />
      <Route path="/fase13" element={<Fase13 />} />
      <Route path="/final" element={<Final />} />
      
    </Routes>
  );
};

export default TeoremaRoutes;
