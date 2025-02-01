import React from 'react'
import './ResultPage.css'
function ResultPage() {
  return (
    <div>
       <video autoPlay muted loop>
        <source src='../assets/front-page.mp4' type='video/mp4' />
      </video>
    <div className='result-container'>
    <div className='heading'>
      <h1>Quiz Summary</h1>
      <div className='ans-summary'>
        <div className='total-pts'>
          <p>Total Points</p>
        </div>
        <div className='correct-pts'>
          <p>Correct Answers</p>
        </div>
        <div className='incorrect-pts'>
          <p>Incorrect Answers</p>
        </div>
      </div>
      <div className='correct-incorrect'>
        <p>Correct Answer: + | Wrong Answer: -</p>
      </div>
    </div>
    <div className='detailed-summary'>
      <div className='required-question'>
        <h3>Question</h3>
        <div className='context'>
          <div className='ans-compare'>
            <span>Correct Answer:</span> 
            <span>Answer Text</span>
          </div>
          <div className='ans-compare'>
            <span>Your Answer:</span>
            <span>Answer Text</span>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ResultPage

