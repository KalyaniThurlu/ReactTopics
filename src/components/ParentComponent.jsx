
import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [name, setName] = useState("latha");

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Current Name: {name}</p>
      <ChildComponent updatedName={setName} />
    </div>
  );
};

export default ParentComponent;
