import React, { useState } from 'react'
import styled from 'styled-components'
import generateCardNumber from './lib/generator'
import CardWrapper from './components/card'


import americanexpress from './cardlogos/amex.svg'
import discover from './cardlogos/discover.svg'
import mastercard from './cardlogos/mastercard.svg'
import visa from './cardlogos/visa.svg'

const logoMap = {
  americanexpress,
  visa16: visa,
  visa13: visa,
  mastercard,
  discover
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

function App() {

  const [number, setNumber] = useState('')
  const [cardType, setCardType] = useState('americanexpress')
  const [logoSource, setLogoSource] = useState(americanexpress)

  const handleCardTypeChange = ({ target: { value }}) => {
    setCardType(value)
    setNumber('')
    setLogoSource(logoMap[value])
  }
  
  const generateFakeCardNumber = () => {
    const cardNumber = generateCardNumber(cardType)
    setNumber(cardNumber.join(''))
  }


  return (
    <Section>
      <CardWrapper cardSource={logoSource}/>
      <div>
        <select value={cardType} onChange={handleCardTypeChange}>
          <option value='americanexpress'>American Express</option>
          <option value='visa16'>Visa</option>
          <option value='visa13'>Visa13</option>
          <option value='mastercard'>Mastercard</option>
          <option value='discover'>Discover</option>
        </select>
        <button onClick={generateFakeCardNumber}>Generate</button>
      </div>
      <div>
        {number}
      </div>

    </Section>
  )
}

export default App
