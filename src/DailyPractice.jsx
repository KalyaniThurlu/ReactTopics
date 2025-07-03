
// import axios from "axios";
// import { useEffect, useState } from "react";

import axios from "axios"
import { useEffect, useState } from "react"

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

// import { useState } from "react"
// import axios from "axios"

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
//             </div>
//   )
// }
// export default PostApi2

// const GetApi1=()=>{
//   const [items,setItems]=useState([])
//   const [msg,setMsg]=useState("")
//   useEffect(()=>{
// axios.get("https://api.restful-api.dev/objects")
// .then((res)=>{
// console.log(res.data)
// setMsg(res.data)
// setItems(res.data)
// }).catch((error)=>{
//   console.log(error)
// })
//   },[])
//   return(
//     <div>
//       {/* <h1>{msg}</h1> */}
// <ul>
//   {
//     items.map((item,index)=>(
// <li key={index}>

// <h1>  {item.name
//   }</h1>

// <h2>{item.price}</h2>
// <h2>{item.title}</h2>
// </li>
//     ))
//   }
// </ul>
//     </div>
//   )
// }
// export default GetApi1

const PostApi1=()=>{
  const [name,setName]=useState("")
  const [year,setYear]=useState("")
  const [price,setPrice]=useState("")
  const [cpu,setCpu]=useState("")
  const [hardDisj,setHardDisk]=useState("")
  const [msg,setMsg]=useState("")
  return(
    <div>
      <h2>hello</h2>
    </div>
  )
}
export default PostApi1