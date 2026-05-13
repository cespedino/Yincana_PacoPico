import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase5 = () => {

  return (
    <div className='page-content spiderman-theme final-mission'>

      <div className='alerta-multiversal'>
        <h1>NODO FINAL: REINICIO DEL MULTIVERSO</h1>

        <p className='urgente'>
          Miguel O'Hara ha localizado el núcleo del colapso en la Alcazaba de Almería.
          Las dimensiones están fusionándose.
        </p>
      </div>

      <p className='instrucciones'>
        Habéis reunido todos los fragmentos del Tangram Multiversal.
        Solo queda descifrar el código definitivo antes de que el universo
        desaparezca para siempre.
      </p>

      <div className='desafio-container main-boss'>

        <div className='paso-matematico'>
          <h3>1. Combinatoria de Portales</h3>

          <p>
            Existen 4 portales dimensionales diferentes.
            Para estabilizar la red, debéis formar una secuencia de 4 portales.
          </p>

          <p>
            El orden importa y podéis repetir portales.
          </p>

          <p>
            ¿Cuántas combinaciones posibles existen?
          </p>

          <p>
            <strong>
              (Estos son los 3 primeros dígitos del código)
            </strong>
          </p>
        </div>

        <div className='paso-matematico'>
          <h3>2. El Glitch del Manual</h3>

          <p>
            Una anomalía ha destruido parte de la guía de la Alcazaba.
          </p>

          <p>
            Si arrancamos las páginas:
          </p>

          <p>
            28, 29, 52, 77, 78 y 95
          </p>

          <p>
            ¿Cuántas <strong>hojas físicas</strong> se han eliminado?
          </p>

          <p>
            <strong>
              (Este es el último dígito del código)
            </strong>
          </p>
        </div>

      </div>

      <p className='instrucciones'>
        Introducid el código final para reiniciar el multiverso.
      </p>

      <SecretInput
        secretWord="2565"
        navigateTo="/spiderman/fase6"
        buttonText="REINICIAR MULTIVERSO"
        entradaText="Introduce el código de 4 dígitos"
      />

    </div>
  );
};

export default Fase5;