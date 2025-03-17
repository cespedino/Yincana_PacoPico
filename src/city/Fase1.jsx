import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase1 = () => {
  return (
    <div className="page-content">
      <h1>Fase 1</h1>
      <p>
      Cómo se está convirtiendo en tradición, este año traemos la segunda edición de la yincana para celebrar tu cumple. <br/>
      Este año se han introducido mejoras después del feedback recibido el año pasado. Es por ello, que no estará nadie más involucrado en ella
      para que tú puedas disfrutarla al máximo. Además, este año he conseguido que sea en el móvil por lo que nos podemos ir más lejos aún jejeje.
      </p>
      <h2>título acertijo</h2>
      <p className='acertijos'>
        , <br/>

      </p>

      <SecretInput 
        secretWord="hola"
        navigateTo="/leyendaPM/fase2"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase1;