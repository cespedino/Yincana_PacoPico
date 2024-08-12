import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase4J6 = () => {
  return (
    <div className="page-content">
      <h1>Miguel</h1>
      <p>
        Descripción
      </p>
      <h2></h2>
      <p className='acertijos'>
        Acertijo
      </p>
      <SecretInput 
        secretWord="hola"
        navigateTo="/leyendaPM/fase5J6"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};
export default Fase4J6;