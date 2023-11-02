import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./styles/Globals.module.scss";
import Router from "./components/Router";
styles;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
