// import React, { useState } from 'react';

import { useState } from "react";

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !email || !password) {
//       setMessage('Please fill in all fields');
//       return;
//     }
//     setMessage('Signed up!');
//     setName('');
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name: </label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <label>Email: </label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>Password: </label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Signup</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Signup;
const Signup=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pwd,setPwd]=useState("")
    const [msg,setMsg]=useState("")
    const  handleSubmit=(e)=>{
e.preventDefault()
if(!name||!pwd||!email){
setMsg("provide all fields")
return
}
setMsg("signup succefully")
setName("")
setPwd("")
setEmail("")
    }
    return(
        <div>
        <h1>this is Signup form</h1>
        <form action="" onSubmit={handleSubmit}>
           Name <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
            Email<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
           password: <input type="text" value={pwd} onChange={(e)=>setPwd(e.target.value)} /><br/>
            <button type="signup">Signup</button>
        </form>
        {msg&& <p>{msg}</p> }
        </div>
    )
}
export default Signup;