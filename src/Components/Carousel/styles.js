import { styled } from "@mui/styles";
import { Swiper } from "swiper/react";

const CarouselContainer = styled("div")({
  boxShadow: "9px -103px 83px 14px #141414",
  backgroundColor: "#141414",
  display: "block",
  /* position: relative */
  zIndex: 9999999,
  // maxWidth: "95%",
  margin: "0 auto",
});

const CarouselBox = styled(Swiper)({
  height: 130,
  boxShadow: "9px -103px 83px 14px #141414",
  backgroundColor: "#141414",
  display: "block",
  /* position: relative */
  zIndex: 9999999,

  "& .swiper-slide": {
    height: "100px",

    boxShadow: "9px -103px 83px 14px #141414",
    backgroundColor: "#141414",
    display: "block",
    margin: "5px!important",
    opacity: 1,
    transition: "all 0.4s ease",

    "&:hover": {
      transform: "scale(1.1)",
      transition: "all 0.4s ease",
      height: 200,
      zIndex: 1,

      "& .slider-text": {
        display: "block",
        // transition: "all 0.4s ease",
      },
    },

    "&:not(:hover)": {
      opacity: 1,
      zIndex: 0,
    },

    "& .slider-text": {
      color: "#fff",
      width: "100%",
      height: "100%",
      fontSize: "15px",
      fontWeight: "bold",
      textAlign: "left",
      display: "none",
    },
  },
});

const CarouselItem = styled("div")({
  border: "solid red",
});
export { CarouselContainer, CarouselBox, CarouselItem };
