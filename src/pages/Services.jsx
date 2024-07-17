import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'

const Services = () => {

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
    navigate('/fase1');
  };

  return (
    <div className='pag-principales' id="inicio">
      <h1>El teorema de Paco Pico</h1>
      <p>Sea X un espacio topológico discreto tal que se verifican las siguientes propiedades: <br />
          •	Existe al menos un fifa shiny. <br />
          •	El número de potaxies y swifties es mayor o igual al número de fifas. <br />
          •	Haya tensión sexual entre algunos elementos, pero no pase de ahí. <br />
          •	No haya relaciones simétricas entre los elementos.<br />
        Entonces, se forma la secta de Paco Pico. <br />
        A partir de aquí vuestro trabajo va a ser demostrar este teorema e ir avanzando por definiciones, lemas y proposiciones que os terminarán llevando al Teorema
        Fundamental de Paco Pico. <br />
      </p>
      <p>
        En esta aventura formarán parte seis intrépidos investigadores de matemáticas:
        Clara investigadora en teoría de grupos sectarios, Julia que esta investigando algo, pero no se ha enterado muy bien el qué, Candela 
        que se ha adentrado en la teoría de los cuerpos perfectos (los rumores hablan de que tiene que ver algo con su hijo), Irene que es experta en superficies y 
        cuerpos de la pradera, Nura algebrista enamorada de la geometría y Carlos, que consigue apuntes que no se saben ni que existían.
      </p>
      <p>Esperemos que os guste, se ha hecho con mucho cariño y con el fin de que lo disfruteis al máximo.</p>
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
