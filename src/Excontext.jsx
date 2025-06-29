
import React, { useContext } from "react";
import { MyContext } from "./main"; 

const Excontext = () => {
  const num = useContext(MyContext);

  return (
    <div>
      <h1>{num.join(",")}</h1> 
    </div>
  );
};

export default Excontext;
