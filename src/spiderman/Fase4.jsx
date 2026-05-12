import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Fase4 = () => {

  return (
    <div className='page-content spiderman-theme'>
      <h1>Fase 4: El Código de la Alcazaba</h1>

      <p>
        Spider-Man 2099 ha encontrado un último mensaje oculto en las murallas
        de la Alcazaba de Almería.
        El multiverso sigue colapsando y necesitáis resolver el acertijo final
        antes de que desaparezca toda la ciudad.
      </p>

      <div className='desafio-container'>

        <div className='paso-matematico'>
          <h3>Prueba 1: Las Torres de Vigilancia</h3>

          <p>
            Desde una torre se observan 5 caminos distintos hacia el puerto.
            Spider-Man puede recorrerlos en cualquier orden posible sin repetir.
          </p>

          <p>
            ¿Cuántas formas diferentes existen de ordenar los 5 caminos?
          </p>

          <p>
            <strong>
              (Usad únicamente las dos últimas cifras del resultado)
            </strong>
          </p>
        </div>

        <div className='paso-matematico'>
          <h3>Prueba 2: Coordenadas Secretas</h3>

          <p>
            Miles Morales encuentra un punto oculto en el plano:
          </p>

          <p>
            A(2,3) → B(7,8)
          </p>

          <p>
            Calculad el vector AB.
            ¿Cuánto vale el desplazamiento horizontal?
          </p>

          <p>
            <strong>
              (Este número confirma vuestro código)
            </strong>
          </p>
        </div>

      </div>

      <p>
        Combinad correctamente los resultados para desbloquear el acceso final.
      </p>

      <SecretInput
        secretWord="25"
        navigateTo="/spiderman/fase5"
        buttonText="Acceder al Núcleo"
        entradaText="Introduce el código secreto"
      />
    </div>
  );
};

export default Fase4;