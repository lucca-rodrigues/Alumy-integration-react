import { Card } from "@mui/material";
import { withStyles } from "@mui/styles";

export const MaterialUICard = withStyles(() => ({
  root: {
    padding: 30,
    margin: (props) => props.margin ?? 0,
    height: (props) => props.height ?? "100%",
    backgroundColor: (props) => props.bgColor ?? "#fff",
    backgroundImage: (props) => props.bgImage && `url(${props.bgImage})`,
    backgroundSize: "cover",
  },
}))(Card);
