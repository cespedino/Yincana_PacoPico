import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase2 = () => {
  return (
    <div className="page-content">
      <p>
        Necesitabáis contar con una bombilla encendida para que se os iluminen las ideas para el resto de la yincana. (aunque este apagada) <br/>
        El siguiente resultado, os va a ayudar a reencontrar el camino y ver como todos tenéis ganas de vivir. 
      </p>
      <h2>Teorema de Santa Inés</h2>
      <p className='acertijos'>
        A Clara varias veces han intentado seducir, <br/>
        Nura estaría fuera de lugar, <br/>
        Irene se sentiría como en casa,
        ¿de qué sitio se podría tratar?
      </p>

      <SecretInput 
        secretWord="iglesia"
        secretWordAlt="parroquia"
        navigateTo="/teorema/fase3"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase2;
