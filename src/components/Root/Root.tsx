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
      {page === "Home" ? (
        <div className={styles.rootContainer}>
          <section className={styles.greeting}>
            <h2>Meet your favorite character!</h2>
            <p>
              Have you ever thought about how cool it would be to drink a coffee with Mr. Kakapoopoo or go into another
              crazy universe together with Rick and Morty? Well, you can stop dreaming! Here in the Schwifty Shop, you
              can buy time with every single character from Rick and Morty and spend it however you want!
            </p>
          </section>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default Root;
