import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase3 = () => {
  // LÓGICA DEL DOCUMENTO (OPCIÓN 3):
  // 1. Vector w para llegar a B(5,4) desde A'(2,3) es (3,1). 
  // 2. Combinatoria: 4^4 = 256. 
  // 3. Hojas físicas: 28-29 (1), 52 (1), 77-78 (1), 95 (1) -> Total 5. 
  // RESULTADO COMBINADO: 256 (Combinatoria) + 5 (Lógica) = 2565. 

  return (
    <div className='page-content spiderman-theme'>
      <h1>Fase Final: El Núcleo de la Alcazaba</h1>
      
      <p>
        ¡Atención Spider-Society! Almería está desapareciendo[cite: 4]. Para activar el 
        <strong> Botón de Reinicio Multiversal</strong>, necesitáis el código de 4 dígitos 
        escondido en estos desafíos de matemáticas puras[cite: 7, 47].
      </p>

      <div className='desafio-container'>
        <div className='paso-matematico'>
          <h3>Paso 1: La Red de Vectores</h3>
          <p>
            Estáis en el punto A'(2, 3). Para alcanzar la pieza final oculta en 
            el punto <strong>B(5, 4)</strong>, calculad el vector director 
            <strong> vec(w)</strong>. 
            ¿Cuál es su movimiento en el eje vertical (Y)? 
            <em> (Este dato os ayudará a confirmar vuestra posición)</em>.
          </p>
        </div>

        <div className='paso-matematico'>
          <h3>Paso 2: Combinatoria de Portales</h3>
          <p>
            Debéis elegir una secuencia de 4 colores entre 4 portales disponibles. 
            Si el orden importa y podéis repetir colores, ¿cuántas combinaciones 
            existen?. 
            <em> (Este resultado son los 3 primeros dígitos del código)</em>.
          </p>
        </div>

        <div className='paso-matematico'>
          <h3>Paso 3: El Glitch del Manual</h3>
          <p>
            Para el último dígito: Si arrancamos las páginas 28, 29, 52, 77, 78 
            y 95 de la guía de la Alcazaba, ¿cuántas <strong>hojas físicas</strong> 
            hemos quitado en total?[cite: 52, 53].
          </p>
        </div>
      </div>

      <SecretInput 
        secretWord="2565" // Código final según el documento [cite: 54]
        navigateTo="/spiderman/victoria" 
        buttonText="Reiniciar Multiverso"
        entradaText="Introduce el código de 4 dígitos"
      />
    </div>
  );
};

export default Fase3;