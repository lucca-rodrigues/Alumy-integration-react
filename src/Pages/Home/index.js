import React from "react";
import { Link } from "react-router-dom";
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

      <Link to="details">Ir para detalhes</Link>
    </>
  );
};

export { Home };
