import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J1 = () => {
  return (
    <div className="page-content">
      <h1>Clara</h1>
      <p>
      Téneis unas letras y tendrás con Irene que descubrir la palabra de vuestro acertijo.
      </p>
      <h2>Teorema de la Búsqueda</h2>
      <p className='acertijos'>
        Introduce la palabra correcta.
      </p>

      <SecretInput 
        secretWord="sensaciones"
        secretWordAlt="la amistad"
        navigateTo="/teorema/fase12J1"
        buttonText="Penúltima fase"
        entradaText={"você pode"}
      />
    </div>
  );
};

export default Fase11J1;