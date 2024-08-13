import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase3 = () => {
  return (
    <div className="page-content">
      <h1>Fase 3</h1>
      <p>
        Descripción
      </p>
      <h2>Alba</h2>
      <p className='acertijos'>
        Acertijo
      </p>
      <SecretInput 
        secretWord="hola"
        navigateTo="/leyendaPM/fase4J1"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <h2>Ángela</h2>
      <p className='acertijos'>
        Acertijo
      </p>
      <SecretInput 
        secretWord="hola"
        navigateTo="/leyendaPM/fase5J2"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <h2>Alberto</h2>
      <p className='acertijos'>
        Acertijo
      </p>
      <SecretInput 
        secretWord="hola"
        navigateTo="/leyendaPM/fase5J3"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <h2>José David</h2>
      <p className='acertijos'>
        Acertijo
      </p>
      <SecretInput 
        secretWord="hola"
        navigateTo="/leyendaPM/fase5J4"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <h2>Raúl</h2>
      <p className='acertijos'>
        Acertijo
      </p>
      <SecretInput 
        secretWord="hola"
        navigateTo="/leyendaPM/fase5J5"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />

      <h2>Miguel</h2>
      <p className='acertijos'>
        Acertijo
      </p>
      <SecretInput 
        secretWord="hola"
        navigateTo="/leyendaPM/fase5J6"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase3;