import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.black,
    margin: 0,
    padding: 0,
    color: theme.colors.white,
    height: "100vh",
    width: "100vw",
    minHeight: "600px",
    zIndex: 9999999999,

    "& a": {
      margin: "30px 0",
    },
  },
}))(Grid);
