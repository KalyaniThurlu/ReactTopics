
import { useState } from "react";

const DailyPractice = () => {
  const [text, setText] = useState("");
  const [showText, setShowText] = useState("");

  const handleClick = () => {
    setShowText(text);
  };

  return (
    <div>
      <h1>This is DailyPractice</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>

      <p>You typed: {showText}</p>
    </div>
  );
};

export default DailyPractice;
