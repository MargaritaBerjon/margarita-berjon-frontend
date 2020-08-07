import React from 'react';
import CardProject from './CardProject.js'

function Projects(props) {

  return (
    <div>
      {props.repos.map((project, i) => <CardProject key={i} project={project}></CardProject>)}
    </div>
  );
}

export default Projects;

