"use strict";

import Header from "../Header/Header";
import styles from "./Root.module.scss";

const Root = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.rootContainer}>
        <section className={styles.greeting}>
          <h2>Welcome to the Book Buffet</h2>
          <p>
            In this shop, you'll find every book for just 2 Euro. Why? Because we think that reading should be
            affordable for everyone. So, have fun browsing through our shop!
          </p>
        </section>
        <section className={styles.items}>
          <h3>Newest Arrivals</h3>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Root;
