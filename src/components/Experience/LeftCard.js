import React from 'react';
import '../../style/LeftCard.css'




const CardTwo = ({ classCard, classTop, text }) => (
  <div className={`${classCard} ${classTop}`}>
    <div><p>{text}</p></div>
    {/* <img src={manTwo} /> */}
  </div>
);

export default CardTwo;