import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.black,
    margin: 0,
    padding: 0,
    color: theme.colors.white,
    height: "80vh",
    minHeight: "600px",

    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      minHeight: "800px",
      "& .banner-button-actions": {
        marginTop: 100,
        order: 1,
        display: "flex",
      },
      "& .banner-description": {
        order: 0,
      },
    },

    [theme.breakpoints.down(370)]: {
      "& .banner-button-actions": {
        display: "block",

        "& button": {
          marginTop: "20px",
        },
      },
    },
  },
}))(Grid);
