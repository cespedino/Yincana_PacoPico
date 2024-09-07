import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase9 = () => {
  return (
    <div className="page-content">
      <h1>Teorema de la Taylor</h1>
      <p>
        Espero que no os haya costado demasiado aunque tenéis vitalidad de sobre para afrontar los retos que os quedan (a partir de aquí ya todo es más easy)
        Con el siguiente resultado, tendréis probado que hay más swifties que fifas, luego la unión con los potaxies es trivialmente un conjunto que lo contiene. <br />
        Sea x_n una sucesión de swifties con reputación de tener ojos bonitos. Entonces la sucesión converge en un disco centrado en Taylor Swift de radio 1989.
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