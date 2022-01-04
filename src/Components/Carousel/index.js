import React from "react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CarouselBox, CarouselContainer, CarouselItem } from "./styles";
import { cardsList } from "./mock";
import { Card } from "../Card";
import { SwiperSlide } from "swiper/react";

const Carousel = () => {
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
        >
          <CarouselItem>
            {cardsList.map((item) => (
              <SwiperSlide key={item.id}>
                <Card
                  bgSize="contain"
                  bgImage={`${baseUrl}${item.backdrop_path}`}
                >
                  Teste
                </Card>
              </SwiperSlide>
            ))}
          </CarouselItem>
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide> */}
        </CarouselBox>
      </CarouselContainer>
    </>
  );
};

export { Carousel };
