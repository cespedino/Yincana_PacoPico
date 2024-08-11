import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase12J5 = () => {
  return (
    <div className="page-content">
      <h1>Candela</h1>
      <p>
        Vais a jugar un quién es quién, donde vuestro acertijo va a ser la persona que os ha tocado, hay que esperar a que todos hayan llegado hasta aquí y empezamos 
        el último nivel.
      </p>
      <h2>acertijo </h2>
      <p className='acertijos'>
        Introduce la palabra del quien es quien
      </p>

      <SecretInput 
        secretWord="elon musk"
        secretWordAlt="elon musk"
        navigateTo="/teorema/fase13"
        buttonText="Ve a la respuesta del acertijo"
        entradaText={"Introduce tu persona"}
      />
    </div>
  );
};

export default Fase12J5;