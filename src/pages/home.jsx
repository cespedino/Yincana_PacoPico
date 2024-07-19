import React from 'react';
import SecretInput from '../components/SecretInput';
import '../styles/pages.css';

const Home = () => {
  return (
    <div className="page-content">
      <h1>¡Bienvenidos, valientes aspirantes a la gloria eterna!</h1>
      <p>
        En el vasto y misterioso reino de la mente humana, donde la razón y la creatividad entrelazan sus hilos en un tapiz de enigmáticos desafíos, os presentamos la yincana más formidable jamás concebida. No es un simple juego, sino una odisea intelectual, un regalo nacido del deseo de probar los límites de vuestra sagacidad y determinación.
        Imaginad un espacio infinito, donde los axiomas matemáticos se encuentran con los misterios del corazón humano, donde cada pista es una llave y cada acertijo, una puerta hacia un conocimiento ancestral. En este sendero, cada paso os acercará a la resolución de enigmas que han desconcertado a las mentes más brillantes, y cada acierto será una victoria sobre el velo de la ignorancia. <br/ >
        ¡Adelante, valientes! Este es vuestro momento, vuestra oportunidad de brillar con luz propia. Que la sabiduría os guíe y que el coraje sea vuestra bandera. ¡La gloria os espera!
      </p>
      <p>
        Para empezar, abrir el desplegable en lo alto de la pantalla y leer las instrucciones
      </p>

      <SecretInput 
        secretWord="hola"
        navigateTo="/services"
        buttonText="Siguiente Fase"
        entradaText={"Aún no tienes acceso a este acertijo"}
      />
    </div>
  );
};

export default Home;
