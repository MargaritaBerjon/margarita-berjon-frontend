import React from 'react';
import '../../style/LeftCard.css'

const LeftCard = ({ classCard, text }) => (
  // <div className={`${classCard}`}>
  <div className='card-left-div'>{text}</div>
  // </div>
);

export default LeftCard;