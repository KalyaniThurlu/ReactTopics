import { useState } from "react"
import axios from "axios"
const PostApi =() =>{
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [year,setYear]=useState("")
    const [cpu,setCpu]=useState("")
    const [hardDisk,setHardDisk]=useState("")
    const [id,setId]=useState("")
    const [msg,setMsg]=useState("")
  const handleClick=()=>{
    const postData={
        name:"",
        data:{
            year:Number(year),
            price:Number(price),
            "CPU model":cpu,
            "Hard disk size":hardDisk
        }
    }
    axios.post("https://api.restful-api.dev/objects",postData,{
    })
    .then((res)=>{
console.log(res.data)
    }).catch((error)=>{
console.log(error)
    })
  }
    
    return(

        <div>
            <h2>this is PostApi</h2>
            <h2>{msg}</h2>
           id: <input type="text" value={id} onChange={(e)=>setId(e.target.value)} /><br/>
            name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
           price: <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} /><br/>
            year:<input type="text" value={year} onChange={(e)=>setYear(e.target.value)} /><br/>
            cpu:<input type="text" value={cpu} onChange={(e)=>setCpu(e.target.value)} /><br/>
           hardDisk: <input type="text" value={hardDisk} onChange={(e)=>setHardDisk(e.target.value)} /><br/>
            <button onClick={handleClick}>postData</button>
        </div>
    )
}
export default PostApi
 