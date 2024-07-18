export const handleSecretWordChange = (e, secretWord, setInputValue, setIsButtonVisible) => {
    
    const [inputValue, setInputValue] = useState('');
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (e.target.value.toLowerCase() === 'secreta') { // Reemplaza 'secreta' con la palabra secreta que desees
        setIsButtonVisible(true);
        } else {
        setIsButtonVisible(false);
    }
  };

    setInputValue(e.target.value);
    if (inputValue.toLowerCase() === secretWord) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };
  