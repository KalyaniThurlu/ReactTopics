
import { useState } from "react";
import axios from "axios";
import { useFavorites } from "./FavoritiesContext";

const Food = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [msg, setMsg] = useState("");
  const { addToFavorites } = useFavorites();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      setMsg("Enter a food name.");
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
        setItems([]);
      });
  };

  return (
    <div className="container mt-4">
      <h2>{msg}</h2>

      <form onSubmit={handleSearch} className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search food"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
        
          Search
        </button>
      </form>

      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card hight-100 ">
              <img
                src={item.image_url}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Publisher: {item.publisher}</p>
                <button
                  onClick={() =>
                    addToFavorites({
                      id: item.id || item.recipe_id || Date.now(),
                      title: item.title,
                      publisher: item.publisher,
                      image_url: item.image_url,
                      source_url: item.source_url,
                    })
                  }
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
