
import React, { useState, useEffect } from 'react'
import RightCard from './RightCard.js';
import LeftCard from './LeftCard.js';

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
      <h2>Experiencia laboral</h2>
      <div className="main" />
      <RightCard classCard={one} classTop={topOne1} text={<><h3>UX writer</h3><p>The cocktail - 2019</p></>} />
      <LeftCard classCard={two} classTop={topTwo1} text='Yes, What time suits you?' />
      <RightCard classCard={onee} classTop={topOne2} text='I was thinking after lunch' />
      <LeftCard classCard={twoo} classTop={topTwo2} text='That is Perfect!' />
    </div>
  );
}

export default Experience;


