"use strict";
import styles from "./ShoppingCard.module.scss";
import ShoppingCardProps from "./ShoppingCardProps";

const ShoppingCard: React.FC<ShoppingCardProps> = ({ card, plusClick, minusClick }) => {
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
          <div className={styles.fullContainer}>
          <>
            {card.map((char) => {
              return (
                <div className={styles.charContainer} key={char.id}>
                  <img src={char.image} />
                  <h2>{char.name}</h2>
                  <div className={styles.hours}>
                    <p>Hours:</p>
                    <div>
                      <button className={styles.minusButton} id={card.indexOf(char) + "-Minus"} onClick={minusClick}>
                        -
                      </button>
                      <span>{char.hours}</span>
                      <button className={styles.plusButton} id={card.indexOf(char) + "-Plus"} onClick={plusClick}>
                        +
                      </button>
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
          <div className={styles.total}>
            <p>Total price:</p>
            <p>
              {total}
              <span className={styles.flurbo}></span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCard;
