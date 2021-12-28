import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontWeight: 600,
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/">TV Series</Link>
      <Link to="/">Movies</Link>
      <Link to="/">New e Popular</Link>
      <Link to="/">My List</Link>
    </Box>
  );
};

export { Links };
