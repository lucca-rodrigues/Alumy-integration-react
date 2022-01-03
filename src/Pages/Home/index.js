import React from "react";
import { Link } from "react-router-dom";
// import { Banner } from "../../Components/Banner";
import { Button } from "../../Components/Button";
import { Card } from "../../Components/Card";
import { Carousel } from "../../Components/Carousel";
import { useClubContent } from "../../Contexts/useClubContent";

const Home = () => {
  const { clubData } = useClubContent();
  console.log("data", clubData);
  return (
    <>
      {/* <Banner /> */}
      <Carousel />
      {clubData &&
        clubData.map((item) => (
          <h1 key={item.id}>
            {item.name} - {item.icon}
          </h1>
        ))}

      <Button title="Test Button" />
      <Card bgImage="https://image.tmdb.org/t/p/original//5hNcsnMkwU2LknLoru73c76el3z.jpg">
        Teste
      </Card>
      <Card>Teste Card 2</Card>

      <Link to="details">Ir para detalhes</Link>
    </>
  );
};

export { Home };
