"use strict";

import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section>
          <h2>Impressum</h2>
          <p>
            Interdimensional Ventures LLC
            <br />
            Dimension C-137, Smith Residence
            <br />
            Morty Town, Earth
          </p>
        </section>
        <section>
          <h2>Terms and Conditions</h2>
          <Link to='/terms-and-conditions' className={styles.link}>Click here to read our terms and conditions.</Link>
          <h2>FAQ</h2>
          <Link to='/faq' className={styles.link}>Click here to read through the frequentially asked questions.</Link>
        </section>
      </div>
      <p className={styles.warning}>This is NOT a real service! This is just a fake shop!</p>
    </div>
  );
};

export default Footer;
