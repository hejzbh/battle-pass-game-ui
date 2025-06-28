import { useCallback, useEffect, useState } from "react";

export function useFavorites<T extends string | number>(
  storageKey = "favorites"
) {
  const [favorites, setFavorites] = useState<T[]>(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? (JSON.parse(stored) as T[]) : [];
    } catch (error) {
      console.error("Failed to parse favorites from localStorage:", error);
      return [];
    }
  });

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(favorites));
    } catch (error) {
      console.error("Failed to save favorites to localStorage:", error);
    }
  }, [favorites, storageKey]);

  const checkIsFavorite = useCallback(
    (id: T): boolean => favorites.includes(id),
    [favorites]
  );

  const addFavorite = useCallback((id: T) => {
    setFavorites((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const removeFavorite = useCallback((id: T) => {
    setFavorites((prev) => prev.filter((favId) => favId !== id));
  }, []);

  const toggleFavorite = useCallback((id: T) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }, []);

  return {
    favorites,
    checkIsFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
  };
}
