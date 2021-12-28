import React from "react";
import { Card } from "../Card";
import { Container } from "./styles";

const Banner = ({ title, url, description, bgImage }) => {
  return (
    <>
      <Container>
        <Card
          bgImage="https://image.tmdb.org/t/p/original//bfXTYu3oLtEUL0jAxgx7Jy56yHl.jpg"
          bgColor="#141414"
        >
          Banner Principal
        </Card>
      </Container>
    </>
  );
};

export { Banner };
