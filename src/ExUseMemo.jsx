import { useMemo, useState } from "react"

const ExuseMemo=()=>{
    const [count,setCount]=useState(0)
    const exMemovalue=useMemo(()=>{
        return count+2
                },[count])
    const handleClick=()=>{
        setCount(count+1)

    }
return(
    <div>
        <h1>hello</h1>
        <p>usememovalue:{exMemovalue}</p>
        <h1>count:{count}</h1>
     
      <button onClick={handleClick}>increment</button>
    </div>
)
}
export default ExuseMemo