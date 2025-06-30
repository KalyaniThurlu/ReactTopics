
import { useState } from "react";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    if (!height ===0||weight ===0   ) {
      alert("Enter height and weight");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setMsg("You are underweight");
    } else if (bmiValue<25) {
      setMsg("You have a underweigt");
    } else {
      setMsg("You are overweight");
    }
  };

  return (
    <div>
      <h2>This is a bmi calculator</h2>
      <form onSubmit={formSubmit}>
        Height (cm):{" "}
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        /><br />
        Weight (kg):{" "}
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        /><br />
        <button type="submit">bmi calculator</button>
      </form>
      <h2>Your bmi: {bmi}</h2>
      <p>{msg}</p>
    </div>
  );
};

export default Bmi;
