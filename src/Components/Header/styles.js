import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.black,
    padding: "10px 30px",
    color: theme.colors.white,
  },
}))(Grid);
