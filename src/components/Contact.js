import React from 'react';
import GitHub from '../images/github.svg'
import Linkedin from '../images/linkedin.svg'
import Mail from '../images/mail.svg'
import '../style/Contact.css'

function Contact() {

  return (
    <section className='contact-container'>
      <h2 className='contact-h2'>Contacto</h2>
      <div className='contact-icons-container'>
        <a href='mailto:margui.berjon@gmail.com' target='_blank' rel='noopener noreferrer' alt='contactar por mail'>
          <img className='contact-icon' src={Mail} alt='icono de mail'></img>
        </a>

        <a href='https://linkedin.com/in/margaritaberjon'>
          <img className='contact-icon' src={Linkedin} alt='icono de LinkedIn'></img>
        </a>

        <a href='https://github.com/MargaritaBerjon'>

          <img className='contact-icon' src={GitHub} alt='icono de GitHub'></img>
        </a>

      </div>
    </section >
  );
}

export default Contact;