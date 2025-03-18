import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase6 = () => {
  return (
    <div className="page-content">
      <h1>Fase 4</h1>
      <p>
      Para el enigma del siglo XX, tendrás que descrifrar la máquina que los produce. Para ello tendrás que decodificar la palabra secreta haciendo uso 
      de la máquina enigma casera. 
      </p>
      <h2>título acertijo</h2>
      <p className='acertijos'>
        , <br/>

      </p>

      <SecretInput 
        secretWord="hola"
        navigateTo="/city/fase7"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase6;