import React from 'react'
import { Element } from 'react-scroll'
import Experience from './Experience'
import "../Styles/Experincecontainer.css"

const Experiencecontainer = () => {
  return (
   
    <Element className='experienceContainer' id='exp'>
        <h1>Experience</h1>
        <div className='experienceContainer__info'>
        <Experience number="Six Months" title="React" style={{backgroundColor:"#f64c08"}}/>
        <Experience number="Three Months" title="Dot Net" />
        </div>
    
    
    </Element>
   
  )
}

export default Experiencecontainer
