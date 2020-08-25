import React from 'react';
import CardMainProjec from './CardMainProjec.js'
import '../style/MainProjects.css'

function MainProjects(props) {

  return (
    <section className='main-proyects-container' id='Proyects'>
      <div className='main-proyects-title'>
        <h2 >Proyectos</h2>
      </div>
      <div className="projects-container">
        {props.repos.filter(project => project.homepage === `https://margaritaberjon.github.io/${project.name}` || project.homepage === `https://margaritaberjon.github.io/${project.name}/` || project.homepage === `https://margaritaberjon.github.io/${project.name}/.`).map((project, i) => <CardMainProjec key={i} project={project}></CardMainProjec>)}
        <a className='main-project-card-link' href='https://github.com/MargaritaBerjon?tab=repositories' target='_blank' rel='noopener noreferrer' alt='link a todos los repositorios'> Ver todos los repositorios...</a>
      </div>
    </section>

  );
}

export default MainProjects;

