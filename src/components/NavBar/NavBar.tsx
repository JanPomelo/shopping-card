"use strict";
import styles from "./NavBar.module.scss";
import NavBarProps from "./NavBarProps";
import { Link } from "react-router-dom";
styles;
import { useLocation } from "react-router-dom";

const NavBar: React.FC<NavBarProps> = ({ onButtonClick }) => {
  const location = useLocation();
  return location.pathname === "/" ? (
    <div className={styles.container}>
      <div className={styles.arrow}></div>
      <Link to="shop" onClick={onButtonClick} className={styles.link}>
        Shop
      </Link>
    </div>
  ) : (
    <Link to="/" onClick={onButtonClick} className={styles.link}>
      Home
    </Link>
  );
};

export default NavBar;
