import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase2 = () => {
  return (
    <div className="page-content">
      <p>
        Para poder pasar al siguiente acertijo, vais a tener que hacer un poco de memoria.
      </p>
      <p className='acertijos'>
        Con tanta fórmula, <br/>
        no se entera ni Mario,<br/>
        aunque le gusta la granja,<br/>
        le molan más otro lugares.
      </p>

      <SecretInput 
        secretWord="wilfredo"
        navigateTo="/leyendaPM/fase3"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase2;