
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "../src/portpolio/Home";
import About from "../src/portpolio/About";
import Contact from "../src/portpolio/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <nav
        style={{
          width: "100%",
          height: "40%",
          backgroundColor: "yellow",
          color: "green",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginLeft: "75%", padding: "10px" }}>
          <Link to="/" style={{ color: "green", textDecoration: "none" }}>Home</Link>
        </span>
        <span style={{ marginLeft: "20px", padding: "10px" }}>
          <Link to="/about" style={{ color: "green", }}>About</Link>
        </span>
        <span style={{ marginLeft: "20px", padding: "10px" }}>
          <Link to="/contact" style={{ color: "green", textDecoration: "none" }}>Contact</Link>
        </span>
         <span style={{ marginLeft: "20px", padding: "10px" }}>
          <Link to="/contact" style={{ color: "green", textDecoration: "none" }}>Contact</Link>
        </span>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
