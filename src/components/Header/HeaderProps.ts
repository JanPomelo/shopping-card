import Character from "../../types/character";

interface HeaderProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  card: Character[];
}

export default HeaderProps;
