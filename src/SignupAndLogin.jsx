
// import React, { useState } from 'react';
// import Login from './Login';
// import Signup from './signup';

import { useState } from "react"
import Signup from "./signup"
import Login from "./Login"

// const Practice = () => {
//   const [showLogin, setShowLogin] = useState(true);

//   return (
//     <div>
//       {showLogin ? <Login /> : <Signup />}
//       <p>
//         {showLogin ? "Don't have an account?" : "Already have an account?"}
//         <button onClick={() => setShowLogin(!showLogin)}>
//           {showLogin ? 'Signup' : 'Login'}
//         </button>
//       </p>
//     </div>
//   );
// };

// export default Practice;

const Practice =()=>{
  const [showLogin,setShowLogin]=useState(true)
  return(
    <div>
      <h1>this is both login and signup</h1>
      {showLogin?<Login/>:<Signup/>}
      <p>
        {
showLogin?"don't have account":"already have an account"
        }
        <button onClick={()=>setShowLogin(!showLogin)}>
          {showLogin?"signup":"login"}
        </button>
        </p>

    </div>
  )
}
export default Practice