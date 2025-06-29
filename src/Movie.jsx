
import { useEffect, useState } from "react";
import "./movie.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [msg, setMsg] = useState("");
  const [serchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    if (serchMovie.trim() === "") {
      setMovies([]);
      setMsg("Search for a movie...");
      return;
    }

    fetch(`http://www.omdbapi.com/?s=${serchMovie}&apikey=c8a51988`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
          setMsg("");
        } else {
          setMovies([]);
          setMsg("Movie not found.");
        }
      })
      .catch((error) => {
        console.error(error);
        setMsg("Something went wrong.");
      });
  }, [serchMovie]);

  const handleSearch = (e) => {
    setSearchMovie(e.target.value);
  };

  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.imdbID !== id);
    setMovies(updatedMovies);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand text-white" href="#">
          🎬 Movie App
        </a>

        <div className="ms-auto d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search movies..."
            style={{ width: "200px" }}
            value={serchMovie}
            onChange={handleSearch}
          />
          <i className="bi bi-search text-white"></i>
        </div>
      </nav>

      <div className="container text-center py-4">
        <h2 className="text-warning">{msg}</h2>

        <ul className="poster-row list-unstyled d-flex flex-wrap justify-content-center">
          {movies.map((movie) => (
            <li key={movie.imdbID} className="m-3 movie-card">
              <div className="poster-container">
                <img src={movie.Poster} alt={movie.Title} width="200px" />

                <div>
                  <i className="bi bi-heart-fill heart-icon">
                    <span className="text">Add to favorites</span>
                  </i>
                </div>

                <div className="trash-icon" onClick={() => handleDelete(movie.imdbID)}>
                  <i className="bi bi-trash">
                    <span className="text1">Remove</span>
                  </i>
                </div>
              </div>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
