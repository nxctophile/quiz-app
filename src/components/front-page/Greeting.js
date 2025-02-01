import React from 'react';

function Greeting({ name }) {

  return (
    <div>
      <h2>So you want to proceed with {name} ? Okay, Let's Begin!</h2>
      <button className='btn'>Let's Go</button>
    </div>
  );
}

export default Greeting;
