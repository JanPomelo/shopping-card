"use strict";

import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
styles;

const Header = () => {
  const [page, setPage] = useState("Home");
  console.log(page);
  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    const button = e.target as HTMLButtonElement;
    button.blur();
    setPage(button.innerText);
  }

  return (
    <div className={styles.header}>
      <h1>The Book Buffet</h1>
      <p>...because reading should be obtainable for everyone</p>
      <NavBar
        page={page}
        onButtonClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          handleButtonClick(e);
        }}
      />
    </div>
  );
};

export default Header;
