import React, { useCallback, useEffect, useState } from "react";
import { Grid, Hidden } from "@mui/material";
import { Container } from "./styles";
import { Logo } from "./Components/Logo";
import { Links } from "./Components/Links";
import { MobileMenu } from "./Components/MobileMenu";
import { MobileMenuIcons } from "./Components/MobileMenuIcons";
import { useClubContent } from "../../Contexts/useClubContent";

const Header = () => {
  const [headerClass, setHeaderClass] = useState("header");
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { loggedUserName } = useClubContent();

  console.log("loggedUserName:", loggedUserName);

  window.onscroll = () => {
    if (window.scrollY > 150) {
      setHeaderClass("header-fixed");
    } else {
      setHeaderClass("header");
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setHeaderClass("header-mobile");
    }
    if (!window.innerWidth > 768) {
      setHeaderClass("header-fixed");
    }
  }, []);

  const menuIcon = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu]);

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
      <Hidden lgDown>
        <Grid item xs={4}>
          <Links />
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          {loggedUserName ?? "User Menu"}
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Grid xs={8} />
        <Grid
          item
          xs={2}
          textAlign="right"
          className="mobile-menu-icons"
          onClick={menuIcon}
        >
          <MobileMenuIcons isOpenMenu={isOpenMenu} />
        </Grid>
      </Hidden>
      <MobileMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </Container>
  );
};

export { Header };
