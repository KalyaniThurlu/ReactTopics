// import axios from "axios";
// import { useState } from "react";



// const DeleteApi =  () => {
//     const [id, setId] = useState("")
//     const [msg, setMsg] = useState("")
//     const deleteData = () => {
//         axios.delete("https://reqres.in/api/users/2", {

//         })
//             .then((res) => {
//                 console.log(res)
//                 console.log("deleted data")
//                 setMsg("data deleted")
//             }).catch((error) => {
//                 console.log(error)
//             })

//     }
//     return (
//         <div>
//             <h1>{msg}</h1>
//             id:  <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} /><br />
//             <button onClick={deleteData}>deleteData</button>
//         </div>
//     )
// }
// export default DeleteApi;

import axios from "axios";
import { useState } from "react";

const DeleteApi = () => {
  const [msg, setMsg] = useState("");
  const [id, setId] = useState("");

  const deleteData = () => {
    axios
      .delete(`https://api.restful-api.dev/objects/${id}`)
      .then((res) => {
        console.log(res);
        setMsg("data deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>{msg}</h2>
      <label>
        ID:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <br />
      <button onClick={deleteData}>Delete Data</button>
    </div>
  );
};

export default DeleteApi;
