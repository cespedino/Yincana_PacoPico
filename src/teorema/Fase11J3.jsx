import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J3 = () => {
  return (
    <div className="page-content">
      <h1>Irene</h1>
      <p>
        Tenéis unas letras y tendrás con Clara que descubrir la palabra de tu acertijo.
      </p>
      <h2>Lema generacional</h2>
      <p className='acertijos'>
        Descubre la palabra correcta.
      </p>

      <SecretInput 
        secretWord="eurovisión"
        secretWordAlt="eurovisión"
        navigateTo="/teorema/fase12J3"
        buttonText="Penúltima fase"
        entradaText={"¿Será verdad que siempre tienes la razón?"}
      />
    </div>
  );
};

export default Fase11J3;