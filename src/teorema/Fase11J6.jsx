import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J6 = () => {
  return (
    <div className="page-content">
      <h1>Raúl</h1>
      <p>
      Ve con Carlos al parque de al lado y busca un QR que contendrá una pista que te ayudará a pasar a la siguiente fase.
      </p>
      <h2>Si te duplico la edad...</h2>
      <p className='acertijos'>
      Introduce la clave del QR
      </p>
      <SecretInput 
        secretWord="dilf"
        secretWordAlt="dilfs"
        navigateTo="/teorema/fase12J6"
        buttonText="Penúltima fase"
        entradaText={"shot of faith"}
      />
    </div>
  );
};

export default Fase11J6;