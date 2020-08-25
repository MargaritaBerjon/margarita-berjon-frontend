import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/API.js';
import Poster from './Poster.js';
import Menu from './Menu.js';
import AboutMe from './AboutMe.js';
import MainProjects from './MainProjects.js'
import Experience from './Experience/Experience.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import '../style/App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [animationStartArrow, setAnimationStartArrow] = useState();
  const [posterStyle, setPosterStyle] = useState({});
  const [visibility, setVisibility] = useState('hide');


  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);


  useEffect(() => {
    getProjects().then(projects => {
      setProjects(projects)
    })

  }, []);


  function start() {
    setPosterStyle({
      transition: '2s',
      opacity: 0,
      height: '0px'
    });
    setAnimationStartArrow('hide');
    setVisibility('view')
  };


  return (
    <div className="App">
      <Poster start={start} animationStartArrow={animationStartArrow} posterStyle={posterStyle}></Poster>
      <div className={visibility}>
        <Menu></Menu>
        <main className='main-container'>
          <AboutMe></AboutMe>
          <MainProjects repos={projects} ></MainProjects>
          <Experience></Experience>
          <Contact></Contact>
        </main>
        <Footer></Footer>

      </div>
    </div>
  );
}

export default App;
