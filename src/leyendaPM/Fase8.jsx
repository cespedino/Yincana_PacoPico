import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase8 = () => {
  return (
    <div className="page-content">
      <h1>Fase 8</h1>
      <p>
        Descripción
      </p>
      <h2>título acertijo</h2>
      <p className='acertijos'>
        , <br/>

      </p>

      <SecretInput 
        secretWord="hola"
        navigateTo="/leyendaPM/fase9"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase8;