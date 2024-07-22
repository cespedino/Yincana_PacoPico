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
      <h2>Teorema del Viajero</h2>
      <p className='acertijos'>
        He recorrido mil caminos, <br/>
        Y en mi vientre he guardado saberes divinos. <br/>
        Cansada y rota, estoy abatida <br/>
        ¿Qué soy?
      </p>

      <SecretInput 
        secretWord="mochila de carlos"
        secretWordAlt="la mochila de carlos"
        navigateTo="/teorema/fase1"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Teorema_PP;

