
import axios from "axios";
import { useState } from "react";
import "./FoodRecipie.css";

const Food = () => {
  const [items, setItems] = useState([]);
  const [msg, setMsg] = useState("");
  const [search, setSearch] = useState("");

  const searchFood = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      setMsg("Enter a valid food name.");
      return;
    }

    setMsg("Searching...");
    axios
      .get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
      .then((res) => {
        setItems(res.data.data.recipes);
        setMsg(`Found ${res.data.data.recipes.length} items`);
      })
      .catch((err) => {
        console.error(err);
        setMsg("No results found");
      });
  };

  return (
    <div className="container">
      <h2 className="mb-3">{msg}</h2>

      <form onSubmit={searchFood} className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-2"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          
        />
        <button type="submit">Search</button>
      </form>

      <div className="grid-container">
        {items.map((item) => (
          <div key={item.id} className="card higth-100">
            <img
              src={item.image_url}
              alt={item.title}
              className="card-img-top recipe-img"
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">Publisher: {item.publisher}</p>
              <button>Add</button>
              <button >Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
