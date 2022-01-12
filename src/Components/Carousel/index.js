import React from "react";
import { Navigation } from "swiper";

import { CarouselBox, CarouselContainer, CarouselItem } from "./styles";

import { Card } from "../Card";
import { SwiperSlide } from "swiper/react";
import { Typography } from "@mui/material";

const Carousel = ({ data, customPath, ...props }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <CarouselContainer>
        <CarouselBox
          modules={[Navigation]}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: false }}
          onSwiper={(swiper) => {}}
          onSlideChange={() => {}}
          breakpoints={{
            300: {
              width: 300,
              slidesPerView: 1,
            },
            600: {
              width: 600,
              slidesPerView: 2,
            },
            900: {
              width: 900,
              slidesPerView: 3,
            },
            1200: {
              width: 1200,
              slidesPerView: 6,
            },
          }}
          {...props}
        >
          <CarouselItem>
            {data?.map((item) => (
              <SwiperSlide key={item?.id}>
                <Card
                  borderRadius={20}
                  bgSize="contain"
                  bgImage={`${baseUrl}${
                    item?.[customPath] ?? item?.backdrop_path
                  }`}
                >
                  {/* <div className="slider-text">
                    <p>{item?.original_title ?? item?.name}</p>

                    <Typography style={{ fontSize: 12 }}>Categoria</Typography>
                  </div> */}
                </Card>
              </SwiperSlide>
            ))}
          </CarouselItem>
        </CarouselBox>
      </CarouselContainer>
    </>
  );
};

export { Carousel };
