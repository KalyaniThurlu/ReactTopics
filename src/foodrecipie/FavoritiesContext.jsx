

import { createContext, useContext, useState } from "react";
const FavoritesContext = createContext();
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (recipe) => {
    setFavorites((prev) =>
      prev.some((item) => item.id === recipe.id) ? prev : [...prev, recipe]
    );
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
