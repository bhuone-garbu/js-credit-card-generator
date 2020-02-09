import React from 'react'
import { Title, CardImg } from './style'

const CardWrapper = ({ cardSource }) => (
  <div>
    <Title>
      Hello
    </Title>
      <CardImg>
        <img src={cardSource} alt='card type'/>
      </CardImg>
  </div>
)

export default CardWrapper;
