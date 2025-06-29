import { useRef, useState } from "react"

const ExuncontrolledComponets=()=>{
    const [name,setName]=useState("")
    let exRef=useRef()
    const handleClick=()=>{
        console.log(exRef.current.value)
    }
    return(
        <div>
            <h1>this s uncontrolled components</h1>
            <input type="text" ref={exRef}  />
            <button onClick={handleClick}>submit</button>
         
        </div>
    )
}
export default ExuncontrolledComponets