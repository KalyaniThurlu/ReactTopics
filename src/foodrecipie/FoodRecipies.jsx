
// src/foodrecipie/Food.jsx
import { useState } from "react";
import axios from "axios";
import "./FoodRecipies.css";

const Food = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [msg, setMsg] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      setMsg("Please enter a food name.");
      return;
    }

    axios
      .get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
      .then((res) => {
        setItems(res.data.data.recipes);
        setMsg("Search Results:");
      })
      .catch(() => {
        setMsg("No results found.");
      });
  };

  return (
    <div className="food-wrapper" >
      <nav className="" style={{width:"100%",height:"50px",backgroundColor:"purple"}}>
        <span className="navbar-brand mb-0 h1" 
        >🍽️ Food Recipe Finder</span>
      </nav>

      <div className="container custom-container">
        <h2 className="text-white">{msg}</h2>
        <form onSubmit={handleSearch} className="d-flex mb-3">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Enter food name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-warning" type="submit">
            Search
          </button>
        </form>

        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image_url}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Publisher: {item.publisher}</p>
                  <button>Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
