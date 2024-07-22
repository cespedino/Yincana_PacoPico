import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase10 = () => {
  return (
    <div className="page-content">
      <h1>fase 10</h1>
      <p>
        A partir de aquí cada uno tomará su propio rumbo. 
      </p>
      <h2>Lema de separación</h2>
      <p className='acertijos'>
        Clara: <br/>
        Mido unos 47 cm y te encanta comerme por Navidad, soy mangar difícil de pagar, pero Carlos seguro me preparara con culpabilidad 
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
      </p>
      <SecretInput 
        secretWord="rosario"
        secretWordAlt="el rosario"
        navigateTo="/teorema/fase11J2"
        buttonText="Siguiente fase"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <p className='acertijos'>
        Irene: <br/>
        Experto en curvas, nadie me gana en la pradera. A remolque aprendí que todo tiene un final.
      </p>
      <SecretInput 
        secretWord="rosario"
        secretWordAlt="el rosario"
        navigateTo="/teorema/fase11J3"
        buttonText="Siguiente fase"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <p className='acertijos'>
        Julia: <br/>
        La sangre de Dios corría por mi venas, aunque no le gusté a nadie. Llegué a caminar entre los mejores, ¿quién soy?
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
      </p>
      <SecretInput 
        secretWord="rosario"
        secretWordAlt="el rosario"
        navigateTo="/teorema/fase11J5"
        buttonText="Siguiente fase"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <p className='acertijos'>
        Nura: <br/>
        En todos lados me veías, en clase te acompañaba. Aunque disparaba tiros, mensajes de felicidad te transmitía. 
      </p>
      <SecretInput 
        secretWord="shoto"
        secretWordAlt="el shoto"
        navigateTo="/teorema/fase11J6"
        buttonText="Siguiente fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase10;