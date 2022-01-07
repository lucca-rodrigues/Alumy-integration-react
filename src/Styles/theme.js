import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  colors: {
    black: "#141414",
    white: "#F2F2F2",
    red: "#cc0811",
    grey: "#6D6D6E",
  },
  background: "#141414",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const lightTheme = createTheme({
  colors: {
    black: "#141414",
    white: "#F2F2F2",
    red: "#cc0811",
    grey: "#6D6D6E",
  },
  background: "#141414",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export { darkTheme, lightTheme };
