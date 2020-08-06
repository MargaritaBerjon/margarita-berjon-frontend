import React from 'react';
import '../../style/RightCard.css';

const RightCard = ({ classCard, classTop, text }) => (
  <div className={`${classCard} ${classTop}`}>
    <div className='cardOne-div'><p>{text}</p></div>
  </div>
);

export default RightCard;