import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase2 = () => {
  return (
    <div className="page-content">
      <h1>Prehistoria</h1>
      <p>
        Tendrás que ir avanzando por las distintas épocas de Málaga, para ello, te tendrás que dirigir al Museo de Málaga. Como diría Sandra:"Allí podrás encontrar
        las respuestas que estas buscando".
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