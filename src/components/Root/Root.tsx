"use strict";

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Root.module.scss";
import { useState } from "react";

const Root = () => {
  const [page, setPage] = useState("Home");
  function handleButtonClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const button = e.target as HTMLButtonElement;
    button.blur();
    setPage(button.innerText);
  }

  return (
    <div className={styles.container}>
      <Header
        page={page}
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          handleButtonClick(e);
        }}
      />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Root;
