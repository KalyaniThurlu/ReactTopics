import React from "react";

import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./routes/Home";
import Food from "./FoodRecipie";
import Favorites from "./routes/Favorites";

const App = () => {
  return (
    <BrowserRouter>
     
     <div
  className="d-flex justify-content-end align-items-center p-3"
  style={{ backgroundColor: "pink", width: "100%", position: "relative" }}
>
  <Link to="/home" className="me-3 text-dark text-decoration-none">Home</Link>
  <Link to="/food" className="me-3 text-dark text-decoration-none">Food</Link>
  <Link to="/favorites" className="text-dark text-decoration-none">Favorites</Link>
</div>



      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/food" element={<Food/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// Render App
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);