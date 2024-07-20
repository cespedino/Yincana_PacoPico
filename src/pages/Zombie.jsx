import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Zombie = () => {
  return (
    <div className='page-content'>
      <h1>La invasión Zombie</h1>
      <h2>Prueba de entrada</h2>
      <p>
        
      </p>
      <p>Para poder entrar a esta prueba, os espera un reto para saber si sois dignos de afrontarlo:</p>
      <p className="acertijos">HHHHH</p>
      
      <SecretInput 
        secretWord="a"
        navigateTo="/zombie/fase1"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la respuesta del acertijo"}
      />
    </div>
  );
};

export default Zombie;