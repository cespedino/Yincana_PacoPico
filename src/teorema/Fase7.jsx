import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase7 = () => {
  return (
    <div className="page-content">
      <h1>Cuántas menos dimensiones mejor</h1>
      <p>
        Claramente, todo es más fácil cuanto menor sea la dimensión. Del mismo modo, esta prueba es mejor que la penséis cada uno por separado porque para una persona
        sola será más fácil hallar la respuesta.
      </p>
      <h2>Lema del rumbo</h2>
      <p className='acertijos'>
        Cuatro puntos cardinales marcan el rumbo <br/>
        en una sola dimensión <br/>
        Aunque grandes masas se desplazaron, <br/>
        Sin un euro se quedaron. 
      </p>

      <SecretInput 
        secretWord="one direction"
        secretWordAlt="one direction"
        navigateTo="/teorema/fase8"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase7;