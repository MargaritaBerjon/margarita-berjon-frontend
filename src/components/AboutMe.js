import React from 'react';
import '../style/AboutMe.css';
import MargaritaBerjon from '../images/Margarita_Berjon_web.jpg'


function AboutMe() {
  return (
    <div className="about-me">
      <img src={MargaritaBerjon} alt="Foto de Margarita Berjon" className='about-me-foto'></img>
      <div>
        <h1>Sobre mí</h1>
        <p>Marketiniana digital reconvertida a frontend developer con conocimientos en diseño de experiencia de usuario y ganas de continuar aprendiendo. Mi experiencia y conocimientos en estas tres áreas me aportan una visión completa del proceso de desarrollo de productos digitales.</p>
      </div>
    </div>
  );
}

export default AboutMe;