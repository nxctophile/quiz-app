import React from "react";
import "../styles/Options.css";
function OptionList({ options }) {
  return (
    <div className="option-main-container">
      <div className="left-side-options">
        <div className="option-box">
          <input
            type="radio"
            name="options"
            id="opt1"
            value={options[0].description}
          />
          <label htmlFor="opt1">{options[0].description}</label>
        </div>
        <div className="option-box">
          <input
            type="radio"
            name="options"
            id="opt2"
            value={options[1].description}
          />
          <label htmlFor="opt2">{options[1].description}</label>
        </div>
      </div>
      <div className="right-side-options">
        <div className="option-box">
          <input
            type="radio"
            name="options"
            id="opt3"
            value={options[2].description}
          />
          <label htmlFor="opt3">{options[2].description}</label>
        </div>
        <div className="option-box">
          <input
            type="radio"
            name="options"
            id="opt4"
            value={options[3].description}
          />
          <label htmlFor="opt4">{options[3].description}</label>
        </div>
      </div>
    </div>
  );
}

export default OptionList;
