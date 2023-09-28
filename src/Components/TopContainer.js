import React from 'react'
import { Element } from 'react-scroll'
import "../Styles/TopContainer.css"
import TopContent from './TopContent'

const TopContainer = () => {
  return (
    <div>
      <Element name='about' className='topContainer'>
      <TopContent/>
      </Element>
    </div>
  )
}

export default TopContainer
