import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J5 = () => {
  return (
    <div className="page-content">
      <h1>Candela</h1>
      <p>
      Te mandaré a ti y a Julia una foto por whatsapp y la respuesta es la palabra secreta.
      </p>
      <h2>Verdes ventanas al alma</h2>
      <p className='acertijos'>
      Introduce la clave
      </p>

      <SecretInput 
        secretWord="ojos"
        secretWordAlt="mis ojos"
        navigateTo="/teorema/fase12J5"
        buttonText="Penúltima fase"
        entradaText={"barbie cajera al poder"}
      />
    </div>
  );
};

export default Fase11J5;