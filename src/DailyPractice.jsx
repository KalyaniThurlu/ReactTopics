import axios from "axios"
import { useEffect, useState } from "react"

const GetApi =()=>{
  const [items,setItems]=useState([])
  const [msg,setMsg]=useState("")
  useEffect(() =>{
axios.get("https://api.restful-api.dev/objects")
.then((res) =>{
console.log(res.data)
setMsg("data get successfully")
setItems(res.data)
}).catch((error) =>{
console.log(error)
})
},[])
return(
  <div>
    <h2>this is get api</h2>
    <h3>{msg}</h3>
    <ul>{
      items.map((item) =>(
<li key={item}>
 
 <h3> {item.name}</h3>
 <h2>{item.price}</h2>
<h3>{item.title}</h3>
</li>
      ))
      }</ul>
    </div>
)
}
export default GetApi