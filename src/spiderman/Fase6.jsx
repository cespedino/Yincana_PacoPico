import React from 'react';
import '../styles/pages.css';

const Fase6 = () => {

  return (
    <div className='page-content spiderman-theme final-mission'>

      <div className='alerta-multiversal'>
        <h1 data-text="MULTIVERSO REINICIADO">
          MULTIVERSO REINICIADO
        </h1>

        <p className='urgente'>
          ¡Lo habéis conseguido, Spider-Héroes!
        </p>
      </div>

      <p className='instrucciones'>
        Gracias a vuestra inteligencia, trabajo en equipo y habilidades matemáticas,
        el núcleo dimensional de la Alcazaba ha sido estabilizado.
      </p>

      <div className='desafio-container main-boss'>

        <div className='paso-matematico'>
          <h3>Misión Completada</h3>

          <p>
            El Duende Verde ha sido derrotado.
          </p>

          <p>
            Electro ha perdido el control de la energía.
          </p>

          <p>
            Los portales del Spider-Verso vuelven a estar cerrados.
          </p>
        </div>

        <div className='paso-matematico'>
          <h3>Reconocimiento Oficial</h3>

          <p>
            Miguel O'Hara ha registrado vuestro equipo como
            protectores oficiales del multiverso.
          </p>

          <p>
            La ciudad de Almería está a salvo gracias a vosotros.
          </p>
        </div>

      </div>

      <div className='victory-message'>
        <h2>🕷️ ¡ENHORABUENA! 🕷️</h2>

        <p>
          Habéis completado todas las pruebas del Spider-Verso.
        </p>

        <p>
          Ahora sois miembros honorarios de la Spider-Society.
        </p>
      </div>

    </div>
  );
};

export default Fase6;