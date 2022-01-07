import React from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Container } from "./styles";
import { MdPlayArrow, MdInfoOutline } from "react-icons/md";
import { Grid, Typography } from "@mui/material";

const Banner = ({ data, theme }) => {
  const { title, description, bgImage } = data;
  return (
    <>
      <Container style={{ display: "flex" }}>
        <Card bgImage={bgImage} bgColor={theme?.colors?.black} padding="60px">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className="banner-container"
          >
            <Grid item lg={6} md={12} sm={12}>
              <Typography
                component="h1"
                variant="h2"
                color="#fff"
                style={{ fontWeight: 600 }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} mt={5}>
              <Button
                mt={5}
                title="Play"
                warning
                icon={<MdPlayArrow size={20} />}
              />
              <Button
                mt={5}
                title="More info"
                icon={<MdInfoOutline size={20} />}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} mt={2}>
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
