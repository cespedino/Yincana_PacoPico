import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.toLowerCase() === 'hola') { // Cambia 'hola' por la palabra secreta deseada
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  const handleButtonClick = () => {
    navigate('/fase1'); // Cambia '/fase1' por la ruta deseada
  };

  return (
    <div className="page-content">
      <h1>¡Bienvenidos, valientes aspirantes a la gloria eterna!</h1>
      <p>
        En el vasto y misterioso reino de la mente humana, donde la razón y la creatividad entrelazan sus hilos en un tapiz de enigmáticos desafíos, os presentamos la yincana más formidable jamás concebida. No es un simple juego, sino una odisea intelectual, un regalo nacido del deseo de probar los límites de vuestra sagacidad y determinación.
        Imaginad un espacio infinito, donde los axiomas matemáticos se encuentran con los misterios del corazón humano, donde cada pista es una llave y cada acertijo, una puerta hacia un conocimiento ancestral. En este sendero, cada paso os acercará a la resolución de enigmas que han desconcertado a las mentes más brillantes, y cada acierto será una victoria sobre el velo de la ignorancia. <br/ >
        ¡Adelante, valientes! Que la yincana comience y que el eco de vuestros triunfos resuene en los anales del tiempo. Este es vuestro momento, vuestra oportunidad de brillar con luz propia. Que la sabiduría os guíe y que el coraje sea vuestra bandera. ¡La gloria os espera!
      </p>
      <p>
        Para empezar, abrir el desplegable en lo alto de la pantalla y leer las instrucciones
      </p>
      <input
        type="text"
        placeholder="Aún no has tienes acceso a este engima"
        value={inputValue}
        onChange={handleInputChange}
      />
      {isButtonVisible && (
        <button onClick={handleButtonClick} className="custom-button">
          Fase Final
        </button>
      )}
    </div>
  );
};

export default Home;
