
import React, { useState, useEffect } from 'react'
import RightCard from './RightCard.js';
import LeftCard from './LeftCard.js';
import '../../style/Main.css';

function Experience(props) {
  const [one, setOne] = useState('hidden')
  const [two, settwo] = useState('hidden')
  const [onee, setOnee] = useState('hidden')
  const [twoo, settwoo] = useState('hidden')
  const [topOne1, settopOne1] = useState('hidden')
  const [topOne2, settopOne2] = useState('hidden')
  const [topTwo1, settopTwo1] = useState('hidden')
  const [topTwo2, settopTwo2] = useState('hidden')


  useEffect(() => {
    window.onscroll = () => handleAnimation();
  });


  function handleAnimation() {
    if (document.documentElement.scrollTop > 50) {
      console.log(document.documentElement.scrollTop);

      setOne('cardOne')
      settopOne1('topOne1')

    }

    if (document.documentElement.scrollTop > 100) {
      settwo('cardTwo')
      settopTwo1('topTwo1')
    }

    if (document.documentElement.scrollTop > 150) {
      setOnee('cardOne')
      settopOne2('topOne2')

    }

    if (document.documentElement.scrollTop > 200) {
      settwoo('cardTwo')
      settopTwo2('topTwo2')
    }


  };

  return (
    <div>
      <div className="experience">
        <h2>Experiencia laboral</h2>
        <LeftCard classCard={one} classTop={topOne1} text={<><h3>UX writer</h3><p>The cocktail - 2019</p></>} />
        <RightCard classCard={two} classTop={topTwo1} text={<><h3>Digital marketing manager</h3><p>Mariscal Abogados - 2013 a 2018</p></>} />
      </div>
      <div className="experience">
        <h2>Formación</h2>
        <LeftCard classCard={onee} classTop={topOne2} text={<><h3>JavaScript Moderno</h3><p>Udemy 2020</p></>} />
        <RightCard classCard={twoo} classTop={topTwo2} text={<><h3>Curso intensivo de desarrollo Front End.</h3><p>Adalab 2020</p></>} />
      </div>
    </div>
  );
}

export default Experience;


