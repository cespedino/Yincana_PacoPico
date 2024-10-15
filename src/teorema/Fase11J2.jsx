import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J2 = () => {
  return (
    <div className="page-content">
      <h1>Carlos</h1>
      <p>
      Te mandaré a ti y a Raúl una foto por whatsapp y si me decis donde esta el objeto que tenéis que encontrar os daré la palabra secreta
      </p>
      <h2></h2>
      <p className='acertijos'>
        Introduce la clave
      </p>

      <SecretInput 
        secretWord="pistola"
        secretWordAlt="pistola"
        navigateTo="/teorema/fase12J2"
        buttonText="Penúltima fase"
        entradaText={"Tonto el que lo lea"}
      />
    </div>
  );
};

export default Fase11J2;