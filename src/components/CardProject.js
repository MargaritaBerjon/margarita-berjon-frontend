import React from 'react';

function CardProject(props) {

  return (
    <div className="results-container">
      <h2 >{props.project.name}</h2>
    </div>
  );
}

export default CardProject;