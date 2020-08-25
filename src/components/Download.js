import React from 'react';
import Descargar from '../images/descargar.svg'
import CV from '../Download/CV-Margarita-Berjon-Frontend.pdf'
import '../style/Download.css'

function Download() {

  return (
    <section className='download-container' >
      <div className='banner-container'>
        <h2 className='download-h2'>Descargar curriculum</h2>
        <a href={CV} download="CV Margarita Berjón Frontend">
          <img className='contact-icon' src={Descargar} alt='icono de Descarga'></img>
        </a>
      </div>
    </section >
  );
}

export default Download;