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
    if (value.toLowerCase() === 'respuesta') { // Cambia 'respuesta' por la palabra secreta deseada
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  const handleButtonClick = () => {
    navigate('/siguiente-fase'); // Cambia '/siguiente-fase' por la ruta deseada
  };

  return (
    <div className="page-content">
      <h1>Proposición</h1>
      <p>
        Sea X un espacio topológico discreto 
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
