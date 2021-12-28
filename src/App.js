import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { ThemeProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./Styles/theme";

function App() {
  const [theme, setTheme] = useState(darkTheme);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export { App };
