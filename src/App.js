import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { ThemeProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./Styles/theme";

function App() {
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
