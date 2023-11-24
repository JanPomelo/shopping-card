"use strict";

import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Character from "../../types/character";
import CharacterCard from "../CharacterCard/CharacterCard";
import * as shlaami from "rickmortyapi";
import * as fns from "date-fns";

function getCurrentSale() {
  let curMins = 60 - Number(fns.format(new Date(), "m"));
  if (curMins === 60) {
    curMins = 0;
  }
  const fullHour: number = curMins === 60 ? 0 : 1;
  const curHour = 24 - Number(fns.format(new Date(), "H")) - fullHour;
  return `${curHour} h ${curMins} min`;
}

const Home = ({ numbers }: { numbers: number[] }) => {
  const [sale, setSale] = useState([] as Character[]);
  const [highlight, setHighlight] = useState([] as Character[]);
  const [saleEnds, setSaleEnds] = useState(getCurrentSale());

  useEffect(() => {
    setTimeout(() => {
      setSaleEnds(getCurrentSale());
    }, 60 * 1000);
  }, [saleEnds]);
  useEffect(() => {
    const getData = async () => {
      const sales = await shlaami.getCharacter(numbers).then((data) => {
        data.data.map((char: Character) => {
          char.price = 499;
        });
        return data.data;
      });
      setSale(sales);
      const highlights = await shlaami.getCharacter([265, 244, 118]).then((data) => {
        data.data.map((char: Character) => {
          let inside: boolean = false;
          for (let i = 0; i < numbers.length; i++) {
            if (char.id === numbers[i]) {
              inside = true;
            }
          }
          if (!inside) {
            char.price = 1499;
          } else {
            char.price = 499;
          }
        });
        return data.data;
      });
      setHighlight(highlights);
    };
    getData();
  }, [numbers]);

  return (
    <div className={styles.rootContainer}>
      <section className={styles.greeting}>
        <h2>Meet your favorite character!</h2>
        <p>
          Have you ever thought about how cool it would be to drink a coffee with Mr. Poopybutthole or go into another
          crazy universe together with Rick and Morty? Well, you can stop dreaming! Here in the Schwifty Shop, you can
          buy time with every single character from Rick and Morty and spend it however you want!
        </p>
      </section>
      <section>
        <div className={styles.text}>
          <h2>Limited offers!</h2>
          <p>
            Meet with these characters for just 499 flurbos per hour! Limited offer! Resets every day at midnight
            (GMT+7)
          </p>
          <h3>Today's pick: Only {saleEnds} left</h3>
        </div>
        <div className={styles.offers}>
          {sale.map((char) => {
            return <CharacterCard char={char} sales={true} key={char.id} />;
          })}
        </div>
      </section>
      <section>
        <div className={styles.text}>
          <h2>Hottest Shit!</h2>
          <p>The Best-Seller, most famous characters in our shop!</p>
        </div>
        <div className={styles.offers}>
          {highlight.map((char) => {
            return <CharacterCard char={char} sales={false} key={char.id} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
