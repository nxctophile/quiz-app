import React from 'react';
import OptionList from './OptionList';
import '../styles/Options.css';

function Options({submitAnswer, options}) {
  return (
    <div className='options'>
      <div className="options-wrapper">
        <OptionList options={options} />
        <button onClick={submitAnswer} className='btn-to-lock-ans'>
          Confirm Answer
        </button>
      </div>
    </div>
  );
}

export default Options;
       
