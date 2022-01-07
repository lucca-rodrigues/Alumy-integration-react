import { Box } from "@mui/material";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const MobileMenu = ({ isOpenMenu = false, setIsOpenMenu }) => {
  const closeMenu = useCallback(() => {
    setIsOpenMenu(false);
  }, [setIsOpenMenu]);
  return (
    <>
      {isOpenMenu && (
        <Container>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: 600,
            }}
            onClick={closeMenu}
          >
            <Link to="/">Home</Link>
            <Link to="/">TV Series</Link>
            <Link to="/">Movies</Link>
            <Link to="/">New e Popular</Link>
            <Link to="/">My List</Link>
          </Box>
        </Container>
      )}
    </>
  );
};

export { MobileMenu };
