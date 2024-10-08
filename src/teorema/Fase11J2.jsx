import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J2 = () => {
  return (
    <div className="page-content">
      <h1>Carlos</h1>
      <p>
      Ve con Raúl al parque de al lado y busca un QR que contendrá una pista que te ayudará a pasar a la siguiente fase.
      </p>
      <h2></h2>
      <p className='acertijos'>
        Introduce la clave del QR
      </p>

      <SecretInput 
        secretWord="princesa"
        secretWordAlt="princesa"
        navigateTo="/teorema/fase12J2"
        buttonText="Penúltima fase"
        entradaText={"Tonto el que lo lea"}
      />
    </div>
  );
};

export default Fase11J2;