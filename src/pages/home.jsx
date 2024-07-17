import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === 'secreta') { // Reemplaza 'secreta' con la palabra secreta que desees
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  const handleButtonClick = () => {
    navigate('/services'); // Reemplaza '/next-page' con la ruta de la página a la que deseas navegar
  };

  return (
    <div className="page-content">
      <h1>Home Page</h1>
      <p>Bienvenido a la página de inicio.</p>
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

export default Home;
