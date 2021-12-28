import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

export const Container = withStyles((theme) => ({
  root: {
    backgroundColor: theme.dark.colors.black,
    padding: "30px 20px",
    color: theme.dark.colors.white,
  },
}))(Grid);
