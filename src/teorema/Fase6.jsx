import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase6 = () => {
  return (
    <div className="page-content">
      <h1>fase parque enfrente piso clara</h1>
      <p>
        Las clases de wilfredo os enseñaron muchas cosas, pero para nuestro resultado solo necesitamos la fuerza gravitatoria (fuerza atractora), 
        lo que nos va a permitir obtener que hay personas que se atraen.
      </p>
      <h2>Parque Escopetero</h2>
      <p className='acertijos'>
        Acertijo
      </p>

      <SecretInput 
        secretWord="hola"
        navigateTo="/teorema/fase7"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase6;