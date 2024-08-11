import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase11J6 = () => {
  return (
    <div className="page-content">
      <h1>Nura</h1>
      <p>
        A partir de aquí todo cambia, os separáis y cada uno tenéis que continuar por vuestra cuenta.
      </p>
      <h2>acertijo</h2>
      <p className='acertijos'>
        A veces loko, otras veces con garras <br/>
        A veces de topo, otras veces de prob <br/>
        ¿Quién puedo ser?
      </p>
      <SecretInput 
        secretWord="dilf"
        secretWordAlt="dilfs"
        navigateTo="/teorema/fase12J6"
        buttonText="Penúltima fase"
        entradaText={"shot of faith"}
      />
    </div>
  );
};

export default Fase11J6;