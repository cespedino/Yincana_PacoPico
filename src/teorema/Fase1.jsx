import React from 'react';
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
          •	No haya relaciones del todo simétricas entre los elementos.<br />
        Entonces, se forma la secta de Paco Pico. <br />
        <br />
        A partir de aquí vuestro trabajo va a ser demostrar este teorema e ir avanzando por definiciones, lemas y proposiciones que os terminarán llevando al Teorema
        Fundamental de Paco Pico. Empezando por el Lema de la Farola. <br />
      </p>
      <h2>Lema de la Farola</h2>
      <p className='acertijos'>
        Junto al globo, el pato y la moto. <br />
        Si me buscas bien seguro que me encontrarás 
      </p>

      <SecretInput 
        secretWord="amarillo"
        secretWordAlt="amarilla"
        navigateTo="/teorema/fase2"
        buttonText="Siguiente Fase"
        entradaText="Introduce la solución a este acertijo"
      />
    </div>
  );
};

export default Fase1;
