
import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DailyPractice from "./DailyPractice";
import StopWatch from "./DailyPractice";


// import Food from "./foodrecipie/FoodRecipies";
// import Favorities1 from "./foodrecipie/Favoritie";
// import Home from "./foodrecipie/Home";
// import { FavoritesProvider } from "./foodrecipie/FavoritiesContext";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div
//         className="d-flex justify-content-end align-items-center p-3"
//         style={{
//           backgroundColor: "pink",
//           width: "100%",
//           position: "relative",
//         }}
//       >
//         <Link to="/" className="me-3 text-dark text-decoration-none">
//           Home
//         </Link>
//         <Link to="/food" className="me-3 text-dark text-decoration-none">
//           Food
//         </Link>
//         <Link to="/favorities1" className="text-dark text-decoration-none">
//           Favorites
//         </Link>
//       </div>

//       <div className="container mt-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/food" element={<Food />} />
//           <Route path="/favorities1" element={<Favorities1 />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

// ✅ FIXED: Wrap App inside FavoritesProvider
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FavoritesProvider>
      <App />
    </FavoritesProvider> */}
    <StopWatch/>
  </React.StrictMode>
);
