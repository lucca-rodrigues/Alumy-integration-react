import { Card } from "@mui/material";
import { withStyles } from "@mui/styles";

export const MaterialUICard = withStyles(() => ({
  root: {
    padding: 30,
    margin: "10px 0px",
    backgroundColor: (props) => props.bgColor ?? "#fff",
    backgroundImage: (props) => props.bgImage && `url(${props.bgImage})`,
    backgroundSize: (props) => props.bgImage && props.bgSize && "cover",
  },
}))(Card);
