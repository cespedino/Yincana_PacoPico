import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase2 = () => {
  // LÓGICA PARA EL PROFESOR:
  // 1. Número de peces (Y) = 4
  // 2. Ecuación: E = (4 * 15) + 10
  // 3. Resultado = 70

  return (
    <div className='page-content spiderman-theme'>
      <h1>Fase 2: El Cortocircuito de Electro</h1>
      
      <p>
        ¡Rápido! Electro está sobrecargando la red eléctrica desde la 
        <strong> Fuente de los Peces</strong>. Tenemos que drenar su energía 
        antes de que sea demasiado tarde.
      </p>

      <div className='desafio-container'>
        <div className='paso-matematico'>
          <h3>Paso 1: Localización de Campo</h3>
          <p>
            Encuentra la Fuente de los Peces en la Rambla. Cuenta cuántos 
            <strong> peces</strong> forman la escultura circular y llámales <strong>"Y"</strong>.
            {/* El valor de Y es 4 */}
          </p>
        </div>

        <div className='paso-matematico'>
          <h3>Paso 2: Cálculo de Sobrecarga</h3>
          <p>
            La energía (E) de Electro sigue esta fórmula: <br/>
            <strong>E = Y · t + 10</strong>
          </p>
          <p>
            Calcula el valor de <strong>E</strong> para un tiempo de <strong>t = 15 minutos</strong>. 
            Ese número es el código de desactivación.
          </p>
        </div>
      </div>

      <SecretInput 
        secretWord="70" 
        navigateTo="/spiderman/fase3" // Cambia esto a la ruta de la siguiente fase
        buttonText="Cortar Energía"
        entradaText="Introduce la energía acumulada (E)"
      />
    </div>
  );
};

export default Fase2;