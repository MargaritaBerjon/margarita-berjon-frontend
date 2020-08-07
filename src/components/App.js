import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/API.js';
import Poster from './Poster.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js'
import Experience from './Experience/Experience.js';
import '../style/App.css';

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects().then(projects => {
      setProjects(projects)
    })

  }, []);

  return (
    <div className="App">
      <Poster></Poster>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <Projects repos={projects} ></Projects>
    </div>
  );
}

export default App;
