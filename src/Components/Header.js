import React from 'react'
import {Link} from 'react-scroll';
import '../Styles/Header.css';

const Header = () => {
  return (
    <>
      <div className='Header'>
        <div className='Header__left'>
            <h1>Develop<span>er</span></h1>
        </div>
        <div className='Header__right'>
        <Link to="about" smooth={true} duration={500}>
            <h4>About</h4>
            </Link>
          <Link to="Education" smooth={true} duration={500}>
            <h4>Education</h4>
            </Link>  
            <Link to="Skills" smooth={true} duration={500}>
            <h4>Skills</h4>
            </Link> 
            <Link to="exp" smooth={true} duration={500}>
            <h4>Experience</h4>
            </Link>
            <Link to="Contact" smooth={true} duration={500}>
            <h4>Contact</h4>
            </Link> 
        </div>
      </div>
    </>
  )
}
export default Header;

