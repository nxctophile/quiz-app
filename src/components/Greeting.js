import React from "react";
import "../styles/Greeting.css";

function Greeting({ name, changeName }) {
  return (
    <div className="confirm-name-container">
      <h2>So you want to proceed with {name} ? Okay, Let&apos;s Begin!</h2>
      <a href="/quiz" className="greeting-button">
        Let&apos;s Go
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#eeeeee"
        >
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
      </a>
      <button onClick={changeName} className="change-name">Incorrect name? Click here to change.</button>
    </div>
  );
}

export default Greeting;
