import React, { useState, useEffect } from 'react'
import RightCard from './RightCard.js';
import LeftCard from './LeftCard.js';
import '../../style/Experience.css';

function Experience() {
  const [left, setLeft] = useState('hidden')
  const [right, setRight] = useState('hidden')


  useEffect(() => {
    window.onscroll = () => handleAnimation();
  });


  function handleAnimation() {
    if (document.documentElement.scrollTop > 1000) {
      setLeft('card-left')
    }

    if (document.documentElement.scrollTop > 1000) {
      setRight('card-right')
    }

  };

  return (
    <div className="experience">
      <div>
        <h2 className='experience-h2'>Experiencia</h2>
        <LeftCard classCard={left} text={<><h3>UX writer</h3><p>The cocktail - 2019</p></>} />
        <RightCard classCard={right} text={<><h3>Digital marketing manager</h3><p>Mariscal Abogados - 2013 a 2018</p></>} />
      </div>
      <div >
        <h2 className='experience-h2'>Formación</h2>
        <LeftCard classCard={left} text={<><h3>JavaScript Moderno</h3><p>Udemy 2020</p></>} />
        <RightCard classCard={right} text={<><h3>Curso intensivo de desarrollo Front End</h3><p>Adalab 2020</p></>} />
        <LeftCard classCard={left} text={<><h3>Responsive web design</h3><p>Freecodecamp 2019</p></>} />
        <RightCard classCard={right} text={<><h3>Introducción al desarrollo web. Html, CSS  </h3><p>Google2019</p></>} />
        <LeftCard classCard={left} text={<><h3>Máster en experiencia de usuario </h3><p>ESNE 2019</p></>} />
        <RightCard classCard={right} text={<><h3>Photoshop para wordpress y contenidos digitales</h3><p>Advei 2017</p></>} />
        <LeftCard classCard={left} text={<><h3>Analítica web</h3><p>Google 2016</p></>} />
        <RightCard classCard={right} text={<><h3>Community manager</h3><p>Advei 2015</p></>} />
        <LeftCard classCard={left} text={<><h3>Grado en Marketing </h3><p>URJC 2014</p></>} />
      </div>
    </div>
  );
}

export default Experience;


