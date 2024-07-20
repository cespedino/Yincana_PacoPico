import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Leyenda = () => {
  return (
    <div>
      <h1>La leyenda de la Puchaina Matediva</h1>
      <p>
        Cuando Jiafei creó el mundo, no dejo sin sitio a las matemáticas. Para ello, creo la convención de las matedivas. Un grupo anónimo compuesto por expertas en 
        matemáticas que deberían de velar por la paz mundial.
      </p>
      <p>
        Antes de esta aventura, Miguel "el bombas", José "el caminante de la pradera", Alberto "el gymbro", Raúl "el marido deseado con tierras", Angy "la trotamundos" y Alba "la gestora"
        se encontraban investigando sobre esta organización secreta, sin embargo, hoy parece que todo va a cambiar de rumbo, pues les ha llegado una mochila.
        (Mochila de Migul, quedan x tiempo para que todo termine, firmado las matedivas PD: hay sitios donde es mejor no entrometerse)
      </p>
      <SecretInput 
        secretWord="vitalia"
        navigateTo="/fase1L"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la respuesta del acertijo"}
      />
    </div>
  );
};

export default Leyenda;
