import React, { useState } from 'react';

import './App.css';

import NumberPad from './NumberPad.js';
import SelectedNumbers from './SelectedNumbers.js';
import MoneyPad from './MoneyPad.js';
import Buttons from './Buttons.js';
import Alert from './Alert.js';

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [moneyValue, setMoneyValue] = useState(0);
  const [alert, setAlert] = useState({ show: false, message: '' });
  const [ticketCashed, setTicketCashed] = useState(false);

  const handleNumberSelect = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(num => num !== number));
    } else {
      if (selectedNumbers.length < 5) {
        setSelectedNumbers([...selectedNumbers, number]);
      } else {
        showAlert("You can only select 5 numbers!");
      }
    }
  };

  const handleMoneyValueSelect = (value) => {
    if (selectedNumbers.length === 5) {
      setMoneyValue(moneyValue + value);
    } else {
      showAlert("Please select 5 numbers first!");
    }
  };

  const handleClear = () => {
    setSelectedNumbers([]);
    setMoneyValue(0);
    setTicketCashed(false);
  };

  const handleRandom = () => {
    const generateUniqueRandomNumbers = () => {
      let numbers = [];
      while (numbers.length < 5) {
        const randomNum = Math.floor(Math.random() * 20) + 1;
        if (!numbers.includes(randomNum)) {
          numbers.push(randomNum);
        }
      }
      return numbers;
    };

    setSelectedNumbers(generateUniqueRandomNumbers());
  };

  const handleCash = () => {
    if (selectedNumbers.length === 5 && moneyValue > 0) {
      setTicketCashed(true);
    } else if (selectedNumbers.length < 5) {
      showAlert("Please select 5 numbers first!");
    } else if (moneyValue <= 0) {
      showAlert("Please assign a money value to the ticket!");
    }
  };

  const showAlert = (message) => {
    setAlert({ show: true, message });
    setTimeout(() => {
      setAlert({ show: false, message: '' });
    }, 3000);
  };

  return (
    <div className="app-container">
      <h1>WHE WHE on D' Avenue</h1>
      
      <div className="main-content">
        <div className="left-panel">
          <NumberPad 
            selectedNumbers={selectedNumbers} 
            onNumberSelect={handleNumberSelect} 
          />
          
          <MoneyPad onMoneySelect={handleMoneyValueSelect} />
          
          <Buttons 
            onClear={handleClear}
            onRandom={handleRandom}
            onCash={handleCash}
          />
        </div>
        
        <div className="right-panel">
          <SelectedNumbers 
            numbers={selectedNumbers} 
            moneyValue={moneyValue}
          />
          
          {ticketCashed && (
            <div className="ticket-cashed">
              <h3>Ticket Cashed!</h3>
              <p>Selected Numbers: {selectedNumbers.join(', ')}</p>
              <p>Total: ${moneyValue.toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
      
      {alert.show && <Alert message={alert.message} />}
    </div>
  );
}

export default App;