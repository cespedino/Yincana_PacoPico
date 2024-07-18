import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

const Fase1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.toLowerCase() === 'amarilla') { // Cambia 'respuesta' por la palabra secreta deseada
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  const handleButtonClick = () => {
    navigate('/fase2');
  };

  return (
    <div className="page-content">
      <h1>Teorema de Paco Pico</h1>
      <p>
        Sea X un espacio topológico discreto tal que se verifican las siguientes propiedades: <br />
          •	Existe al menos un fifa shiny. <br />
          •	El número de potaxies y swifties es mayor o igual al número de fifas. <br />
          •	Haya tensión sexual entre algunos elementos, pero no pase de ahí. <br />
          •	No haya relaciones simétricas entre los elementos.<br />
        Entonces, se forma la secta de Paco Pico. <br />
        A partir de aquí vuestro trabajo va a ser demostrar este teorema e ir avanzando por definiciones, lemas y proposiciones que os terminarán llevando al Teorema
        Fundamental de Paco Pico. <br />
      </p>
      <p>Esperemos que os guste, se ha hecho con mucho cariño y con el fin de que lo disfruteis al máximo.</p>
      <h2>Lema de la farola</h2>
      <p>
        En la plaza de las ocho farolas de colores, hay un color que no se repite. ¿Cuál es?
      </p>
      <input
        type="text"
        placeholder="Introduce la palabra secreta"
        value={inputValue}
        onChange={handleInputChange}
      />
      {isButtonVisible && (
        <button onClick={handleButtonClick} className="custom-button">
          Siguiente Fase
        </button>
      )}
    </div>
  );
};

export default Fase1;
