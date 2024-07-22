import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J4 = () => {
  return (
    <div className="page-content">
      <h1>Julia</h1>
      <p>
        A partir de aquí todo cambia, os separáis y cada uno tenéis que continuar por vuestra cuenta.
      </p>
      <h2>acertijo </h2>
      <p className='acertijos'>
        Ni el calor extremo, <br/>
        ni este posible lugar <br/>
        son capaces de albergar <br/>
        unos oceános tan supremos. <br/>
        ¿Quién soy? 
      </p>

      <SecretInput 
        secretWord="julia"
        secretWordAlt="lia"
        navigateTo="/teorema/fase12"
        buttonText="Penúltima fase"
        entradaText={"gorda me la pones pequeña"}
      />
    </div>
  );
};

export default Fase11J4;