import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const City = () => {
  return (
    <div className='page-content'>
      <h1>Escape the City</h1>
      <h2>Prueba de entrada</h2>
      <p>
        En esta aventura recorrerás las calles de Málaga con el fin de descubrir algo que se esconde tras ella.
      </p>
      <p>
        
      </p>
      <p className="acertijos">
        Para empezar la aventura escribe tendrás que superar una pequeña prueba
      </p>
      
      <SecretInput 
        secretWord="ya"
        navigateTo="/city/fase1"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la respuesta del acertijo"}
      />
    </div>
  );
};

export default City;