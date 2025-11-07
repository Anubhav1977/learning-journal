import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="ctr-container">
        <h2 id="ctr-title">You've clicked {count} times</h2>
        <div id="btn-row">
          <button
            id="ctr-btn"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Click Meh!
          </button>
          <button
            id="reset-btn"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
