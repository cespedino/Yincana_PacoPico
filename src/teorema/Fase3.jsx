import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase3 = () => {
  return (
    <div className="page-content">
      <h1></h1>
      <p>
        El siguiente resultado, aunque no tiene nombre propio, seguro que guarda un lugar muy especial en vuestra memoria.
      </p>
      <h2>Proposición</h2>
      <p className='acertijos'>
        Una persona discreta, <br/>
        otra con alas se enfado, <br/>
        pero su plan tan bien estructuró <br/>
        que feliz con su maleta partió. <br/>
      </p>

      <SecretInput 
        secretWord="amable"
        navigateTo="/teorema/fase4"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase3;