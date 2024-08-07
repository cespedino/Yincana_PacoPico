import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase5 = () => {
  return (
    <div className="page-content">
      <h1></h1>
      <p>
        Quizás la mafia y los heteros no os hallan resultado difícil, sin embargo, el siguiente resultado espero que os sea mucho más familiar.
      </p>
      <h2>Lema clásico</h2>
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

export default Fase5;