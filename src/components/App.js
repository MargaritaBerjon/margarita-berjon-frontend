import React from 'react';
import Poster from './Poster.js';
import AboutMe from './AboutMe.js';
import Experience from './Experience/Experience.js';
import '../style/App.css';

function App() {
  return (
    <div className="App">
      <Poster></Poster>
      <AboutMe></AboutMe>
      <Experience></Experience>
    </div>
  );
}

export default App;
