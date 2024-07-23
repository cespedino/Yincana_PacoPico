import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase8 = () => {
  return (
    <div className="page-content">
      <p>
        Algún día Clara conseguirá que todos veamos el documental de One Direction mientras tanto, os dejo con el enigma más complicado de todos.
        Paciencia y pensarlo bien.
      </p>
      <h2>Teorema Imposible</h2>
      <p className="acertijos">Coméis en un sitio que se usa para jugar en la respuesta del acertijo.</p>
      
      <SecretInput 
        secretWord="vitalia"
        secretWordAlt="vitalia"
        navigateTo="/teorema/fase9"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la respuesta del acertijo"}
      />
    </div>
  );
};

export default Fase8;