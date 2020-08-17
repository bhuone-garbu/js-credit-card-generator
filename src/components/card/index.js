import React from 'react';

import americanexpress from '../../cardlogos/amex.svg'
import discover from '../../cardlogos/discover.svg'
import mastercard from '../../cardlogos/mastercard.svg'
import visa from '../../cardlogos/visa.svg'
import formator from '../../lib/formator';

const logoMap = {
  americanexpress,
  visa,
  mastercard,
  discover
};

const CardWrapper = ({ cardType, cardNumber }) => (
  <div className="card">
    <img src={logoMap[cardType]} alt='card type logo'/>
    <h2>{formator(cardNumber, cardType)}</h2>
  </div>
)

export default CardWrapper;
