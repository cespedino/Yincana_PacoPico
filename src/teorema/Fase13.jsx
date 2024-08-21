import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase13 = () => {
  return (
    <div className="page-content">
      <p>
        Todos los enigmas anteriores están diseñados para que puedierais entender lo que de verdad importa, y es la unicidad de este momento. De este rato que
        hemos estado juntos y por volver a pasar por algunos de los lugares que hemos estado.<br/>
        Ya habéis finalizado esta aventura, espero que la hayais disfrutado, tomaros vuestro tiempo para pasar al final de verdad. <br />
        Una vez que tenéis todos los resultado es trivial demostrar el Teorema Fundamental de Paco Pico.
      </p>
      <p className='acertijos'>
        Saborea tu recompesa de haber llegado hasta aquí. La palabra es valor incalculable
      </p>
      <SecretInput 
        secretWord="valor incalculable"
        secretWordAlt="valor incalculable"
        navigateTo="/teorema/final"
        buttonText="Solo pulsarás este botón 1 vez"
        entradaText={"Enjoy the moment"}
      />
    </div>
  );
};

export default Fase13;