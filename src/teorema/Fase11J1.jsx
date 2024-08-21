import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J1 = () => {
  return (
    <div className="page-content">
      <h1>Clara</h1>
      <p>
      Tendrás que ir a la localización del acertijo y buscar un QR que contendrá una pista que te ayudará a pasar a la siguiente fase.
      </p>
      <h2>Teorema de la Búsqueda</h2>
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
        buttonText="Penúltima fase"
        entradaText={"você pode"}
      />
    </div>
  );
};

export default Fase11J1;