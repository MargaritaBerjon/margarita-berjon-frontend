import React from 'react';
import '../style/CardMainProject.css'

function CardMainProject(props) {

  return (
    <div className='main-project-card'>
      <h3> {props.project.description}</h3>
      <p>Lenguaje principal: {props.project.language}</p>
      <a href={props.project.homepage}> Ver el proyecto</a>
      <a href={props.project.html_url}> Acceder al repositorio</a>
    </div>
  );
}

export default CardMainProject;