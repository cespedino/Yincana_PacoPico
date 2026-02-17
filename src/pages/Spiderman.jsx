import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Spiderman = () => {
  return (
    /* He añadido la clase 'spiderman-theme' aquí */
    <div className='page-content spiderman-theme'>
      <h1>Almería-verso</h1>
      <p>
        Año 2026. En un laboratorio secreto debajo de la Universidad de Almería (UAL), un experimento con materia oscura ha salido mal. Una anomalía
        multiversal está "pixelando" la ciudad. Los edificios de la Rambla vibran y el Cable Inglés está empezando a desaparecer. <br/>
        Miguel O'Hara (Spider-Man 2099) ha detectado que el epicentro del colapso está en la Alcazaba. Ha enviado un mensaje a la Spider-Society de Almería
        (vuestros alumnos). "Solo si lográis reunir los fragmentos del Tangram Multiversal y recalibrar los nodos con matemáticas puras, podremos evitar que
        Almería sea borrada del mapa".
      </p>
      <h2>Fase preparación</h2>
      <p>
        Coge todo lo que creas que te pueda ser útil y cuando estés listo pasa al acertijo de abajo.
      </p>
      <p>Para poder entrar a esta prueba, os espera un reto para saber si sois dignos de afrontarlo:</p>
      <p className="acertijos">
        Debereis poner el código que os dé vuestro profesor para poder acceder:
      </p>
      
      <SecretInput 
        secretWord="12345"
        navigateTo="/spiderman/fase1"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la respuesta del acertijo"}
      />
    </div>
  );
};

export default Spiderman;