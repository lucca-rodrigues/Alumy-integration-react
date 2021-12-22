import React from "react";
import ReactDOM from "react-dom";
import { ReactionsComponent } from "./Components/Reactions";
import "./index.css";
import { ClubContentProvider } from "./Contexts/useClubContent";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <ClubContentProvider>
      {/* <div>
        <Home
          data={data}
          // wherever={document.getElementById("app").getAttribute("data-wherever")}
          // onselect={document.getElementById("app").getAttribute("data-on-select")}
        />
      </div> */}
      <App />
    </ClubContentProvider>
  </React.StrictMode>,
  document.getElementById("app")
);
