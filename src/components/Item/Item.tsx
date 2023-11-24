"use strict";

import { useParams } from "react-router-dom";
import styles from "./Item.module.scss";
import ErrorPage from "../ErrorPage/Errorpage";
import * as shlaami from "rickmortyapi";
import { useEffect, useState } from "react";
import Character from "../../types/character";

const Item = () => {
  const [char, setChar] = useState({
    name: "",
    species: "",
    origin: {
      name: "",
      url: '',
    },
    image: "",
    id: 0,
    status: "unknown",
    gender: "unknown",
    episode: [],
    location: {
      name: '',
      url: '',
    },
    url: '',
    created: '',
    type: '',
  } as Character);
  const { id } = useParams();
  const iD = parseInt(id!);
  useEffect(() => {
    const getChar = async () => {
      const customChar = await shlaami.getCharacter(iD).then((data) => {
        console.log(data);
        return data.data;
      });
      setChar(customChar);
      console.log(customChar);
    };
    getChar();
  }, [iD]);
  if (!iD || iD > 826 || iD < 1) {
    return <ErrorPage />;
  }
  return (
    <div className={styles.container}>
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
        <p>Episode Appereances:</p>
        <p>
          {char.episode.map((episode) => (
            <span>{episode.substring(episode.lastIndexOf("/") + 1)} </span>
          ))}
        </p>
      </div>
      <div className={styles.priceAndBook}>
        <div className={styles.priceTag}>
          <span className={styles.flurbo}></span>
          <span>{char.price}</span>
        </div>
        <div>
          <button className={styles.book}>Book time</button>
          <select name="hours" id="hours">
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
