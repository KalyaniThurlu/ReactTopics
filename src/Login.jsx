// import React, { useState } from 'react';


import { useState } from "react"

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setMessage('Please enter email and password');
//       return;
//     }
//     setMessage('Logged in!');
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email: </label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>Password: </label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Login;


const Login=()=>{
    const [name,setName]=useState("")
    const [pwd,setPwd]=useState("")
    const [msg,setMsg]=useState("")
    const handleSubmit=(e)=>{
e.preventDefault()
if(!name||!pwd){
setMsg("provide all fileds")
return
}
setMsg("logid in")
setName("")
setPwd("")

}

    return(
        <div>
           <form action="" onSubmit={handleSubmit}>
           <h1>this is login page</h1>
            name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
            pwd:<input type="text" value={pwd} onChange={(e)=>setPwd(e.target.value)} />
            <button type="login">login</button>
  

           </form>
           {msg&& <p>{msg}</p> }
                 </div>

    )
}
export default Login
