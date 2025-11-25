import React, { useEffect, useState } from "react";

function TimerComponent() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("setInterval Executed");
      setTimer((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => {
      console.log("Timer Stopped");
      clearInterval(intervalId);
    };
  }, []);
  // it will runs only on first render

  return (
    <div>
      <h1>Seconds : {timer}</h1>
    </div>
  );
}

export default TimerComponent;
