import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase1 = () => {
  return (
    <div className='page-content spiderman-theme'>
      <h1>Alerta: Incursión del Duende Verde</h1>
      
      <p>
        El Duende Verde ha surgido de una brecha que se ha creado cerca de la estructura del Cable Inglés. 
        Su escudo de frecuencia se basa en los <strong>Puntos de Anclaje</strong> físicos.
      </p>

      <div className='desafio-container'>
        <div className='acertijos'>
          <h3>Paso 1: Inspección de Campo</h3>
          {/* El número de pilares físicos que deben contar es 4 */}
          <p>
            Localiza los <strong>pilares de piedra</strong> (sillería) que sostienen el inicio de la rampa en el parque. 
            Cuenta cuántos hay y llámales <strong>"X"</strong>.
          </p>
        </div>

        <div className='acertijos'>
          <h3>Paso 2: Calibración de Altura</h3>
          <p>
            La base de la brecha mide <strong>(X + 5)</strong> metros. Si la viga diagonal de energía 
            mide <strong>15m</strong>, usa Pitágoras para hallar la altura <strong>H</strong> del pilar.
          </p>
        </div>

        <div className='acertijos'>
          <h3>Paso 3: El Disparo Final</h3>
          <p>
            Desde esa altura <strong>H</strong>, localizamos al Duende Verde con un ángulo 
            de respecto al suelo del Cable Inglés de <strong>2°</strong>. ¿A qué distancia horizontal (metros) debemos 
            lanzar la red electrificada? (Redondea al entero más cercano).
          </p>
        </div>
      </div>

      <SecretInput 
        secretWord="344" 
        navigateTo="/spiderman/fase2"
        buttonText="¡Lanzar Red!"
        entradaText="Introduce la distancia en metros"
      />
    </div>
  );
};

export default Fase1;