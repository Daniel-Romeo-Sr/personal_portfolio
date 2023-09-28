import React from 'react'
import "../Styles/EducationContent.css"

const EducationContent = () => {
  return (
    <>
    <div className='education'>
        <h1>Education Details</h1>
        <hr/>
        <div className='sslc'>
      <h3>Secondary Education</h3>
      <p>St.Mary's Higher Secondary School<br/>Dindigul</p>
      <em>91%</em>
      </div>
      <div className='sslc'>
      <h3>Higher Education</h3>
      <p>St.Mary's Higher Secondary School<br/>Dindigul</p>
      <em>71%</em>
      </div>
      <div className='sslc'>
      <h3>Bachelor of Computer Science</h3>
      <p>St.Joseph's College<br/>Trichy</p>
      <em>64%</em>
      </div>
      <div className='sslc'>
      <h3>Master Of Computer Science</h3>
      <p>Bishop Heber College<br/>Trichy</p>
      <em>74%</em>
      </div>
    </div>
    <div className='certification'>
    <h1>Certification</h1>
        <hr/> 
        <div className='cer'>
        <h3>Full Stack Web Development(.Net Framework)</h3>
        <p>FFuture Wise Software Training Institute <br/>Trichy</p>
        </div>
        <div className='cer'>
        <h3>Responsive Web Design</h3>
        <p>FreeCodeCamp</p>
        </div>
    </div>
    </>
  )
}

export default EducationContent
