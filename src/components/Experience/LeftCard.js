import React from 'react';
import '../../style/LeftCard.css'

const CardTwo = ({ classCard, classTop, text }) => (
  <div className={`${classCard} ${classTop}`}>
    <div className='cardTwo-div'>{text}</div>
  </div>
);

export default CardTwo;