
// import { useState } from "react";
// import Cookies from "js-cookie"; 

import { useState } from "react";
import Cookies from "js-cookie";
// const ExCookie = () => {
//   const [cookieValue, setCookieValue] = useState(Cookies.get("user") );

//   const addCookie = () => {
//     Cookies.set("user", "sumana"); 
//     setCookieValue("sumana");
//   };

//   const removeCookie = () => {
//     Cookies.remove("user");
//     setCookieValue("");
//   };
//   return (
//     <div>
//       <h1>This is cookies example</h1>
//       <p>{cookieValue ? cookieValue : "login user"}</p>
//       <button onClick={addCookie}>Add Cookie</button>
//       <button onClick={removeCookie}>Remove Cookie</button>
//     </div>
//   );
// };

// export default ExCookie;

const Excookie =()=>{
  const [cookieValue,setCookieValue]=useState(Cookies.get("user"))
  const addCookie=()=>{
    Cookies.set("latha")
    setCookieValue("latha")
  }
  
   const removeCookie=()=>{
   

    Cookies.remove("user")
    setCookieValue("")
  }
  


  return(
    <div>
      <h1>this is  cookies example</h1>
      <h2>{cookieValue?cookieValue:"user login"}</h2>
      <button onClick={addCookie}>addCookie</button>
      <button onClick={removeCookie}>removeCookie</button>
    </div>
  )
}
export default Excookie;