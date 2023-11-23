"use strict";

import styles from "./CharacterCard.module.scss";
import CharacterCardProps from "./CharacterCardProps";

const CharacterCard: React.FC<CharacterCardProps> = ({ char, price }) => {
  return (
    <div className={styles.container}>
      <img src={char.image}></img>
      <div className={styles.nameDiv}>
        <h3>{char.name}</h3>
      </div>
      <div className={styles.informations}>
        <p>Price:</p>
        <p>{price} <span className={styles.flurbo}></span></p>
      </div>
    </div>
  );
};

export default CharacterCard;
