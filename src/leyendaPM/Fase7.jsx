import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase7 = () => {
  return (
    <div className="page-content">
      <h1>Fase 7</h1>
      <p>
        Descripción
      </p>
      <h2>título acertijo</h2>
      <p className='acertijos'>
        , <br/>

      </p>

      <SecretInput 
        secretWord="hola"
        navigateTo="/leyendaPM/fase8"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase7;