import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles((theme) => ({
  root: {
    padding: "10px 30px",
    color: theme.colors.white,
    position: "fixed",
    zIndex: 9999999,

    [theme.breakpoints.down("lg")]: {
      background: "#141414",
    },
  },
}))(Grid);
