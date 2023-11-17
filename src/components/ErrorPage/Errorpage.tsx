"use strict";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";
styles;
const ErrorPage = () => {
  return (
    <div className={styles.bg}>
    <div className={styles.container}>
      <h1>Oops! Sorry! :(</h1>
      <p>
        Looks like this URL doesn't exist. Please click <Link to="/">here</Link> to get back to the main page.
      </p>
      </div>
      </div>
  );
};

export default ErrorPage;
