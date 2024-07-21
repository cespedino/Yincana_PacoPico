import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase5 = () => {
  return (
    <div className="page-content">
      <h1></h1>
      <p>
        Descripción
      </p>
      <h2>Lema clásico</h2>
      <p className='acertijos'>
        Con tanta fórmula, 
        no se entera ni Mario,
        aunque le gusta la granja,
        le molan más otro lugares.
      </p>

      <SecretInput 
        secretWord="wilfredo"
        navigateTo="/fase6"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase5;