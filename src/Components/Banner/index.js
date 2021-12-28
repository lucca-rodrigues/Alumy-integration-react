import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Container } from "./styles";

const Banner = ({ title, url, description, bgImage }) => {
  return (
    <>
      <Container style={{ display: "flex" }}>
        <Card
          bgImage="https://image.tmdb.org/t/p/original//bfXTYu3oLtEUL0jAxgx7Jy56yHl.jpg"
          bgColor="#141414"
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className="banner-container"
          >
            <Grid item lg={12}>
              <Typography variant="h2" color="#fff" style={{ fontWeight: 600 }}>
                Hellbound
              </Typography>
            </Grid>
            <Grid item lg={12} mt={5}>
              <Button title="Play" />
              <Button title="More info" />
            </Grid>
            <Grid item lg={4}>
              <Typography color="#fff">
                Unearthly beings deliver bloody condemnations, sending
                individuals to hell and giving rise to a religious group founded
                on the idea of divine justice.
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export { Banner };
