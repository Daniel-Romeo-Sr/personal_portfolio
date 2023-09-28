import React from 'react'
import "../Styles/Skills.css"
import { Element } from 'react-scroll'
import skillimg from "../assets/skillimg.jpg"
import LinearProgress from "@mui/material/LinearProgress";





const Skills = () => {
  return (
    
      <div className='container'>
      <Element className='skillContainer' id='Skills'>
        <div className='skillContainer__image'>
          <img src={skillimg} alt='' height={300} width={500} />
        </div>
        <div className='skillContainer__text'>
          <h2>SKILLS</h2>
          <div className='skillContainer__skillset'>
            <h4>React</h4>
            <div className='skillContainer__slider skillContainer__slider1'>
            <LinearProgress variant='determinate' value={60} className='linear'/>
            {/* <LinearWithLabel value={75} color="secondary" sx={{ height: 6 }} /> */}
            </div>
          </div>
          <div className='skillContainer__skillset'>
            <h4>.Net Framework Core</h4>
            <div className='skillContainer__slider skillContainer__slider2'>
            <LinearProgress variant='determinate' value={50} className='linear' />
            </div>
          </div>
          <div className='skillContainer__skillset'>
            <h4>Java Script</h4>
            <div className='skillContainer__slider skillContainer__slider3'>
              <LinearProgress variant='determinate' value={50} className='linear' />
            </div>
          </div>
          <div className='skillContainer__skillset'>
            <h4>SQL</h4>
            <div className='skillContainer__slider skillContainer__slider4'>
              <LinearProgress variant='determinate' value={50} className='linear'/>
            </div>
          </div>
        </div>
      </Element>
    </div>
    
  )
}

export default Skills
