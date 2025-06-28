import Text from "@/components/ui/Text";
import { useFavorites } from "../../hooks/use-favorites";

interface FavoritesListProps {
  className?: string;
}

const FavoriteList = ({ className = "" }: FavoritesListProps) => {
  const { favorites } = useFavorites();

  if (!favorites?.length) return <Text>There's no any favorited mission</Text>;
  return (
    <ul className={`space-y-3 ${className}`}>
      {favorites?.map((favoriteId) => (
        <li key={favoriteId}>
          <Text className="text-white" size="xl">
            ID: {favoriteId}
          </Text>
        </li>
      ))}
    </ul>
  );
};

export default FavoriteList;
