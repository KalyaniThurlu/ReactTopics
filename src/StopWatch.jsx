

import React, { useState, useEffect } from 'react';

const StopWatch=()=> {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
    } else {
      clearInterval(timer);
    }


    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${String(hours).padStart(0, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const startTime = () => setIsRunning(true);
  const stopTime = () => setIsRunning(false);
  const resetTime = () => {
    setCurrentTime(new Date(0)); 
    setIsRunning(false);
  };

  return (
    <div className="text-center mt-5">
      <h1>⏰ Current Time</h1>
      <h2>{formatTime(currentTime)}</h2>

      <div>
        <button className="btn btn-success me-2" onClick={startTime} disabled={isRunning}>
          Start
        </button>
        <button className="btn btn-warning me-2" onClick={stopTime} disabled={!isRunning}>
          Stop
        </button>
        <button className="btn btn-danger" onClick={resetTime}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
