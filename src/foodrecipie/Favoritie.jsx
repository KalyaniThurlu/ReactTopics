
import React from "react";
import { useFavorites } from "./FavoritiesContext";

const Favorities1 = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div>
     

      {favorites.length === 0 ? (
        <p>No favorite recipes added yet.</p>
      ) : (
        <div className="row">
          {favorites.map((item) => (
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
                  <a
                    href={item.source_url}
                    className="btn btn-sm btn-outline-primary me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Recipe
                  </a>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeFromFavorites(item.id)}
                  >
                    <i className="bi bi-trash3 me-1"></i> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorities1;
