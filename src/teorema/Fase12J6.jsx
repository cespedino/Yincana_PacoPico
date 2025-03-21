import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase12J6 = () => {
  return (
    <div className="page-content">
      <h1>Raúl</h1>
      <p>
        Vais a jugar un quién es quién, donde vuestro acertijo va a ser la persona que os ha tocado, hay que esperar a que todos hayan llegado hasta aquí y empezamos 
        el último nivel.
      </p>
      <h2>Quien es quien</h2>
      <p className='acertijos'>
        Introduce la palabra del quien es quien
      </p>

      <SecretInput 
        secretWord="taylor swift"
        secretWordAlt="taylor"
        navigateTo="/teorema/fase13"
        buttonText="Final"
        entradaText={"Introduce tu persona"}
      />
    </div>
  );
};

export default Fase12J6;