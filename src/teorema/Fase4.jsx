import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase4 = () => {
  return (
    <div className="page-content">
      <h1>Basic fit mafia</h1>
      <p>
        Amable y su música clásica. Bueno y lo más importante, sus aprobados, ¿a veces una ayudita nunca viene mal eh?
      </p>
      <h2>Teorema</h2>
      <p className='acertijos'>
        Entre heteros básicos me hallo, <br/>
        debo favores que me asfixian, 
      </p>

      <SecretInput 
        secretWord="hola"
        navigateTo="/teorema/fase5"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase4;