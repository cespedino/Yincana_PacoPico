import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase8 = () => {
  return (
    <div className="page-content">
      <h1>fase 8</h1>
      <p>
        Descripción
      </p>
      <h2>Teorema del viajero</h2>
      <p className='acertijos'>
        He recorrido mil caminos, <br/>
        Y en mi vientre he guardado saberes divinos. <br/>
        Cansada y rota, estoy abatida <br/>
        ¿Qué soy?
      </p>

      <SecretInput 
        secretWord="mochila de carlos"
        secretWordAlt="la mochila de carlos"
        navigateTo="/teorema/fase9"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase8;