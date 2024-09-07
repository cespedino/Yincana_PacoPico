import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase5 = () => {
  return (
    <div className="page-content">
      <h1></h1>
      <p>
      Amable y su música clásica. Bueno y lo más importante, sus aprobados, ¿a veces una ayudita nunca viene mal eh? Se supone que con el acertijo anterior habéis 
      aprendido a contar, algo fundamental para demostrar que hay menos fifas que potaxies y swifties. El siguiente resultado espero que os sea familiar.
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
        navigateTo="/teorema/fase7"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase5;