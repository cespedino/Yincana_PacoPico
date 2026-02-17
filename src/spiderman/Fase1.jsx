import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase1 = () => {
  return (
    <div className='page-content spiderman-theme'>
      <h1>El Glitch del Puerto (Cifrado de la Spider-Red)</h1>
      <p>
        La primera pieza del Tangram está atrapada en un "bucle temporal" frente al Cable Inglés. La IA de la ciudad está bloqueada y solo acepta comandos en
        código binario para reactivar el sistema de carga del puerto.

        Vais a recibir un papiro con una tabla de conversión que relaciona protocolos Decimal, Binario y ASCII.
      </p>
      <h2>Desencriptando el sistema</h2>
      <p className='acertijos'>
        Para entrar en la red, deben decodificar el bit de seguridad que parpadea en el terminal: 01010000
      </p>

      <SecretInput 
        secretWord="a"
        navigateTo="/spiderman/fase2"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase1;