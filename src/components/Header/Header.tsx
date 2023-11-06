"use strict";

import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
styles;

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>The Book Buffet</h1>
      <p>...because reading should be obtainable for everyone</p>
      <NavBar />
    </div>
  );
};

export default Header;
