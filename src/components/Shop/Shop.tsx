"use strict";

import { useEffect, useState } from "react";
import styles from "./Shop.module.scss";
import * as shlaami from "rickmortyapi";
import Character from "../../types/character";
import CharacterCard from "../CharacterCard/CharacterCard";
import checkSale from "../../globalFunctions";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
const Shop = ({ numbers }: { numbers: number[] }) => {
  // Searchbar
  // sort and filter options
  // items
  const [characters, setCharacters] = useState([] as Character[]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [nextAndPrev, setNextAndPrev] = useState({ next: null, previous: null } as {
    next: null | string;
    previous: null | string;
  });

  const onSearch = () => {
    const searchInput: HTMLInputElement = document.getElementById("inputSearch") as HTMLInputElement;
    setSearch(searchInput.value);
    setPage(1);
  };

  const onButtonNextClick = () => {
    setPage(page + 1);
    const header = document.getElementById("header") as HTMLElement;
    header.scrollIntoView();
  };

  const onButtonPreviousClick = () => {
    setPage(page - 1);
    const header = document.getElementById("header") as HTMLElement;
    header.scrollIntoView();
  };

  useEffect(() => {
    const getData = async () => {
      const allChars: Character[] = [];
      const options: { page?: number; name?: string } = {};
      if (search !== "") {
        options.name = search;
        options.page = page;
      } else {
        options.page = page;
      }
      let next: string | null = null;
      let prev: string | null = null;
      await shlaami.getCharacters(options).then((data) => {
        next = data.data.info!.next;
        prev = data.data.info!.prev;
        data.data!.results!.map((char) => {
          checkSale(char, numbers);
          allChars.push(char);
        });
      });
      setCharacters(allChars as Character[]);
      setNextAndPrev({ next: next, previous: prev });
    };
    getData();
  }, [page, numbers, search]);
  return (
    <div className={styles.container}>
      <SearchAndFilter onSearch={onSearch} />
      <div className={styles.itemDiv}>
        <div className={styles.offers}>
          {characters.map((character) => (
            <CharacterCard char={character} key={character.id}></CharacterCard>
          ))}
        </div>
        <div className={styles.buttons}>
          {!nextAndPrev.previous ? (
            !nextAndPrev.next ? (
              <></>
            ) : (
              <button className={styles.next} onClick={onButtonNextClick}></button>
            )
          ) : !nextAndPrev.next ? (
            <button className={styles.previous} onClick={onButtonPreviousClick}></button>
          ) : (
            <div className={styles.twoButtons}>
              <button className={styles.previous} onClick={onButtonPreviousClick}></button>
              <button className={styles.next} onClick={onButtonNextClick}></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
