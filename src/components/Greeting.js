import React from 'react';
import '../styles/Greeting.css';

function Greeting({ name }) {

  return (
    <div className='confirm-name-container'>
      <h2>So you want to proceed with {name} ? Okay, Let&apos;s Begin!</h2>
      <a href='/quiz' className='btn'>Let&apos;s Go</a>
    </div>
  );
}

export default Greeting;
