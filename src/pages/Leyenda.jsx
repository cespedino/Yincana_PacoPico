import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Leyenda = () => {
  return (
    <div className='page-content'>
      <h1>La leyenda de la Puchaina Matediva</h1>
      <p>
        Cuando Jiafei creó el mundo, no dejo sin sitio a las matemáticas. Para ello, creo la convención de las matedivas. Un grupo anónimo compuesto por puchainas 
        expertas en matemáticas que deberían de velar por la paz mundial.
      </p>
      <p>
        Antes de esta aventura, Miguel "el bombas", José "el caminante de la pradera", Alberto "el gymbro", Raúl "el marido deseado con tierras", Angy "la trotamundos" 
        y Alba "la gestora" se encontraban investigando sobre esta organización secreta, sin embargo, hoy parece que todo va a cambiar de rumbo, pues han recibido una 
        extraña mochila. <br/ >
        (Mochila de Miguel, quedan x tiempo para que todo termine, firmado las matedivas PD: hay sitios donde es mejor no entrometerse)
        Debereis ir resolviendo enigmas para poder encontrar la llave y poder abrir la mochila.
      </p>
      <p className='acertijos'>
        Si me miras bien parezco una puchaina, <br/ >
        En mi vientre se esconde, lo que calma el frío, <br/ >
        Alba no me quiere, <br/ >
        y Ángela nunca querrá entender este enigma. <br/ >
        ¿Qué soy?
      </p>
      <SecretInput 
        secretWord="taza"
        navigateTo="/leyendaPM/fase1"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la respuesta del acertijo"}
      />
    </div>
  );
};

export default Leyenda;
