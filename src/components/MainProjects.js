import React from 'react';
import CardMainProjec from './CardMainProjec.js'
import '../style/MainProjects.css'

function MainProjects(props) {

  return (
    <section>
      <h2>Proyectos Principales</h2>
      <div className="projects-container">
        {props.repos.filter(project => project.homepage === `https://margaritaberjon.github.io/${project.name}` || project.homepage === `https://margaritaberjon.github.io/${project.name}/` || project.homepage === `https://margaritaberjon.github.io/${project.name}/.`).map((project, i) => <CardMainProjec key={i} project={project}></CardMainProjec>)}
      </div>
    </section>

  );
}

export default MainProjects;

