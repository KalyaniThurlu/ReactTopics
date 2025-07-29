



import { useEffect, useState } from "react"



const StopWatch = () => {
  const [start, setStart] = useState("");
  const [stop, setStop] = useState("");

  const startWatch = () => {
    const now = new Date().toLocaleTimeString();
    setStart(now);
    setStop("");
  };

  const stopWatch = () => {
    const now = new Date().toLocaleTimeString();
    setStop(now);
  };

  const resetWatch = () => {
    setStart("");
    setStop("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Stopwatch</h2>
      
      <button onClick={startWatch}>Start</button>{" "}
      <button onClick={stopWatch}>Stop</button>{" "}
      <button onClick={resetWatch}>Reset</button>

      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <p><strong>Start Time:</strong> {start || "00:00:00"}</p>
        <p><strong>Stop Time:</strong> {stop || "00:00:00"}</p>
      </div>
    </div>
  );
};

export default StopWatch;
