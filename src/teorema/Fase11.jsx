import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11 = () => {
  return (
    <div className="page-content">
      <h1>fase 11</h1>
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
        navigateTo="/teorema/fase12"
        buttonText="Ve a la respuesta del acertijo"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase11;