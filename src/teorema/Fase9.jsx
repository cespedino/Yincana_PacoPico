import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase9 = () => {
  return (
    <div className="page-content">
      <h1>Teorema de la Taylor</h1>
      <p>
        Sea x_n una sucesión de swifties sin miedo. Entonces la sucesión converge en un disco centrado en Taylor Swift de radio 1989.
      </p>
      <h2>Demostración </h2>
      <p className='acertijos'>
        Demostrar este resultado es una odisea. Aunque no esta claro si se puede usar el teorema del sandwich, todo sigue siendo un enigma.
      </p>

      <SecretInput 
        secretWord="rosario"
        secretWordAlt="el rosario"
        navigateTo="/teorema/fase10"
        buttonText="Ve a la respuesta del acertijo"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase9;