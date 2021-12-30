import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";

export const MaterialUIButton = withStyles((theme) => ({
  root: {
    color: `${theme.colors.white}!important`,
    marginRight: "20px!important",
    minWidth: "150px!important",
    padding: "10px!important",
    opacity: 0.9,
    fontWeight: "600!important",
    backgroundColor: (props) =>
      props.warning
        ? `${theme.colors.red}!important`
        : `${theme.colors.grey}!important`,

    "&:hover": {
      opacity: 1,
      transition: "all 0.3s ease-in-out",
    },

    "& .icon_button": {
      marginRight: "10px",
      display: "flex",
    },
  },
}))(Button);
