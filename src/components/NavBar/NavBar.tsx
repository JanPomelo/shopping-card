"use strict";
import styles from "./NavBar.module.scss";
import NavBarProps from "./NavBarProps";
styles;

const NavBar: React.FC<NavBarProps> = ({ onButtonClick, page }) => {
  return (
    <div className={styles.container}>
      {page === "Home" ? (
        <>
          <button onClick={onButtonClick} className={styles.selected}>
            Home
          </button>
          <button onClick={onButtonClick}>Shop</button>
        </>
      ) : (
        <>
          {" "}
          <button onClick={onButtonClick}>Home</button>
          <button onClick={onButtonClick} className={styles.selected}>
            Shop
          </button>{" "}
        </>
      )}
    </div>
  );
};

export default NavBar;
