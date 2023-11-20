"use strict";
const getData = async () => {
  const url = "https://rickandmortyapi.com/api/character";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getData;
