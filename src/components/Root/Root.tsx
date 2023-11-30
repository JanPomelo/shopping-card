"use strict";

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Root.module.scss";

const Root = ({ hours }: { hours: number }) => {
  function handleButtonClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const button = e.target as HTMLButtonElement;
    button.blur();
  }

  return (
    <div className={styles.container}>
      <Header
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          handleButtonClick(e);
        }}
        hours={hours}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
