// import axios from "axios"
// import { useState } from "react"



// const PutApi = () => {
//     const [id, setId] = useState("")
//     const [first_name, setFirst_Name] = useState("")
//     const [last_name, setlast_Name] = useState("")
//     const [email, setEmail] = useState("")
//     const [msg, setMsg] = useState("")

//     const updatedData = () => {
//         const data = {
//             id: id,
//             first_name: first_name,
//             last_name: last_name
//         }
//         axios.put("https://reqres.in/api/users/2", data, {

//         })
//             .then((res) => {
//                 console.log(res.data)
//                 setMsg("updated data")
//             }).catch((error) => {
//                 console.log(error)
//             })
//     }
//     return (
//         <div>
//             <h3>{msg}</h3><br />
//             id:<input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />
//             first_name:<input type="text" value={first_name} onChange={(e) => setFirst_Name(e.target.value)} /><br />
//             last_name:<input type="text" value={last_name} onChange={(e) => setlast_Name(e.target.value)} /><br />
//             email:<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
//             <button onClick={updatedData}>updatedData</button>

//         </div>
//     )
// }
// export default PutApi


import { useState} from "react";
import axios from "axios";
const PutApi = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [cpu, setCpu] = useState("");
  const [hardDisk, setHardDisk] = useState("");
  const [color, setColor] = useState("");
  const [id, setId] = useState("");
  const [msg, setMsg] = useState("");

  const handleClick = () => {
    if (!id || !name || !price || !cpu || !hardDisk || !color || !year) {
      setMsg("provide id");
      return;
    }

    const updateData = {
      name: name,
      data: {
        year: Number(year),
        price: Number(price),
        "CPU model": cpu,
        "Hard disk size": hardDisk,
        color: color,
      },
    };

    axios
      .put(`https://api.restful-api.dev/objects/${id}`, updateData)
      .then((res) => {
        console.log(res.data);
        setMsg("data updated");
      })
      .catch((error) => {
        console.error(error);
       
    
      });
  };

  return (
    <div>
      <h1>Welcome</h1>
      <h2>{msg}</h2>
      id: <input type="text"  onChange={(e) => setId(e.target.value)} /><br />
      name: <input type="text"  onChange={(e) => setName(e.target.value)} /><br />
      year: <input type="text"  onChange={(e) => setYear(e.target.value)} /><br />
      price: <input type="text" onChange={(e) => setPrice(e.target.value)} /><br />
      cpu: <input type="text"  onChange={(e) => setCpu(e.target.value)} /><br />
      hardDisk: <input type="text"  onChange={(e) => setHardDisk(e.target.value)} /><br />
      color: <input type="text" onChange={(e) => setColor(e.target.value)} /><br />
      <button onClick={handleClick}>Update data</button>
    </div>
  );
};

export default PutApi;
