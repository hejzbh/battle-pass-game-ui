import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

type FavoritesContextType<T extends string | number> = {
  favorites: T[];
  addFavorite: (id: T) => void;
  removeFavorite: (id: T) => void;
  toggleFavorite: (id: T) => void;
  checkIsFavorite: (id: T) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType<any> | null>(null);

export function FavoritesProvider<T extends string | number>({
  children,
  storageKey = "favorites",
}: {
  children: React.ReactNode;
  storageKey?: string;
}) {
  const [favorites, setFavorites] = useState<T[]>(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? (JSON.parse(stored) as T[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(favorites));
  }, [favorites, storageKey]);

  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key === storageKey) {
        if (e.newValue) {
          try {
            setFavorites(JSON.parse(e.newValue));
          } catch {}
        } else {
          setFavorites([]);
        }
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [storageKey]);

  const addFavorite = useCallback(
    (id: T) =>
      setFavorites((prev) => (prev.includes(id) ? prev : [...prev, id])),
    []
  );

  const removeFavorite = useCallback(
    (id: T) => setFavorites((prev) => prev.filter((fav) => fav !== id)),
    []
  );

  const toggleFavorite = useCallback(
    (id: T) =>
      setFavorites((prev) =>
        prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
      ),
    []
  );

  const checkIsFavorite = useCallback(
    (id: T) => favorites.includes(id),
    [favorites]
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        checkIsFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites<T extends string | number>() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context as FavoritesContextType<T>;
}
