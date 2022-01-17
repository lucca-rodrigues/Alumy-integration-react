import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.black,
    padding: "30px 0px 50px 50px",
    color: theme.colors.white,
    boxShadow: `9px -103px 83px 14px ${theme.colors.black}`,
    height: "100wh",
  },
}))(Grid);
