import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase7 = () => {
  return (
    <div className="page-content">
      <h1>fase one direction falta buscar audio de la melodía de alguna canción </h1>
      <p>
        Descripción
      </p>
      <h2>título acertijo</h2>
      <p className='acertijos'>
        Cuatro puntos cardinales marcan el rumbo, <br/>
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