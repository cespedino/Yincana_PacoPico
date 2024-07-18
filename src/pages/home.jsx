import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

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
      <h1>Bienvenidos</h1>
      <p>Bienvenido a la página de inicio.</p>
      <input
        type="text"
        placeholder="Aún no has desbloqueado el acceso a este engima"
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
