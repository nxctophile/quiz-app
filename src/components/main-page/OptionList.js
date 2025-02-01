import React from 'react';
import './Options.css'
function OptionList() {
  return (
    <div className='option-main-container'>
      <div className="left-side-options">
        <div className="option-box">
          <input type="radio" name="options" id="opt1" value="opt1" />
          <label htmlFor="opt1">Option 1</label>
        </div>
        <div className="option-box">
          <input type="radio" name="options" id="opt2" value="opt2" />
          <label htmlFor="opt2">Option 2</label>
        </div>
      </div>
      <div className="right-side-options">
        <div className="option-box">
          <input type="radio" name="options" id="opt3" value="opt3" />
          <label htmlFor="opt3">Option 3</label>
        </div>
        <div className="option-box">
          <input type="radio" name="options" id="opt4" value="opt4" />
          <label htmlFor="opt4">Option 4</label>
        </div>
      </div>
    </div>
  );
}

export default OptionList;
