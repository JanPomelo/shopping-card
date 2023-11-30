"use strict";

import { useParams } from "react-router-dom";
import styles from "./Item.module.scss";
import ErrorPage from "../ErrorPage/Errorpage";
import * as shlaami from "rickmortyapi";
import { useEffect, useState } from "react";
import Character from "../../types/character";
import Card from "../Card/Card";

const Item = ({ numbers }: { numbers: number[] }) => {
  const [char, setChar] = useState({
    name: "",
    species: "",
    origin: {
      name: "",
      url: "",
    },
    image: "",
    id: 0,
    status: "unknown",
    gender: "unknown",
    episode: [],
    location: {
      name: "",
      url: "",
    },
    url: "",
    created: "",
    type: "",
  } as Character);
  const { id } = useParams();
  const iD = parseInt(id!);
  useEffect(() => {
    const getChar = async () => {
      const customChar = await shlaami.getCharacter(iD).then((data) => {
        return data.data;
      });
      setChar(customChar);
    };
    getChar();
  }, [iD]);

  char.price = numbers.includes(char.id) ? 499 : 1499;

  if (!iD || iD > 826 || iD < 1) {
    return <ErrorPage />;
  }
  return (
    <div className={styles.container}>
      <Card />
      <img src={char.image} />
      <div className={styles.table}>
        <p>Name:</p>
        <p>{char.name}</p>
        <p>Species:</p>
        <p>{char.species}</p>
        <p>Gender:</p>
        <p>{char.gender}</p>
        <p>Status:</p>
        <p>{char.status}</p>
        <p>Origin:</p>
        <p>{char.origin.name}</p>
      </div>
      <div className={styles.priceAndBook}>
        <div className={styles.priceTag}>
          <span className={styles.flurbo}></span>
          <span className={styles.priceText}>{char.price}</span>
        </div>
        <div className={styles.bookButtons}>
          <button className={styles.book}>Book hours</button>
          <select name="hours" id="hours" className={styles.bookHours}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Item;
