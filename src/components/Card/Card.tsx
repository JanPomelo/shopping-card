"use strict";

import styles from "./Card.module.scss";
styles;
const Card = ({ hours }: { hours: number }) => {
  return (
    <div className={styles.container}>
      <div tabIndex={1} className={styles.wheeli}>
        <div className={styles.hours}><span className={hours < 10 ? styles.underTen : styles.moreTen}>{hours}</span></div>
      </div>
    </div>
  );
};

export default Card;
