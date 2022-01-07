import React from "react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CarouselBox, CarouselContainer, CarouselItem } from "./styles";

import { Card } from "../Card";
import { SwiperSlide } from "swiper/react";

const Carousel = ({ data, customPath, ...props }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <CarouselContainer>
        <CarouselBox
          modules={[Navigation]}
          // spaceBetween={0}
          slidesPerView={6}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          {...props}
        >
          <CarouselItem>
            {data?.map((item) => (
              <SwiperSlide key={item?.id}>
                <Card
                  bgSize="contain"
                  bgImage={`${baseUrl}${
                    item?.[customPath] ?? item?.backdrop_path
                  }`}
                >
                  <div className="slider-text">
                    <p>{item?.original_title}</p>
                    <strong>Movies</strong>
                  </div>
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
