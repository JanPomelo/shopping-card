"use strict";

import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
styles;

const Header = () => {
  const [page, setPage] = useState("Home");
  function handleButtonClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const button = e.target as HTMLButtonElement;
    button.blur();
    setPage(button.innerText);
  }

  return (
    <div className={styles.header}>
      <img src="./rick.png" alt="Rick" />
      <h1>Schwifty Shop</h1>
      <NavBar
        page={page}
        onButtonClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          handleButtonClick(e);
        }}
      />
    </div>
  );
};

export default Header;
