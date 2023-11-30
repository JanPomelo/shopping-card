"use strict";

import Character from "../../types/character";
import styles from "./Card.module.scss";
styles;
const Card = ({ card }: { card: Character[] }) => {
  return (
    <div className={styles.container}>
      <div tabIndex={1} className={styles.wheeli}>
        <div className={styles.hours}>
          <span className={card.length < 10 ? styles.underTen : styles.moreTen}>{card.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
