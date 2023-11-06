"use strict";
import styles from "./NavBar.module.scss";
styles;

const NavBar = () => {
  return (
    <div className={styles.container}>
      <button>Home</button>
      <button>Shop</button>
    </div>
  );
};

export default NavBar;
