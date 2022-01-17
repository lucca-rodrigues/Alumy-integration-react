import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { ThemeProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "./Styles/theme";
import { Header } from "./Components/Header";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  const [theme] = useState(darkTheme);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export { App };
