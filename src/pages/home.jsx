import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Home = () => {
  return (
    <div className="page-content">
      <h1>¡Bienvenidos, valientes aspirantes a la gloria eterna!</h1>
      <p>
        Esta es la página principal de la yincana, desde aquí podréis acceder a las instrucciones y a la yincana en si. <br/>
        Espero que sea de vuestro agrado, ha sido un proceso bastante largo pero ójala lo disfrutéis. 
        Cuando la terminéis desbloquearéis acceso a la recompensa final. <br/>
        ¡Adelante! Este es vuestro momento, vuestra oportunidad de pasar un rato divertido.
      </p>
      <p>
        Para empezar, abrir el desplegable en lo alto de la pantalla y leer las instrucciones
      </p>

      <SecretInput 
        secretWord="16/11/2022"
        secretWordAlt="jaldsgpoaknjaeopiaukjdsnaofiguda"
        navigateTo="/teorema/final"
        buttonText="Final"
        entradaText={"Aún no tienes acceso a este acertijo"}
      />
    </div>
  );
};

export default Home;
