"use strict";

import { Link } from "react-router-dom";
import styles from "./CharacterCard.module.scss";
import CharacterCardProps from "./CharacterCardProps";

const CharacterCard: React.FC<CharacterCardProps> = ({ char }) => {
  return (
    <Link to={"/shop/" + char.id}>
      <div className={styles.container}>
        {char.sale ? <div className={styles.specialOffer}></div> : <></>}
        <img src={char.image}></img>
        <div className={styles.nameDiv}>
          <h3>{char.name}</h3>
        </div>
        <div className={styles.informations}>
          <p>Price:</p>
          <div>
            <p>
              {char.price} <span className={styles.flurbo}></span>
            </p>
            {char.sale ? (
              <div className={styles.salesExtra}>
                1499 <span className={styles.flurbo}></span>
                <hr className={styles.crossLine} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
