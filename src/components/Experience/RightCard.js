import React from 'react';
import '../../style/RightCard.css';

const RightCard = ({ classCard, text }) => (
  <div className={`${classCard}`}>
    <div className='card-riht-div'>{text}</div>
  </div>
);

export default RightCard;