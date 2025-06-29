import { useState } from "react"

const Form1=()=>{
    const [name,setName]=useState("")
    return(
        <div><h1>this is formvalidtiona</h1>
        <form action="">
            <input type="text" onChange={(e)=>setName(e.target.value)}  />
            <button type="submit">login</button>
        </form>
        <p>typed name:{name}</p>
        </div>
    )
}
export default Form1