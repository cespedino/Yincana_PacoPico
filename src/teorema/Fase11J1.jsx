import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J1 = () => {
  return (
    <div className="page-content">
      <h1>Clara</h1>
      <p>
        A partir de aquí todo cambia, os separáis y cada uno tenéis que continuar por vuestra cuenta.
      </p>
      <h2>acertijo </h2>
      <p className='acertijos'>
        Un tesoro sin igual, <br/>
        Que en los buenos y malos momentos es real, <br/>
        Entre risas y secretos se forja, <br/>
        En la vida, su valor se desborda. <br/>
      </p>

      <SecretInput 
        secretWord="amistad"
        secretWordAlt="la amistad"
        navigateTo="/teorema/fase12J1"
        buttonText="Ve a la respuesta del acertijo"
        entradaText={"você pode"}
      />
    </div>
  );
};

export default Fase11J1;