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
      <h1>La Teoría de Paco Pico</h1>
      <h2>Prueba de entrada</h2>
      <p>
        En esta aventura formarán parte seis intrépidos investigadores de matemáticas:
        Clara investigadora en teoría de grupos sectarios, Julia que esta investigando algo, pero no se ha enterado muy bien el qué, Candela 
        que se ha adentrado en la teoría de los cuerpos perfectos (los rumores hablan de que tiene que ver algo con su hijo), Irene que es experta en superficies y 
        cuerpos de la pradera, Nura algebrista enamorada de la geometría y Carlos, que esta desarrollando formas de conseguir apuntes que no se saben ni que existían.
      </p>
      <p>Para poder entrar a esta prueba, os espera un reto para saber si sois dignos de afrontarlo:</p>
      <p className="acertijos">Coméis en un sitio que se usa para jugar en la respuesta del acertijo.</p>

      
      <div className="input-container">
        <input
          type="text"
          placeholder="Introduce la palabra secreta"
          value={inputValue}
          onChange={handleInputChange}
          className="input-secret" // Añade una clase para el input si quieres estilizarlo
        />
        {isButtonVisible && (
          <button onClick={handleButtonClick} className="custom-button">
            Siguiente Fase
          </button>
        )}
      </div>
    </div>
  );
};

export default Services;
