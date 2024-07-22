import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase12 = () => {
  return (
    <div className="page-content">
      <h1>fase 12</h1>
      <p>
        Descripción
      </p>
      <h2>acertijo </h2>
      <p className='acertijos'>
        acertijo
      </p>

      <SecretInput 
        secretWord="rosario"
        secretWordAlt="el rosario"
        navigateTo="/Yincana_PacoPico"
        buttonText="Ya has desbloqueado el acceso"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase12;