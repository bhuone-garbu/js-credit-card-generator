import React, { useState, useEffect } from 'react';

import generateCardNumber from './lib/generator';
import CardWrapper from './components/card';
import './App.css';

function App() {

  const [number, setNumber] = useState('');
  const [cardType, setCardType] = useState('americanexpress');

  const handleCardTypeChange = ({ target: { value }}) => setCardType(value);
  
  const generateFakeCardNumber = () => {
    console.log('generated a new one')
    const cardNumber = generateCardNumber(cardType);
    setNumber(cardNumber.join(''));
  };

  useEffect(() => {
    generateFakeCardNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardType])

  return (
    <section>
      <div>
        <select value={cardType} onChange={handleCardTypeChange}>
          <option value='americanexpress'>American Express</option>
          <option value='visa'>Visa</option>
          <option value='mastercard'>Mastercard</option>
          <option value='discover'>Discover</option>
        </select>
        <CardWrapper cardType={cardType} cardNumber={number}/>
        <button onClick={generateFakeCardNumber}>Refresh</button>
      </div>
    </section>
  )
}

export default App;
