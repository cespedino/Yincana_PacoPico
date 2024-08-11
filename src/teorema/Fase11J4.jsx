import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J4 = () => {
  return (
    <div className="page-content">
      <h1>Julia</h1>
      <p>
        A partir de aquí todo cambia, os separáis y cada uno tenéis que continuar por vuestra cuenta.
      </p>
      <h2>acertijo </h2>
      <p className='acertijos'>
        Dos gemelos presentes, <br/>
        asombran a toda la gente, <br/>
        con ventanas al alma, revelan <br/>
        lo que el corazón siente <br/>
        ¿Quiénes somos? 
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