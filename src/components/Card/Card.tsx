"use strict";

import { Link } from "react-router-dom";
import Character from "../../types/character";
import styles from "./Card.module.scss";
styles;
const Card = ({ card }: { card: Character[] }) => {
  return (
    <Link
      to="/shopping-card"
      className={styles.container}
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        const link = e.target as HTMLElement;
        link.blur();
      }}
    >
      <div tabIndex={1} className={styles.wheeli}>
        <div className={styles.hours}>
          <span className={card.length < 10 ? styles.underTen : styles.moreTen}>{card.length}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
