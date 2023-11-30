import Character from "../../types/character";

interface HeaderProps {
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  card: Character[];
}

export default HeaderProps;
