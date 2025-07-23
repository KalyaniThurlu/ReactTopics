import React, { useState } from "react";

const PrimeChecker = () => {
  const [num, setNum] = useState("");
  const [msg, setMsg] = useState("");

  const checkPrime = () => {
    const n = parseInt(num);

    if (n === 2 || n === 3 || n === 5 || n === 7) {
      setMsg("It is a prime number");
    } else {
      setMsg("not a prime number");
    }
  };

  return (
    <div>
      <h3>Prime Checker (Simple Logic)</h3>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter number (2–10)"
      />
      <button onClick={checkPrime}>Check</button>
      <p>{msg}</p>
    </div>
  );
};

export default PrimeChecker;
