import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const addToFavorites = (product) => {
    const exists = favorites.find(
      (item) => item.id === product.id
    );

    if (exists) return;

    setFavorites([...favorites, product]);
  };

  const removeFromFavorites = (id) => {
    setFavorites(
      favorites.filter((item) => item.id !== id)
    );
  };

  const isFavorite = (id) => {
    return favorites.some(
      (item) => item.id === id
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => {
  return useContext(FavoritesContext);
};