"use strict";

import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
import HeaderProps from "./HeaderProps";
styles;

const Header: React.FC<HeaderProps> = ({ page, onClick }) => {
  return (
    <div className={styles.header}>
      <img src="/rick.png" alt="Rick" />
      <h1>Schwifty Shop</h1>
      <NavBar
        page={page}
        onButtonClick={onClick}
      />
    </div>
  );
};

export default Header;
