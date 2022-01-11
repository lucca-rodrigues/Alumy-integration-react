import { styled } from "@mui/styles";
import { Swiper } from "swiper/react";

const CarouselContainer = styled("div")({
  display: "block",
  zIndex: 9999999,
  margin: "0 auto",
  backgroundColor: (theme) => theme?.colors?.black,

  "& .swiper-button-next, .swiper-button-prev": {
    color: "#fff!important",
  },

  "& .swiper-scrollbar": {
    display: "none!important",
  },
});

const CarouselBox = styled(Swiper)({
  height: (props) => props.height ?? 125,

  "& .swiper-slide": {
    height: (props) => props.height ?? "100px",

    backgroundColor: (theme) => theme?.colors?.black,
    display: "block",
    margin: "5px!important",
    opacity: 1,
    transition: "all 0.4s ease",

    "&:hover": {
      transform: "scale(1.1)",
      transition: "all 0.4s ease",
      height: (props) => props.height ?? 200,
      zIndex: 1,
      cursor: "pointer",

      "& .slider-text": {
        display: "block",
      },
    },

    "&:not(:hover)": {
      opacity: 1,
      zIndex: 0,
    },

    "& .slider-text": {
      color: "#fff",
      width: "100%",
      height: (props) => props.height ?? "100%",
      fontSize: "13px",
      fontWeight: "bold",
      textAlign: "left",
      display: "none",
    },
  },
});

const CarouselItem = styled("div")({});
export { CarouselContainer, CarouselBox, CarouselItem };
