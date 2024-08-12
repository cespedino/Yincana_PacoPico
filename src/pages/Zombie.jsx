import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Zombie = () => {
  return (
    <div className='page-content'>
      <h1>La invasión Zombie</h1>
      <p>
        Bienvenidos a esta gran aventura, en ella os tendréis que salvar de la invasión zombie e ir afrontantdo los retos que os vayáis encontrando para poder
        salvaros del virus zombie
      </p>
      <h2>Fase preparación</h2>
      <p>
        Coge todo lo que creas que te pueda ser útil y cuando estés listo pasa al acertijo de abajo.
      </p>
      <p>Para poder entrar a esta prueba, os espera un reto para saber si sois dignos de afrontarlo:</p>
      <p className="acertijos">
        Si miras debajo del sofá podrás encontrar las pistas para poder salir de la casa e intentar salvarte
      </p>
      
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