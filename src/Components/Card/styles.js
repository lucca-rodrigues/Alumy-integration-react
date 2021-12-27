import { Card } from "@mui/material";
import { withStyles } from "@mui/styles";

export const MaterialUICard = withStyles(() => ({
  root: {
    padding: 30,
    margin: "10px 0px",
    // backgroundColor: "#000!important",
  },
}))(Card);
