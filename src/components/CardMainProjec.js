import React from 'react';
import '../style/CardMainProject.css'

function CardMainProject(props) {

  return (
    <div className='main-project-card'>
      <h3 className='main-project-card-title'> {props.project.description}</h3>
      <p className='main-project-card-language'>Lenguaje principal: {props.project.language}</p>
      <a className='main-project-card-link' href={props.project.homepage} target='_blank' rel='noopener noreferrer' alt='link al proyecto'> Ver el proyecto</a>
      <a className='main-project-card-link' href={props.project.html_url} target='_blank' rel='noopener noreferrer' alt='link al repositorio'> Acceder al repositorio</a>
    </div>
  );
}

export default CardMainProject;