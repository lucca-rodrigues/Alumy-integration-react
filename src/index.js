import React from "react";
import ReactDOM from "react-dom";
// import App from "./app";
import { ReactionsComponent } from "./Components/Reactions";
import { Home } from "./Pages/Home";
import "./index.css";
import { ClubContentProvider } from "./Contexts/useClubContent";

const data = [
  {
    id: 1,
    name: "Like",
    icon: "👍",
    onselect: "console.log('Like')",
  },
  {
    id: 2,
    name: "Love",
    icon: "❤️",
    onselect: "console.log('Love')",
  },
];
ReactDOM.render(
  <React.StrictMode>
    {/* <ClubContentProvider> */}
    <Home
      data={data}
      // wherever={document.getElementById("app").getAttribute("data-wherever")}
      // onselect={document.getElementById("app").getAttribute("data-on-select")}
    />
    {/* </ClubContentProvider> */}
    {/* <Home /> */}
  </React.StrictMode>,
  document.getElementById("app")
);
