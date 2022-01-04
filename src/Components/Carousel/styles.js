import { Button } from "@mui/material";
import { styled } from "@mui/styles";
import { Swiper, SwiperSlide } from "swiper/react";

const CarouselContainer = styled("div")({
  boxShadow: "9px -103px 83px 14px #141414",
  backgroundColor: "#141414",
  display: "block",
  /* position: relative */
  zIndex: 9999999,
});

const CarouselBox = styled(Swiper)({
  height: 150,
  boxShadow: "9px -103px 83px 14px #141414",
  backgroundColor: "#141414",
  display: "block",
  /* position: relative */
  zIndex: 9999999,

  "& .swiper-slide": {
    boxShadow: "9px -103px 83px 14px #141414",
    backgroundColor: "#141414",
    display: "block",
    margin: "15px!important",
    border: "solid red",
  },
  "& .swiper-slide-active": {
    border: "2px sold blue",
  },
  ".swiper-slide.swiper-slide-next": {
    border: "2px sold blue",
  },
});

// const CarouselItem = styled("div")({
//   "& .swiper-slide": {
//     height: 300,
//     boxShadow: "9px -103px 83px 14px #141414",
//     backgroundColor: "#141414",
//     display: "block",
//     margin: "15px!important",
//     border: "solid red",
//   },
//   "& .swiper-slide-active": {
//     border: "2px sold blue",
//   },
//   ".swiper-slide.swiper-slide-next": {
//     border: "2px sold blue",
//   },
// });

const CarouselItem = styled("div")({
  border: "solid red",
});
export { CarouselContainer, CarouselBox, CarouselItem };
