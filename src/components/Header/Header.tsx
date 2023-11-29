"use strict";

import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
import HeaderProps from "./HeaderProps";
styles;

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (
    <div className={styles.header} id='header'>
      <Link to="/" className={styles.img}>
        <img src="/rick.png" alt="Rick" />
      </Link>
      <h1>Schwifty Shop</h1>
      <NavBar onButtonClick={onClick} />
    </div>
  );
};

export default Header;
