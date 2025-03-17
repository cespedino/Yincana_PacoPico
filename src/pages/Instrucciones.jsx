import React from 'react';

const Instrucciones = () => {
  return (
    <div className='page-content'>
      <h1>Instrucciones</h1>
      <p>Esto es una pequeña guía para lo que vais a ver a continuación.<br />
         Reglas: </p>
      <p className='extra-margin'>  
        1. No mirar el código del proyecto. <br />
        2. El dispositivo desde donde lo empieces será tu centro de operaciones (preferiblemente vuestro móvil). <br />
        3. No está permitido usar ninguna ayuda externa sin la supervisión de algún organizador (google, chatGPT, maps, WhatsApp, etc.). <br />
        4. Importante, no darle atrás ni recargar la página, por si acaso ir guardando las respuestas a los enigmas por si por algún motivo tuvieses que empezar
            desde el principio. <br/>
        5. Todo lo que se cuenta es figurado, pero para una mejor experiencia se recomienda sumergirse en la narración. <br />
      </p>
      <p>Esperemos que os guste, se ha hecho con mucho cariño y con el fin de que lo disfruteis al máximo.</p>
    </div>
  );
}

export default Instrucciones;

