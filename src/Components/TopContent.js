import React from 'react'
import "../Styles/TopContent.css"

const TopContent = () => {
  return (
    <div className='TopContent'>
        <div className='TopContent__container'>
            <h1>Mr.Daniel Sudhan Raj</h1>
            <p>A Professional Web <span>Developer</span></p>
            <a href='https://drive.google.com/drive/folders/1H1rZzLiQyisv-zRbfHSjk_wpRD9JFSNM'>
                <button className='TopContent_download'>Download CV</button>
            </a>
        </div>
      
    </div>
  )
}

export default TopContent
