import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J4 = () => {
  return (
    <div className="page-content">
      <h1>Julia</h1>
      <p>
      Ve con Candela al sitio de las farolas de colores y busca un QR que contendrá una pista que te ayudará a pasar a la siguiente fase.
      </p>
      <h2>Zafiros en la cara</h2>
      <p className='acertijos'>
      Introduce la clave del QR
      </p>

      <SecretInput 
        secretWord="ojos"
        secretWordAlt="mis ojos"
        navigateTo="/teorema/fase12J4"
        buttonText="Penúltima fase"
        entradaText={"gorda me la pones pequeña"}
      />
    </div>
  );
};

export default Fase11J4;