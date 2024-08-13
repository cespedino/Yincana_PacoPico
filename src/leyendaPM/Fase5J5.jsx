import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase5J5 = () => {
  return (
    <div className="page-content">
      <h1>Raúl</h1>
      <p>
        Vais a jugar un quién es quién, donde vuestro acertijo va a ser la persona que os ha tocado, hay que esperar a que todos hayan llegado hasta aquí.
      </p>
      <h2>Quien es quien</h2>
      <p className='acertijos'>
        Introduce la palabra del quien es quien
      </p>

      <SecretInput 
        secretWord="taylor swift"
        secretWordAlt="la taylor"
        navigateTo="/leyendaPM/fase6"
        buttonText="Siguiente Nivel"
        entradaText={"Introduce tu persona"}
      />
    </div>
  );
};

export default Fase5J5;