import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";

// Use your config values here.


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);