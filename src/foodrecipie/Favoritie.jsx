
import { useFavorites } from "./FavoritiesContext";

const Favorities1 = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="container mt-4">
      <h2>My Favorite Recipes</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
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
                  <div
                    href={item.source_url}
                    target="_blank"
                   
                    className=" me-2"
                  >
                    <button> Read More</button>
                   <button style={{marginLeft:"10px"}}
                    onClick={() => removeFromFavorites(item.id)}
                  >
                    Remove
                  </button>
                   
                  </div>
                  
                  
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
