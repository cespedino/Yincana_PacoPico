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

      </p>
      <SecretInput 
        secretWord="rosario"
        secretWordAlt="el rosario"
        navigateTo="/teorema/fase11"
        buttonText="Ve a la respuesta del acertijo"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <p className='acertijos'>
        Carlos: <br/>
      </p>
      <SecretInput 
        secretWord="rosario"
        secretWordAlt="el rosario"
        navigateTo="/teorema/fase11"
        buttonText="Ve a la respuesta del acertijo"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <p className='acertijos'>
        Irene: <br/>

      </p>
      <SecretInput 
        secretWord="rosario"
        secretWordAlt="el rosario"
        navigateTo="/teorema/fase11"
        buttonText="Ve a la respuesta del acertijo"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <p className='acertijos'>
        Julia: <br/>
        La sangre de Dios corría por mi venas, aunque no le gusté a nadie. Llegué a caminar entre los mejores, ¿quién soy?
      </p>
      <SecretInput 
        secretWord="rey"
        secretWordAlt="rey"
        navigateTo="/teorema/fase11"
        buttonText="Ve a la respuesta del acertijo"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <p className='acertijos'>
        Candela: <br/>
      </p>
      <SecretInput 
        secretWord="rosario"
        secretWordAlt="el rosario"
        navigateTo="/teorema/fase11"
        buttonText="Ve a la respuesta del acertijo"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <p className='acertijos'>
        Nura: <br/>
        En todos lados me veías, en clase te acompañaba. Aunque disparaba tiros, mensajes de felicidad te transmitía. 
      </p>
      <SecretInput 
        secretWord="shoto"
        secretWordAlt="el shoto"
        navigateTo="/teorema/fase11"
        buttonText="Ve a la respuesta del acertijo"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase10;