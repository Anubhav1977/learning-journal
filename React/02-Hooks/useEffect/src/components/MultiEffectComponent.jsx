import React, { useEffect, useState } from "react";

function MultiEffectComponent() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Count changed : ", count);
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("SetInterval Started");
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      console.log("Timer Stopped");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <br />
      <br />
      <br />
      <h1>Seconds: {seconds}</h1>
    </div>
  );
}

export default MultiEffectComponent;
