import React from 'react'
import './Questions.css'
import Options from './Options'
function Questions() {
  return (
    <div>
          <video autoPlay muted loop>
        <source src='../assets/front-page.mp4' type='video/mp4' />
      </video>
      <div className='Question-tab'>
        <div className="questions">
         <h1>Q1. What is your name?</h1>
         <Options/>
        </div>
      </div>
    </div>
  )
}

export default Questions
