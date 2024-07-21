import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase6 = () => {
  return (
    <div className="page-content">
      <h1>fase 6</h1>
      <p>
        Descripción
      </p>
      <h2>título acertijo</h2>
      <p className='acertijos'>
        Acertijo
      </p>

      <SecretInput 
        secretWord="hola"
        navigateTo="/fase6"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase6;