
// import axios from "axios";
// import { useEffect, useState } from "react";

// const GetApi1 = () => {
//   const [items, setItems] = useState([]);
//   const [msg, setMsg] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://api.restful-api.dev/objects")
//       .then((res) => {
//         setItems(res.data); 
//         setMsg(" get data ");
//       })
//       .catch((error) => {
//         console.log(error);
        
//       });
//   }, []);

//   return (
//     <div>
//       <h1>hello</h1>
//       <h2>{msg}</h2>

//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GetApi1;

// const  PostApi2=()=>{
//   const [name,setName]=useState("")
//   const [year,setYear]=useState("")
//   const [price,setPrice]=useState("")
//   const [cpu,setCpu]=useState("")
//   const [hardDisk,setHardDisk]=useState("")
//    const [id,setId]=useState("")
//   const [msg,setMsg]=useState("")
//   const handleClick=()=>{
//     const dataPost={
//       name:"",
//       data:{
// price:Number(price),
// year:Number(year),
// "CPU model":cpu,
// "Hard disk size":hardDisk
//       }
//     }
//       axios.post("https://api.restful-api.dev/objects",dataPost,{

//   }).then((res)=>{
// console.log(res.data)
// setMsg("data post successfully")
//   }).catch((error)=>{
// console.log(error)
//   })
//   }



  

//   return(
//     <div>
//     <h1>hello this is javascript</h1>
//     <h2>{msg}</h2>
//    id: <input type="text" onChange={(e)=>setId(e.target.value)} /><br/>
//      name: <input type="text" onChange={(e)=>setName(e.target.value)} /><br/>
//     year: <input type="text" onChange={(e)=>setYear(e.target.value)} /><br/>
//       price:<input type="text" onChange={(e)=>setPrice(e.target.value)} /><br/>
//       cpu: <input type="text" onChange={(e)=>setCpu(e.target.value)} /><br/>
//       hardDisk:  <input type="text" onChange={(e)=>setHardDisk(e.target.value)} /><br/>
//       <button onClick={handleClick}>postApi2</button>
//       <button onClick={clearData}>clearData</button>
//             </div>
//   )
// }
// export default PostApi2
import axios from "axios"
import { useState } from "react"
const PutApi2=()=>{
  const [name,setName]=useState("")
  const [year,setYear]=useState("")
  const [price,setPrice]=useState("")
  const [cpu,setCpu]=useState("")
  const [hardDisk,setHardDisk]=useState("")
   const [id,setId]=useState("")
    const [color,setColor]=useState("")
  const [msg,setMsg]=useState("")
  const putData=()=>{
    if(!name||!year||!price||!cpu||!hardDisk||!color||!id){
setMsg("provide all fields")
return
    }
    const dataPut={
      name:"",
      data:{
        price:"",
        year:Number(year),
        price:Number(price),
        "CPU model":cpu,
        "Hard disk size":hardDisk,
        color:""
      }

    }
    axios.put(`https://api.restful-api.dev/objects/7${id}`,dataPut,{

    }).then((res)=>{
console.log(res.data)
setMsg("data updated")
    })
   
  }
  return(
    <div>
      <h1>hello</h1>
      <h2>{msg}</h2>
       id: <input type="text" onChange={(e)=>setId(e.target.value)} /><br/>
      name: <input type="text" onChange={(e)=>setName(e.target.value)} /><br/>
     year: <input type="text" onChange={(e)=>setYear(e.target.value)} /><br/>
       price:<input type="text" onChange={(e)=>setPrice(e.target.value)} /><br/>
       cpu: <input type="text" onChange={(e)=>setCpu(e.target.value)} /><br/>
       hardDisk:  <input type="text" onChange={(e)=>setHardDisk(e.target.value)} /><br/>
      color: <input type="text" onChange={(e)=>setColor(e.target.value)} /><br/>
       <button onClick={putData}>putApi2</button>
    </div>
  )
}
export default PutApi2