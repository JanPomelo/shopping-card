"use strict";
import styles from "./NavBar.module.scss";
import NavBarProps from "./NavBarProps";
import { Link } from "react-router-dom";
styles;

const NavBar: React.FC<NavBarProps> = ({ onButtonClick, page }) => {
  return page === "Shop" ? (
    <Link to="/" onClick={onButtonClick} className={styles.link}>
      Home
    </Link>
  ) : (
    <div className={styles.container}>
      <div className={styles.arrow}></div>
      <Link to="shop" onClick={onButtonClick} className={styles.link}>
        Shop
      </Link>
    </div>
  );
};

export default NavBar;
