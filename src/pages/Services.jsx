import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

const Services = () => {
  const [inputValue, setInputValue] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.toLowerCase() === 'vitalia') {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  const handleButtonClick = () => {
    navigate('/fase1');
  };

  return (
    <div className='page-content' id="inicio">
      <h1>El teorema de Paco Pico</h1>
      <h2>Prueba de entrada</h2>
      <p>
        Para poder entrar a esta yincana, os espera un reto para saber si sois dignos de afrontar un reto tan distintivo: <br/>
        Coméis en un sitio que se usa para jugar en la respuesta del acertijo
      </p>
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
