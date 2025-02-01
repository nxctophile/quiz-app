import React from 'react';
import OptionList from './OptionList';
import './Options.css';

function Options() {
  return (
    <div className='options'>
      <div className="options-wrapper">
        <OptionList />
        <button className='btn-to-lock-ans'>Computer Jii...Lock ${`option`}</button>
      </div>
    </div>
  );
}

export default Options;
       
