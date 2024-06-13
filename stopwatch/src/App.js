import React, { useState, useRef } from "react";
import "./index.css";

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [log, setLog] = useState([]);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    setLog([]);
  };

  const handleStopwatchClick = () => {
    const formattedTime = formatTime(time);
    setLog([...log, formattedTime]);
  };

  const formatTime = (timeInSeconds) => {
    const getTwoDigits = (num) => String(num).padStart(2, "0");
    const hours = getTwoDigits(Math.floor(timeInSeconds / 3600));
    const minutes = getTwoDigits(Math.floor((timeInSeconds % 3600) / 60));
    const seconds = getTwoDigits(timeInSeconds % 60);
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="time-display" onClick={handleStopwatchClick}>
        {formatTime(time)}
      </div>
      <div className="buttons">
        <button onClick={startTimer} className="control-button">
          Start
        </button>
        <button onClick={pauseTimer} className="control-button">
          Pause
        </button>
        <button onClick={resetTimer} className="control-button">
          Reset
        </button>
      </div>
      <div className="log">
        <h3>Logged Times:</h3>
        <ul>
          {log.map((logTime, index) => (
            <li key={index}>{logTime}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
