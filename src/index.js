import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ClubContentProvider } from "./Contexts/useClubContent";
import { App } from "./App";

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
  document.getElementById("root")
);
