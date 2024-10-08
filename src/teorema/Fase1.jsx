import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase1 = () => {
  return (
    <div className="page-content">
      <h1>Teorema de Paco Pico</h1>
      <p>
        Tras haber pasado la prueba de inicio, ya sois dignos de tener el Teorema de Paco Pico enunciado <br />
        Sea X un espacio topológico discreto tal que se verifican las siguientes propiedades: <br />
          •	Existe al menos un fifa shiny. <br />
          •	El conjunto de los elementos con ganas de vivir es denso en X. <br />
          •	Existen elementos que se atraen entre ellos. <br />
          •	El número de potaxies y swifties es mayor o igual al número de fifas. <br />
        Entonces, se forma el grupo sectario de Paco Pico. <br />
        <br />
        A partir de aquí vuestro trabajo va a ser demostrar este teorema e ir avanzando por definiciones, lemas y proposiciones que os terminarán llevando al Teorema
        Fundamental de Paco Pico. Vamos a suponer que el fifa shiny existe porque si lo tenéis que encontrar la yincana sería demasiado larga. Si queréis lo hacéis en 
        vosotros. <br />
        Empezando por el Lema de la Escuela, dirígios a la ubicación para poder obtener la respuesta al acertijo. <br />
      </p>
      <h2>Lema de la Escuela</h2>
      <p className='acertijos'>
        Para demostrar este puzle de dimensiones jurásicas <br />
        Deberéis encontrar al perro detective junto al pato corriendo. <br />
        Seguramente una persona de primaria lo encontraría sin problemas. <br />
        El nombre de la guardería que esta justo enfrente es la respuesta al acertijo.
      </p>

      <SecretInput 
        secretWord="alameda"
        secretWordAlt="guardería"
        navigateTo="/teorema/fase2"
        buttonText="Siguiente Fase"
        entradaText="Introduce la solución a este acertijo"
      />
    </div>
  );
};

export default Fase1;
