import { Box, Typography } from "@mui/material";
import React from "react";
import { Banner } from "../../Components/Banner";
import { Carousel } from "../../Components/Carousel";
import { CustomBg } from "../../Components/CustomBg";
import { useClubContent } from "../../Contexts/useClubContent";
import { mockRelateds, mockTrending, mockBigCarousel } from "../../MocksApi";

const Home = () => {
  const { clubData } = useClubContent();
  console.log("data", clubData);
  return (
    <>
      <Banner />
      <CustomBg>
        <Box style={{ backgroundColor: "#141414" }}>
          <Box style={{ marginBottom: 100 }}>
            <Typography color="#fff">Top Relateds</Typography>
            <Carousel data={mockRelateds} />
          </Box>
          <Box style={{ marginBottom: 100 }}>
            <Typography color="#fff">Top Relateds</Typography>
            <Carousel data={mockTrending} />
          </Box>
          <Box style={{ marginBottom: 100 }}>
            <Typography color="#fff">Top Relateds</Typography>
            <Carousel
              height={320}
              customPath={"poster_path"}
              data={mockBigCarousel}
            />
          </Box>
          <Box style={{ marginBottom: 100 }}>
            <Typography color="#fff">Top Relateds</Typography>
            <Carousel data={mockTrending} />
          </Box>
        </Box>
      </CustomBg>
      {/* {clubData &&
        clubData.map((item) => (
          <h1 key={item.id}>
            {item.name} - {item.icon}
          </h1>
        ))} */}

      {/* <Button title="Test Button" />
      <Card bgImage="https://image.tmdb.org/t/p/original//5hNcsnMkwU2LknLoru73c76el3z.jpg">
        Teste
      </Card>
      <Card>Teste Card 2</Card>

      <Link to="details">Ir para detalhes</Link> */}
    </>
  );
};

export { Home };
