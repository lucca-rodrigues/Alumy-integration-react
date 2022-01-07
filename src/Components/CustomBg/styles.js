import { Box } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles((theme) => ({
  root: {
    // backgroundColor: theme.colors.black,
    backgroundColor: "#141414",
    padding: "10px 40px",
    color: theme.colors.white,
    boxShadow: "9px -103px 83px 14px #141414",
    display: "block",
    /* position: relative */
    zIndex: 9999999,
  },
}))(Box);
