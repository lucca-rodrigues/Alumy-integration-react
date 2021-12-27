import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Components/Button";
import { Card } from "../../Components/Card";
import { useClubContent } from "../../Contexts/useClubContent";

const Home = () => {
  const { clubData } = useClubContent();
  console.log("data", clubData);
  return (
    <>
      <h1>Teste Home</h1>
      {clubData &&
        clubData.map((item) => (
          <h1 key={item.id}>
            {item.name} - {item.icon}
          </h1>
        ))}

      <Button title="Test Button" />
      <Card> Teste</Card>

      <Link to="details">Ir para detalhes</Link>
    </>
  );
};

export { Home };
