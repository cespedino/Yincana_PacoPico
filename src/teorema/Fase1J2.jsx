import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase1J2 = () => {
  return (
    <div className="page-content">
      <h1>fase 1 Carlos</h1>
      <p>
        A partir de aquí todo cambia, os separáis y cada uno tenéis que continuar por su cuenta.
      </p>
      <h2></h2>
      <p className='acertijos'>
        Los payasos no me hacen reír, <br/>
        
      </p>

      <SecretInput 
        secretWord="batman"
        secretWordAlt="batman"
        navigateTo="/teorema/fase12"
        buttonText="Ve a la respuesta del acertijo"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase1J2;