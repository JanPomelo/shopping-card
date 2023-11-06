"use strict";
import styles from "./NavBar.module.scss";
import NavBarProps from "./NavBarProps";
styles;

const NavBar: React.FC<NavBarProps> = ({ onButtonClick }) => {
  return (
    <div className={styles.container}>
      <button onClick={onButtonClick}>Home</button>
      <button onClick={onButtonClick}>Shop</button>
    </div>
  );
};

export default NavBar;
