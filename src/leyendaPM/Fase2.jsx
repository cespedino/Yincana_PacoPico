import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase2 = () => {
  return (
    <div className="page-content">
      <p>
        Descripción
      </p>
      <p className='acertijos'>
        Con tanta fórmula, <br/>
        no se entera ni Mario,<br/>
        aunque le gusta la granja,<br/>
        le molan más otro lugares.
      </p>

      <SecretInput 
        secretWord="wilfredo"
        navigateTo="/teorema/fase6"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase2;