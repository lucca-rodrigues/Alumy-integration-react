import React from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Container } from "./styles";
import { MdPlayArrow, MdInfoOutline } from "react-icons/md";
import { Grid, Typography } from "@mui/material";

const Banner = ({ data }) => {
  const { title, description, bgImage } = data;
  return (
    <>
      <Container style={{ display: "flex" }}>
        <Card bgImage={bgImage} bgColor="#141414" padding="60px">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className="banner-container"
          >
            <Grid item lg={12}>
              <Typography
                component="h1"
                variant="h2"
                color="#fff"
                style={{ fontWeight: 600 }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item lg={12} mt={5}>
              <Button title="Play" warning icon={<MdPlayArrow size={20} />} />
              <Button title="More info" icon={<MdInfoOutline size={20} />} />
            </Grid>
            <Grid item lg={4} mt={2}>
              <Typography
                color="#fff"
                style={{ fontWeight: 500, fontSize: 19 }}
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export { Banner };
