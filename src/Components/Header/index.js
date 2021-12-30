import React from "react";
import { Grid } from "@mui/material";
import { Container } from "./styles";
import { Logo } from "./Components/Logo";
import { Links } from "./Components/Links";

const Header = () => {
  return (
    <Container
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
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
