// src/components/SecretInput.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

const SecretInput = ({ secretWord, secretWordAlt, navigateTo, buttonText, entradaText }) => {
  const [inputValue, setInputValue] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.toLowerCase() === secretWord.toLowerCase() || value.toLowerCase() === secretWordAlt.toLowerCase()) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  const handleButtonClick = () => {
    navigate(navigateTo);
  };

  return (

      <div className="input-container">
        <input
          type="text"
          placeholder={entradaText}
          value={inputValue}
          onChange={handleInputChange}
          className="input-secret" // Añade una clase para el input si quieres estilizarlo
        />
        {isButtonVisible && (
          <button onClick={handleButtonClick} className="custom-button">
            {buttonText}
          </button>
        )}
      </div>
  );
};

export default SecretInput;
