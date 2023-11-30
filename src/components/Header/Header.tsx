"use strict";

import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
import HeaderProps from "./HeaderProps";
import Card from "../Card/Card";
styles;

const Header: React.FC<HeaderProps> = ({ onClick, hours }) => {
  return (
    <div className={styles.header} id="header">
      <Card hours={hours} />
      <h1>Schwifty Shop</h1>
      <NavBar onButtonClick={onClick} />
    </div>
  );
};

export default Header;
