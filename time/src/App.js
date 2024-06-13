import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [isRunning]);

  const handleClick = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="counter-container">
      <button onClick={handleClick} className="toggle-button">
        {isRunning ? "Stop" : "Start"} Timer
      </button>
      <p className="time-display">{time}</p>
    </div>
  );
};

export default App;
