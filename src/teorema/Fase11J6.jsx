import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J6 = () => {
  return (
    <div className="page-content">
      <h1>Raúl</h1>
      <p>
      Te mandaré a ti y a Carlos una foto por whatsapp y si me decis donde esta el objeto que tenéis que encontrar os daré la palabra secreta
      </p>
      <h2>Si te duplico la edad...</h2>
      <p className='acertijos'>
      Introduce la clave
      </p>
      <SecretInput 
        secretWord="pistola"
        secretWordAlt="pistola"
        navigateTo="/teorema/fase12J6"
        buttonText="Penúltima fase"
        entradaText={"shot of faith"}
      />
    </div>
  );
};

export default Fase11J6;