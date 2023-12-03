import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router";
import styles from "./styles/Globals.module.scss";
styles;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
