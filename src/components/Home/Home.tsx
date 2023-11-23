"use strict";

import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Character from "../../types/character";
import CharacterCard from "../CharacterCard/CharacterCard";
import * as shlaami from "rickmortyapi";
import * as job from "node-schedule";

const Home = () => {
  const [sale, setSale] = useState([] as Character[]);
  const [highlight, setHighlight] = useState([] as Character[]);
  const [numbers, setNumbers] = useState([88, 22, 810, 432, 398]);

  useEffect(() => {
    const jobbi = job.scheduleJob("0 0 * * *", () => {
      const arr: number[] = [];
      while (arr.length < 5) {
        const num: number = Math.floor(Math.random() * 826 + 1);
        let inside = false;
        for (let j = 0; j < arr.length; j++) {
          if (num === arr[j]) {
            inside = true;
          }
        }
        if (!inside) {
          arr.push(num);
        }
      }
      setNumbers(arr);
      job.cancelJob(jobbi);
    });
    const getData = async () => {
      const sales = await shlaami.getCharacter(numbers).then((data) => data.data);
      setSale(sales);
      const highlights = await shlaami.getCharacter([265, 244, 118]).then((data) => data.data);
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
          <p>Meet with these characters for just 499 flurbos per hour! Limited offer!</p>
        </div>
        <div className={styles.offers}>
          {sale.map((char) => {
            return <CharacterCard char={char} price={499} />;
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
            return <CharacterCard char={char} price={1499} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
