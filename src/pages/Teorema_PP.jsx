import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Teorema_PP = () => {
  return (
    <div className='page-content'>
      <h1>La Teoría de Paco Pico</h1>
      <h2>Prueba de entrada</h2>
      <p>
        En esta aventura formarán parte seis intrépidos investigadores de matemáticas:
        Clara investigadora en teoría de grupos sectarios, Julia que esta investigando algo, pero no se ha enterado muy bien el qué, Candela 
        que se ha adentrado en la teoría de los cuerpos perfectos (los rumores hablan de que tiene que ver algo con su hijo), Irene que es experta en superficies y 
        cuerpos de la pradera, Nura algebrista enamorada de la geometría y Carlos, que esta desarrollando formas de conseguir apuntes que no se saben ni que existían.
      </p>
      <p>Para poder entrar a esta prueba, os espera un reto para saber si sois dignos de afrontarlo:</p>
      <p className="acertijos">Coméis en un sitio que se usa para jugar en la respuesta del acertijo.</p>
      
      <SecretInput 
        secretWord="vitalia"
        navigateTo="/teorema/fase10"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la respuesta del acertijo"}
      />
    </div>
  );
};

export default Teorema_PP;

