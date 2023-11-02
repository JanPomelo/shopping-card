"use strict";
import { Link } from "react-router-dom";
import styles from "../styles/ErrorPage.module.scss";
styles;
const ErrorPage = () => {
  return (
    <div>
      <h1>Oops! Sorry! :(</h1>
      <p>
        Looks like this URL doesn't exist. Please click <Link to="/">here</Link> to get back to the main page.
      </p>
    </div>
  );
};

export default ErrorPage;
