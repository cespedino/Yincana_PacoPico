import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J4 = () => {
  return (
    <div className="page-content">
      <h1>Julia</h1>
      <p>
      Te mandaré a ti y a Candela una foto por whatsapp y la respuesta es la palabra secreta.
      </p>
      <h2>Ventanas al alma</h2>
      <p className='acertijos'>
      Introduce la clave
      </p>

      <SecretInput 
        secretWord="ojos"
        secretWordAlt="mis ojos"
        navigateTo="/teorema/fase12J4"
        buttonText="Penúltima fase"
        entradaText={"gorda me la pones pequeña"}
      />
    </div>
  );
};

export default Fase11J4;