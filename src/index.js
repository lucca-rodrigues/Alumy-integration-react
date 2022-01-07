import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ClubContentProvider } from "./Contexts/useClubContent";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ClubContentProvider>
      <App />
    </ClubContentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
