import { Box } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles((theme) => ({
  root: {
    // backgroundColor: theme.colors.black,
    backgroundColor: "#141414",
    padding: "10px 50px",
    color: theme.colors.white,
    boxShadow: "9px -103px 83px 14px #141414",
    height: "100wh",

    // display: "block",
    /* position: relative */
    // zIndex: 9999999,
  },
}))(Box);
