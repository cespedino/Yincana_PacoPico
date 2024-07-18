import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'

const Services = () => {

  const [inputValue, setInputValue] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.toLowerCase() === 'secreta') { // Reemplaza 'secreta' con la palabra secreta que desees
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  const handleButtonClick = () => {
    navigate('/fase1');
  };

  return (
    <div className='pag-principales' id="inicio">
      <h1>El teorema de Paco Pico</h1>
      <h2>Prueba de entrada</h2>
      <p>Para poder entrar a esta yincana, os espera un reto para saber si sois dignos de afrontar un reto tan distintivo</p>
      <p>Coméis en un sitio que se usa para jugar en la respuesta del acertijo</p>
      <input
        type="text"
        placeholder="Introduce la palabra secreta"
        value={inputValue}
        onChange={handleInputChange}
      />
      {isButtonVisible && (
        <button onClick={handleButtonClick} className="custom-button">
          Siguiente Página
        </button>
      )}
    </div>
  );
};

export default Services;
