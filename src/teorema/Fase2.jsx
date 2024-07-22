import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase2 = () => {
  return (
    <div className="page-content">
      <p>
        Aunque habéis pasado gran cantidad de veces, por esa plaza. ¿Os habías fijado en los pequeños detalles? <br/>
        El siguiente resultado, os va a ayudar a conocer mejor la zona de vuelta al piso de Clara.
      </p>
      <h2>Teorema de las Botellas</h2>
      <p className='acertijos'>
        Bajo el globo, un perro observa y <br/>
        un pato corre. Sobre la moto, <br/>
        ¿cuántas botellas hay?
      </p>

      <SecretInput 
        secretWord="una"
        navigateTo="/teorema/fase3"
        buttonText="Siguiente Fase"
        entradaText={"Introduce la solución a este acertijo"}
      />
    </div>
  );
};

export default Fase2;
