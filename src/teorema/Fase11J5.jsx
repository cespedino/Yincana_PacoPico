import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J5 = () => {
  return (
    <div className="page-content">
      <h1>Candela</h1>
      <p>
        A partir de aquí todo cambia, os separáis y cada uno tenéis que continuar por vuestra cuenta.
      </p>
      <h2>Verdes ventanas al alma</h2>
      <p className='acertijos'>
        Dos pequeños cielos en tu mirar, <br/>
        brillan como el mar al amanecer, <br/>
        son esmeraldas que nadie puede comprar, <br/>
        ¿qué son estos tesoros que no puedes esconder? <br/>
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