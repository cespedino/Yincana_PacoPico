import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase2 = () => {
  return (
    <div className="page-content">
      <h1>Alan Turing</h1>
      <p>
        En este enigma, tendrás que descrifrar la máquina que los produce. Para ello tendrás que decodificar la palabra secreta haciendo uso 
        de la nuestra máquina enigma casera. 
      </p>
      <h2>Máquina enigma</h2>
      <p className='acertijos'>
        palabra
      </p>

      <SecretInput 
        secretWord="hola"
        navigateTo="/city/fase3"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase2;