import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase4J2 = () => {
  return (
    <div className="page-content">
      <h1>Ángela</h1>
      <p>
        Tendrás que ir a la localización del acertijo y buscar un QR que contendrá una pista que te ayudará a pasar a la siguiente fase.
      </p>
      <h2></h2>
      <p className='acertijos'>
        Acertijo
      </p>
      <SecretInput 
        secretWord="hola"
        navigateTo="/leyendaPM/fase5J2"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};
export default Fase4J2;