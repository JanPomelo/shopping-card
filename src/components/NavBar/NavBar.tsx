"use strict";
import styles from "./NavBar.module.scss";
import NavBarProps from "./NavBarProps";
import { Link } from "react-router-dom";
styles;

const NavBar: React.FC<NavBarProps> = ({ onButtonClick, page }) => {
  return (
    page === "Shop" ? (
      <Link to="/" onClick={onButtonClick} className={styles.link}>
        <div className={styles.bg}></div>
        Home
        <div></div>
      </Link>
    ) : (
      <Link to="shop" onClick={onButtonClick} className={styles.link}>
        <div className={styles.bg}></div>Shop
        <div></div>
      </Link>
    )
  )
};

export default NavBar;
