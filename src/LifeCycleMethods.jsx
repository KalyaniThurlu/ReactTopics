 import { useEffect, useState } from "react"
const Exlifecyclemethods=()=>{
    const [name,setName]=useState("latha")
    useEffect(()=>{
 console.log("component did mount")


 return ()=>{
console.log("component will un mount")
 }

    },[name])
    console.log("component did updated")
    const handleClick=()=>{
        setName("geetha")
    }
    return(

        <div>
            <h1>
                hello
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
<button onClick={handleClick}>nameChange</button>
            </h1>
        </div>
    )
}
 export default Exlifecyclemethods;

