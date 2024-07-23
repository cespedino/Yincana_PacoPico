import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J6 = () => {
  return (
    <div className="page-content">
      <h1>Nura</h1>
      <p>
        A partir de aquí todo cambia, os separáis y cada uno tenéis que continuar por vuestra cuenta.
      </p>
      <h2>acertijo</h2>
      <p className='acertijos'>
        acertijo
      </p>
      <SecretInput 
        secretWord="rosario"
        secretWordAlt="el rosario"
        navigateTo="/teorema/fase12"
        buttonText="Penúltima fase"
        entradaText={"shot of faith"}
      />
    </div>
  );
};

export default Fase11J6;