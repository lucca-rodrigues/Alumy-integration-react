import { Card } from "@mui/material";
import { withStyles } from "@mui/styles";

export const MaterialUICard = withStyles((theme) => ({
  root: {
    padding: (props) => props.padding ?? 30,
    margin: (props) => props.margin ?? 0,
    height: (props) => props.height ?? "100%",
    backgroundColor: (props) => props.bgColor ?? theme.colors.black,
    backgroundImage: (props) => props.bgImage && `url(${props.bgImage})`,
    backgroundSize: (props) => props.bgSize ?? "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("lg")]: {
      backgroundPosition: "center",
      backgroundSize: "cover!important",
      padding: "0px 30px!important",
    },
  },
}))(Card);
