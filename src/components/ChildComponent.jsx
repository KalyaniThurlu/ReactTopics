
import { useState } from "react";

const ChildComponent = ({ updatedName }) => {
  const [inputName, setInputName] = useState("");

  const handleUpdate = () => {
    updatedName(inputName); 
  };

  return (
  <div>
    
      <h3>Child Component</h3>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button onClick={handleUpdate}> Change Name</button>
    </div>
  );
};

export default ChildComponent;
