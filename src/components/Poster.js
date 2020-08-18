import React from 'react';
import '../style/Poster.css';
import * as arrow from '../images/arrow.png'


function Poster(props) {
  return (
    <div className="poster" style={props.posterStyle} >
      <h1 className='poster-h1'>Margarita Berjón</h1>
      <h2 className='poster-h2'> UX | Frontend developer</h2>
      <img src={arrow} alt="arrow" onClick={props.start} className={'startArrow'} />
    </div>
  );
}

export default Poster;