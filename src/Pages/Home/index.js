import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

import { Carousel } from "../../Components/Carousel";
import { CustomBg } from "../../Components/CustomBg";

import { useClubContent } from "../../Contexts/useClubContent";
import { Loading } from "../../Components/Loading";
import { BannerCarousel } from "./Components/BannerCarousel";
import { setTimeLoader } from "../../Utils/setTimeLoader";

const Home = () => {
  const {
    bannersData,
    relatedsData,
    trendingData,
    customSizeCarouselData,
    loading,
    setLoading,
  } = useClubContent();

  useEffect(() => {
    setTimeLoader(setLoading);
  }, [setLoading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <BannerCarousel data={bannersData} />
      <CustomBg>
        <Box style={{ backgroundColor: "#141414" }}>
          <Box style={{ marginBottom: 50 }}>
            <Typography color="#fff" variant="p" fontWeight={600}>
              Top Relateds
            </Typography>
            <Carousel data={relatedsData} />
          </Box>
          <Box style={{ marginBottom: 50 }}>
            <Typography color="#fff" variant="p" fontWeight={600}>
              Trending Now
            </Typography>
            <Carousel data={trendingData} />
          </Box>
          <Box style={{ marginBottom: 50 }}>
            <Typography color="#fff" variant="p" fontWeight={600}>
              Originals
            </Typography>
            <Carousel
              height={320}
              customPath={"poster_path"}
              data={customSizeCarouselData}
            />
          </Box>
          <Box style={{ marginBottom: 50 }}>
            <Typography color="#fff" variant="p" fontWeight={600}>
              Top Relateds
            </Typography>
            <Carousel data={trendingData} />
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
