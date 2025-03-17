import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase1 = () => {
  return (
    <div className="page-content">
      <h1>Álvaro I de Valencia</h1>
      <p>
      Cómo se está convirtiendo en tradición, este año traemos la segunda edición de la yincana para celebrar tu cumple. <br/>
      Este año se han introducido mejoras después del feedback recibido el año pasado. Es por ello, que no estará nadie más involucrado en ella
      para que tú puedas disfrutarla al máximo. Además, este año he conseguido que sea en el móvil por lo que nos podemos ir más lejos aún jejeje. <br/>
      Conoces perfectamente el modus operandi de la aventura, es por ello, que empezamos con "Raíces Profundas".
      Irás avanzando por las distintas épocas de la civilización hasta llegar a nuestros días o quién sabe, quizás llegues a las estrellas.
      </p>
      <h2>Agricultura y ganadería</h2>
      <p className='acertijos'>
        Para las primera civilizaciones, fue clave entender la agricultura y la ganadería. <br/>
        Por ello, el primer enigma va a tratar sobre esto. 

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