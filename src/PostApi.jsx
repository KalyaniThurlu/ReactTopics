// import axios from "axios"
// import { useState } from "react"

import axios from "axios"
import { useState } from "react"

// const PostApi = () => {
//     const [name, setName] = useState("")
//     const [job, setJob] = useState("")
//     const [msg, setMsg] = useState("")
//     const handleClick = () => {
//         const data = {
//             name: name,
//             job: job
//         }
//         axios.post("https://reqres.in/api/users", data)

//             .then((res) => {
//                 console.log(res.data)
//                 setMsg("posted data")
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
//     return (
//         <div>

//             {msg}<br />
//             name:  <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
//             job:  <input type="text" value={job} onChange={(e) => setJob(e.target.value)} /><br />
//             <button onClick={handleClick}>postData</button>
//         </div>
//     )
// }
// export default PostApi



// https://api.restful-api.dev/objects
// {
//    "name": "Apple MacBook Pro 16",
//    "data": {
//       "year": 2019,
//       "price": 1849.99,
//       "CPU model": "Intel Core i9",
//       "Hard disk size": "1 TB"
//    }
// }