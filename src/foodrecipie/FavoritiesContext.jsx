

import { createContext, useState, useContext } from "react";

// 1. Create Context
const FavoritesContext = createContext();

// 2. Provider Component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Add recipe if not already in favorites
  const addToFavorites = (recipe) => {
    setFavorites((prev) =>
      prev.some((item) => item.id === recipe.id)
        ? prev
        : [...prev, recipe]
    );
  };

  // Remove recipe by ID
  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// 3. Custom Hook
export const useFavorites = () => useContext(FavoritesContext);
