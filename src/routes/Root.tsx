"use strict";

import Header from "../components/Header";
import styles from "../styles/Root.module.scss";

const Root = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div></div>
      <div></div>
    </div>
  );
};

export default Root;
