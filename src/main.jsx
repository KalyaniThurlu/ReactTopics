// import React from "react";
// import { createRoot } from "react-dom/client";
// // index.js
// // export const MyContext = createContext();

// // const App = () => {
// //   const num = [1, 2];

// //   return (
// //     <MyContext.Provider value={num}>
// //       <div>
// //         <h1>This is context API</h1>
// //         <Cal />
// //       </div>
// //     </MyContext.Provider>
// //   );
// // };

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Exreducer/>
//   </React.StrictMode>
// );

import React from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PostApi from "./PostApi1";
import PostApi2 from "./DailyPractice";
import PutApi2 from "./DailyPractice";
import Bmi from "./bmi";

// const App=()=>{
//   return(
//     <BrowserRouter>
//     <div>
//       <span><Link to="/home">About</Link></span>
//       <span><Link to="/about">Home</Link></span>
//       <span><Link to="contact">Contact</Link></span>
//     </div>
//     <div>
// <Routes>

//   <Route path="/home" element={<Home/>} />
//    <Route path="/About" element={<About/>} />
//    <Route path="/contact" element={<Contact/>} />
// </Routes>

//     </div>
//     </BrowserRouter>
//   )
// }

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Bmi/>
  </React.StrictMode>
);
