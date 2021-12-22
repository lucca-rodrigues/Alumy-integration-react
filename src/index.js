import React from "react";
import ReactDOM from "react-dom";
// import App from "./app";
import { ReactionsComponent } from "./Components/Reactions";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ReactionsComponent
      wherever={document.getElementById("app").getAttribute("data-wherever")}
      onselect={document.getElementById("app").getAttribute("data-on-select")}
    />
  </React.StrictMode>,
  document.getElementById("app")
);
