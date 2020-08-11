import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/API.js';
import Poster from './Poster.js';
import AboutMe from './AboutMe.js';
// import MainProjects from './MainProjects.js'
// import Experience from './Experience/Experience.js';
// import Contact from './Contact.js';
// import Footer from './Footer.js';
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
      {/* <MainProjects repos={projects} ></MainProjects> */}
      {/* <Experience></Experience> */}
      {/* <Contact></Contact> */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
