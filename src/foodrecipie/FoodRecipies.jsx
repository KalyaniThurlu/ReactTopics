
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

  
  const quickFilter = (meal) => {
    setSearch(meal);
    setMsg(`Searching for ${meal} recipes`);
    axios
      .get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${meal}`)
      .then((res) => {
        setItems(res.data.data.recipes);
      })
      .catch(() => {
        setMsg("No results");
        setItems([]);
      });
  };

  return (
    <div>
      <h2>{msg}</h2>

      <form onSubmit={handleSearch}>
        <input
          type="text"
    
          
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          Search
        </button>
      </form>


      <div className="mb-4" style={{marginBottom:"20px"}}>
        <button  onClick={() => quickFilter("breakfast")}>
          Breakfast
        </button>
        <button onClick={() => quickFilter("lunch")}>
          Lunch
        </button>
        <button  onClick={() => quickFilter("dinner")}>
          Dinner
        </button>
      </div>

      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={item.image_url}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Publisher: {item.publisher}</p>
                
                <button onClick={()=>veiwReciepie}> View Recipe</button>
                <button
                  
                  onClick={() =>
                    addToFavorites({
                      id: item.id || Date.now(),
                      title: item.title,
                      publisher: item.publisher,
                      image_url: item.image_url,
                      source_url: item.source_url,
                    })
                  }
                >
                  <i className></i> Favorite
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
