import React from "react";
import { Grid } from "@mui/material";
import { Container } from "./styles";
const Header = () => {
  return (
    <Container container>
      <Grid item xs={2}>
        Teste
      </Grid>
      <Grid item xs={8}>
        Header Menus
      </Grid>
      <Grid item xs={2}>
        User menu
      </Grid>
    </Container>
  );
};

export { Header };
