import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <Typography style={{ color: "#cc0811", fontSize: 40, fontWeight: 600 }}>
        Alumy
      </Typography>
    </Link>
  );
};

export { Logo };
