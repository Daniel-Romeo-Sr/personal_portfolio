import React from 'react'
import "../Styles/Experience.css"

const Experience = ({number ,title ,style}) => {
  return (
    <div style={{...style}} className='experience'>
      <h1>{title}</h1>
      <p>{number}</p>
    </div>
  )
}

export default Experience
