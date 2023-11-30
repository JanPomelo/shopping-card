"use strict";

import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
import HeaderProps from "./HeaderProps";
import Card from "../Card/Card";
styles;

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (
    <div className={styles.header} id="header">
      <Card />
      <h1>Schwifty Shop</h1>
      <NavBar onButtonClick={onClick} />
    </div>
  );
};

export default Header;
