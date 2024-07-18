// src/components/SecretInput.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SecretInput = ({ secretWord, navigateTo, buttonText }) => {
  const [inputValue, setInputValue] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.toLowerCase() === secretWord.toLowerCase()) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  const handleButtonClick = () => {
    navigate(navigateTo);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Introduce la palabra secreta"
        value={inputValue}
        onChange={handleInputChange}
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
