import { useCallback, useState } from "react"

const ExuseCallback=()=>{
    const [count,setCount]=useState(0)
    const exUsecallbackValue=useCallback(()=>{
return count+2
    },[count])
    const handleClick=()=>{
        setCount(count+1)
    }
    return(
        <div>
            <h1>this is useCallBack example</h1>
            <p>exUsecallbackValue:{exUsecallbackValue()}</p>
<p>count:{count}</p>
<button onClick={handleClick}>increment</button>

        </div>
        
    )

}
export default ExuseCallback