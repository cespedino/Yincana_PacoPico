import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase1J3 = () => {
  return (
    <div className="page-content">
      <h1>Irene</h1>
      <p>
        A partir de aquí todo cambia, os separáis y cada uno tenéis que continuar por vuestra cuenta.
      </p>
      <h2>acertijo </h2>
      <p className='acertijos'>
        Poner puntos es mi pasión, <br/>
        aunque diga que me gusta la carnicería <br/>
        soy un mentiroso, ¿quién soy?
      </p>

      <SecretInput 
        secretWord="cpn"
        secretWordAlt="carlos pares numerico"
        navigateTo="/teorema/fase12"
        buttonText="Penúltima fase"
        entradaText={"¿Será verdad que siempre tienes la razón?"}
      />
    </div>
  );
};

export default Fase1J3;