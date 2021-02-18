import React from "react";
import Reactdom from "react-dom";
import "./index.css";
import App from "./app";

Reactdom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
