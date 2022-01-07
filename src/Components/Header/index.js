import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "./styles";
import { Logo } from "./Components/Logo";
import { Links } from "./Components/Links";

const Header = () => {
  const [headerClass, setHeaderClass] = useState("header");

  window.onscroll = () => {
    if (window.scrollY > 150) {
      setHeaderClass("header-fixed");
    } else {
      setHeaderClass("header");
    }
  };
  return (
    <Container
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={headerClass}
    >
      <Grid item xs={2}>
        <Logo />
      </Grid>
      <Grid item xs={4}>
        <Links />
      </Grid>
      <Grid item xs={6} style={{ textAlign: "right" }}>
        User menu
      </Grid>
    </Container>
  );
};

export { Header };
