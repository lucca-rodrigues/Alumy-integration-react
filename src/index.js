import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ClubContentProvider } from "./Contexts/useClubContent";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ClubContentProvider
      dataTest={document.getElementById("root").getAttribute("dataTest")}
      userName={document.getElementById("root").getAttribute("userName")}
    >
      <App />
    </ClubContentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
