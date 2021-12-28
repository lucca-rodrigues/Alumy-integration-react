import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  colors: {
    black: "#141414",
    white: "#F2F2F2",
    red: "#cc0811",
    grey: "#6D6D6E",
  },
  background: "#141414",
});

const lightTheme = createTheme({
  dark: {
    colors: {
      black: "#141414",
      white: "#F2F2F2",
      red: "#cc0811",
      grey: "#6D6D6E",
    },
    background: "#141414",
  },

  white: {
    background: "#F2F2F2",
  },
});

export { darkTheme, lightTheme };
