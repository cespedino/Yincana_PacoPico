import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase1J4 = () => {
  return (
    <div className="page-content">
      <h1>Julia</h1>
      <p>
        A partir de aquí todo cambia, os separáis y cada uno tenéis que continuar por vuestra cuenta.
      </p>
      <h2>acertijo </h2>
      <p className='acertijos'>
        acertijo
      </p>

      <SecretInput 
        secretWord="rosario"
        secretWordAlt="el rosario"
        navigateTo="/teorema/fase12"
        buttonText="Penúltima fase"
        entradaText={"gorda me la pones pequeña"}
      />
    </div>
  );
};

export default Fase1J4;