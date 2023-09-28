
import './App.css';
import React from 'react';
import  Header  from './Components/Header';
import TopContainer from './Components/TopContainer';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experiencecontainer from './Components/Experiencecontainer';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
    <Header/>
     <TopContainer/>
     <Education/>
     <Skills/>
     <Experiencecontainer/>
     <Contact/>
    </div>
  );
}

export default App;
