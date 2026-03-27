import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase5 = () => {
  // LÓGICA FINAL DEL ALMERÍA-VERSO (2026)[cite: 2, 3]:
  // 1. Combinatoria: 4 colores, 4 posiciones, con repetición = 4^4 = 256[cite: 50].
  // 2. Lógica de hojas: Páginas (28-29), 52, (77-78) y 95 = 5 hojas físicas[cite: 52, 53].
  // CÓDIGO FINAL DE SALVACIÓN: 2565.

 

  return (
    <div className='page-content spiderman-theme final-mission'>
      <div className='alerta-multiversal'>
        <h1>NODO FINAL: El Reinicio del Multiverso</h1>
        <p className='urgente'>
          Miguel O'Hara ha detectado el epicentro del colapso en la Alcazaba. 
          ¡La ciudad se está pixelando! [cite: 4]
        </p>
      </div>
      
      <p className='instrucciones'>
        Habéis reunido los fragmentos del Tangram Multiversal[cite: 7]. 
        Para activar el botón de "Reinicio del Multiverso", 
        debéis descifrar el <strong>Código de Salvación</strong> de 4 dígitos.
      </p>

      <div className='desafio-container main-boss'>
        <div className='paso-matematico'>
          <h3>1. Combinatoria de Portales</h3>
          <p>
            Para sellar la brecha, debéis elegir una secuencia de 4 colores entre 4 opciones. 
            Si el orden importa y podéis repetir colores, ¿cuántas combinaciones deben probar? [cite: 48, 49]
            <br />
            <strong>(Estos son los 3 primeros dígitos: VR<sub>4,4</sub>)</strong> [cite: 50]
          </p>
        </div>

        <div className='paso-matematico'>
          <h3>2. El Glitch del Manual</h3>
          <p>
            En la guía turística de Almería, un error ha borrado el último dígito. 
            Si arrancamos las páginas 28, 29, 52, 77, 78 y 95... 
            ¿Cuántas <strong>hojas físicas</strong> hemos quitado en total? [cite: 52]
            <br />
            <strong>(Este es el último dígito del código)</strong> 
          </p>
        </div>
      </div>

      <SecretInput 
        secretWord="2565" // Código según el documento [cite: 54]
        navigateTo="/spiderman/victoria" 
        buttonText="REINICIAR MULTIVERSO"
        entradaText="Introduce el código de 4 dígitos"
      />
      
      {/* Nota para el profesor: El código final es 2565  */}
    </div>
  );
};

export default Fase5;