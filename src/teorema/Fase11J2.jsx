import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J2 = () => {
  return (
    <div className="page-content">
      <h1>Carlos</h1>
      <p>
        A partir de aquí todo cambia, os separáis y cada uno tenéis que continuar por vuestra cuenta.
      </p>
      <h2></h2>
      <p className='acertijos'>
        Como un recuerdo <br/>
        soy la flor de la calma <br/>
        me has visto en muchas películas, <br/>
        y aún en más juegos
      </p>

      <SecretInput 
        secretWord="princesa"
        secretWordAlt="princesa"
        navigateTo="/teorema/fase12"
        buttonText="Penúltima fase"
        entradaText={"Tonto el que lo lea"}
      />
    </div>
  );
};

export default Fase11J2;