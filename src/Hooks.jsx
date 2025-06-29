import { useCallback, useMemo, useState } from "react";

const Hooks = () => {
  const [count,setCount] =useState(0)
//    const exuseMemo =useMemo(() =>{
//  return  count + 2
//   },[count])
const exUsecallback  =useCallback(() =>{
  return count * 2
},[count])  
  const handleClick =() =>{
setCount(count + 1)
  }
  return (
    <div>
      <h2>This is Hooks</h2>
      <h2>useMemoValue:{exUsecallback()}</h2>
      <h2>count:{count}</h2>
      count:<input type="text" onChange={(e) =>setCount(e.target.value)} /><br/>
      <button onClick={handleClick}>incrementCount</button>
    </div>
  );
};

export default Hooks;


