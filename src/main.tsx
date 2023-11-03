import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./styles/Globals.module.scss";
import Router from "./components/Router";
styles;
/*
// Define the book title and author
const book_title = "The Lord of the Rings";
const author = "J.R.R. Tolkien";
const language = "eng";
const limit = "10";
//openlibrary.org/search.json?title=the+lord+of+the+rings&author=j.+r.+r.+tolkien&language=eng
// Create a search query for the book
const search_query = `title=${book_title.replace(" ", "+").trim()}&author=${author
  .replace(" ", "+")
  .trim()}&language=${language}&limit=${limit}`;

// Search for the book using the Open Library API
const search_url = `https://openlibrary.org/search.json?${search_query}`;
await fetch(search_url).then(async (response) => {
  const xy = await response.json();
  console.log(xy);
});
*/

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
