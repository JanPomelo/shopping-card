import Character from "../../types/character";

interface ShoppingCardProps {
  card: Character[];
  plusClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  minusClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default ShoppingCardProps;
