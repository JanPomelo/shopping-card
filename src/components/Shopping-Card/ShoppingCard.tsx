"use strict";

import Character from "../../types/character";
import styles from "./ShoppingCard.module.scss";

const ShoppingCard = ({ card }: { card: Character[] }) => {
  let total = 0;
  for (let i = 0; i < card.length; i++) {
    total += card[i].price! * card[i].hours!;
  }

  return (
    <div className={styles.container}>
      {card.length === 0 ? (
        <div className={styles.emptyContainer}>
          <h3>The Card is empty!</h3>Go back shopping!
        </div>
      ) : (
        <>
          {card.map((char) => {
            return (
              <div className={styles.charContainer} key={char.id}>
                <img src={char.image} />
                <h2>{char.name}</h2>
                <div className={styles.hours}>
                  <p>Hours:</p>
                  <div>
                    <button id={styles.minusButton}>-</button>
                    <span>{char.hours}</span>
                    <button id={styles.plusButton}>+</button>
                  </div>
                </div>
                <div className={styles.price}>
                  <p>Price:</p>
                  <div>
                    <span>{char.hours! * char.price!}</span>
                    <span className={styles.flurbo}></span>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
      <div className={styles.total}>
        <p>Total price:</p>
        <p>
          {total}
          <span className={styles.flurbo}></span>
        </p>
      </div>
    </div>
  );
};

export default ShoppingCard;
