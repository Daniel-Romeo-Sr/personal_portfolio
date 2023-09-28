import React from 'react'
import "../Styles/Education.css"
import { Element } from 'react-scroll'
import EducationContent from './EducationContent'

const Education = () => {
  return (
 <Element name='Education' className='education__container'>
    <EducationContent/>
 </Element>
  )
}

export default Education
