import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "./styles";
import { Logo } from "./Components/Logo";
import { Links } from "./Components/Links";

const Header = () => {
  const [headerClass, setHeaderClass] = useState("header");

  window.onscroll = () => {
    if (window.scrollY > 150) {
      console.log("addClassHeader");
      setHeaderClass("header-fixed");
    } else {
      setHeaderClass("header");
    }
  };

  // const header = document.getElementById("header");
  // const header = document.getElementsByClassName(".header")[0];
  // const validatons = (window.onscroll = function () {
  //   if (window.scrollY >= 1) {
  //     console.log("header-fixed deve ser adicionado!");
  //     return "header-fixed";
  //     // header.classList.add("header-fixed");
  //     // console.log("teste Scroll", window.scrollY);
  //   }
  //   // else {
  //   //   console.log("header-fixed removido!");
  //   //   header.classList.remove("header-fixed");
  //   // }
  // });

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
