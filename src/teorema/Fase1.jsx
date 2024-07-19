import React, { useState } from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase1 = () => {
  return (
    <div className="page-content">
      <h1>Teorema de Paco Pico</h1>
      <p>
        Sea X un espacio topológico discreto tal que se verifican las siguientes propiedades: <br />
          •	Existe al menos un fifa shiny. <br />
          •	El número de potaxies y swifties es mayor o igual al número de fifas. <br />
          •	Haya tensión sexual entre algunos elementos, pero no pase de ahí. <br />
          •	No haya relaciones simétricas entre los elementos.<br />
        Entonces, se forma la secta de Paco Pico. <br />
        <br />
        A partir de aquí vuestro trabajo va a ser demostrar este teorema e ir avanzando por definiciones, lemas y proposiciones que os terminarán llevando al Teorema
        Fundamental de Paco Pico. <br />
      </p>
      <h2>Lema de la farola</h2>
      <p className='acertijos'>
        En la plaza de las ocho farolas de colores, hay un color que no se repite. ¿Cuál es?
      </p>

      <SecretInput 
        secretWord="amarillo"
        secretWordAlt="amarilla"
        navigateTo="/fase2"
        buttonText="Siguiente Fase"
        entradaText="Introduce la solución a este acertijo"
      />
    </div>
  );
};

export default Fase1;
