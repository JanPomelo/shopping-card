"use strict";

import Header from "../Header/Header";
import styles from "./Root.module.scss";

const Root = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div></div>
    </div>
  );
};

export default Root;
