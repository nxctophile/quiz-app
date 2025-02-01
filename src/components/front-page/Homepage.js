import React, { useState } from 'react';
import './Homepage.css';
import Greeting from './Greeting'; // Ensure the import path is correct

function Homepage() {
  const [name, setName] = useState(''); // State to store the input value
  const [showGreeting, setShowGreeting] = useState(false); // State to control visibility of Greeting

  const FireWelcome = () => {
    console.log('Hiie Button clicked');
    console.log('Name:', name); // Debugging: Check the name value
    setShowGreeting(true); // Show the Greeting component when the button is clicked
  };

  return (
    <div>
      <video autoPlay muted loop>
        <source src='../assets/front-page.mp4' type='video/mp4' />
      </video>
      <div className="main-container">
        <div className="main">
          <h1>Ready To Test Your Brain?</h1>

          {/* Conditionally render either the input field or the Greeting component */}
          {showGreeting ? (
            <Greeting name={name} />
          ) : (
            <div className="input-fields">
              <h2> What Should We Call You? </h2>
              <input
                type="text"
                placeholder='John-Doe'
                value={name}
                onChange={(e) => setName(e.target.value)} // Update the state on input change
              />
            </div>
          )}

          {/* Render the button only if showGreeting is false */}
          {!showGreeting && (
            <button className='btn' onClick={FireWelcome}>Set Player</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;