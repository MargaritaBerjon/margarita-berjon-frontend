import React from 'react';
import '../style/AboutMe.css';
import MargaritaBerjon from '../images/Margarita_Berjon_web.jpg'


function AboutMe() {
  return (
    <div className="about-me">
      <img src={MargaritaBerjon} alt="Foto de Margarita Berjon" className='about-me-foto'></img>
      <div>
        <h2 className='about-me-h2'>Sobre mí</h2>
        <p className='about-me-p'>Marketiniana digital reconvertida a frontend developer con conocimientos en diseño de experiencia de usuario y ganas de continuar aprendiendo. Mi experiencia y conocimientos en estas tres áreas me aportan una visión completa del proceso de desarrollo de productos digitales.</p>
        <h2 className='about-me-h2'>Conocimientos</h2>
        <div className='knowledge'>
          <div className='knowledge-circle'>Inglés</div>
          <div className='knowledge-circle'>HTML5</div>
          <div className='knowledge-circle'>CSS</div>
          <div className='knowledge-circle'>SASS</div>
          <div className='knowledge-circle'>JavaScript</div>
          <div className='knowledge-circle'>React</div>
          <div className='knowledge-circle'>SCRUM</div>
          <div className='knowledge-circle'>GIT</div>
          <div className='knowledge-circle'>Sketch</div>
          <div className='knowledge-circle'>Invision</div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;