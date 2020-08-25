import React from 'react';
import '../style/Menu.css'

function Menu() {

  return (
    <nav className='menu-container'>
      <a href='#AboutMe'> Sobre mí</a>
      <a href='#Proyects'>Proyectos</a>
      <a href='#Experience'>Experiencia</a >
      <a href='#Contact'>Contacto</a>
    </nav >
  );
}

export default Menu;