
// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// import Home from "../src/portpolio/Home";
// import About from "../src/portpolio/About";

// import Skills from "../src/portpolio/Skills";
// import Contact from "./portpolio/contact";
// import Projects from "./portpolio/Projects";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <nav
//         style={{
//           width: "100%",
//           height: "40%",
//           backgroundColor: "lightblue",
//           color: "green",
//           padding: "10px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <span style={{ marginLeft: "72%", padding: "10px" }}>
//           <Link to="/" style={{ color: "green", textDecoration: "none" }}>Home</Link>
//         </span>
//         <span style={{ marginLeft: "20px", padding: "10px" }}>
//           <Link to="/about" style={{ color: "green", }}>About</Link>
//         </span>
//         <span style={{ marginLeft: "20px", padding: "10px" }}>
//           <Link to="/Skills" style={{ color: "green", textDecoration: "none" }}>Skills</Link>
//         </span>
//          <span style={{ marginLeft: "20px", padding: "10px" }}>
//           <Link to="/Projects" style={{ color: "green", textDecoration: "none" }}>Projects</Link>
//         </span>
//           <Link to="/contact" style={{ color: "green", textDecoration: "none" }}>Contact</Link>
//          <span style={{ marginLeft: "20px", padding: "10px" }}>
//         </span>
//       </nav>

//       <Routes>

//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/Skills" element={<Skills />} />
//            <Route path="/Contact" element={<Contact />} />
//               <Route path="/projects" element={<Projects />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "../src/foodDelivery/Home";
import About from "./foodDelivery/about";
import Contact from "./foodDelivery/Contact";



const App = () => {
  return (
    <BrowserRouter>
      <nav
        style={{
          width: "100%",
          height: "40%",
          backgroundColor: "lightblue",
          color: "green",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginLeft: "72%", padding: "10px" }}>
          <Link to="/" style={{ color: "green", textDecoration: "none" }}>Home</Link>
        </span>
        <span style={{ marginLeft: "20px", padding: "10px" }}>
          <Link to="/about" style={{ color: "green", }}>About</Link>
        </span>
          <Link to="/contact" style={{ color: "green", textDecoration: "none" }}>Contact</Link>
         <span style={{ marginLeft: "20px", padding: "10px" }}>
        </span>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      
           <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

