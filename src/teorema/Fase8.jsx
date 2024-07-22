import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase8 = () => {
  return (
    <div className="page-content">
      <h1>fase 8</h1>
      <p>
        Descripción
      </p>
      <h2>Teorema del viajero</h2>
      <p className="acertijos">Coméis en un sitio que se usa para jugar en la respuesta del acertijo.</p>
      
      <SecretInput 
        secretWord="vitalia"
        navigateTo="/teorema/fase10"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la respuesta del acertijo"}
      />
    </div>
  );
};

export default Fase8;