import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase10 = () => {
  return (
    <div className="page-content">
      <h1>Los caminos se separan</h1>
      <p>
        A partir de aquí cada uno tomará su propio rumbo. 
      </p>
      <h2>Lema de separación</h2>
      <p className='acertijos'>
        Clara: <br/>
        Mido unos 47 cm y te encanta comerme por Navidad, soy manjar difícil de pagar, pero si me piensas seguro que me encuentras.
      </p>
      <SecretInput 
        secretWord="rodaballo"
        secretWordAlt="el rodaballo"
        navigateTo="/teorema/fase11J1"
        buttonText="Siguiente fase"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <p className='acertijos'>
        Carlos: <br/>
        Soy más rápido que la sombra, amigo de las colas y como llame a los nudillos te revientan. ¿Quién soy?
      </p>
      <SecretInput 
        secretWord="sonic"
        secretWordAlt="sanic"
        navigateTo="/teorema/fase11J2"
        buttonText="Siguiente fase"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <p className='acertijos'>
        Irene: <br/>
        Experto en curvas, nadie me gana ni en un cañon ni en la pradera. A remolque aprendí que todo tiene un final.
      </p>
      <SecretInput 
        secretWord="rayo mcqueen"
        secretWordAlt="mcqueen"
        navigateTo="/teorema/fase11J3"
        buttonText="Siguiente fase"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <p className='acertijos'>
        Julia: <br/>
        La sangre de dioses corría por mis venas, aunque no le gusté a casi nadie. Llegué a ser familia de los mejores, ¿quién soy?
      </p>
      <SecretInput 
        secretWord="rey"
        secretWordAlt="rey"
        navigateTo="/teorema/fase11J4"
        buttonText="Siguiente fase"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <p className='acertijos'>
        Candela: <br/>
        Estoy por todo el mundo, por el norte goza e incluso a casa llego. ¿Quién soy?
      </p>
      <SecretInput 
        secretWord="zara"
        secretWordAlt="inditex"
        navigateTo="/teorema/fase11J5"
        buttonText="Siguiente fase"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <p className='acertijos'>
        Raúl: <br/>
        Se cruzo en tu camino para fijar la técnica, pero las barras y los discos te enamoraron. 
      </p>
      <SecretInput 
        secretWord="crossfit"
        secretWordAlt="cross-fit"
        navigateTo="/teorema/fase11J6"
        buttonText="Siguiente fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase10;