import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J5 = () => {
  return (
    <div className="page-content">
      <h1>Candela</h1>
      <p>
      Ve con Julia al sitio de las farolas de colores y busca un QR que contendrá una pista que te ayudará a pasar a la siguiente fase.
      </p>
      <h2>Verdes ventanas al alma</h2>
      <p className='acertijos'>
      Introduce la clave del QR
      </p>

      <SecretInput 
        secretWord="ojos"
        secretWordAlt="mis ojos"
        navigateTo="/teorema/fase12J5"
        buttonText="Penúltima fase"
        entradaText={"barbie cajera al poder"}
      />
    </div>
  );
};

export default Fase11J5;