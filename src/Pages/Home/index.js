import React from "react";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    name: "Like",
    icon: "👍",
    onselect: "console.log('Like')",
  },
  {
    id: 2,
    name: "Love",
    icon: "❤️",
    onselect: "console.log('Love')",
  },
];

const Home = () => {
  console.log("data", data);
  return (
    <>
      <h1>Teste Home</h1>
      {data &&
        data.map((item) => (
          <h1 key={item.id}>
            {item.name} - {item.icon}
          </h1>
        ))}

      <Link to="details">Ir para detalhes</Link>
    </>
  );
};

export { Home };
