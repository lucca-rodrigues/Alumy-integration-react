import React, { useRef, useState } from "react";
// import { FiChevronRight } from "react-icons/all";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import SwiperCore, { Navigation, Pagination } from "swiper";

// import "swiper/components/navigation/navigation.css";
// import "swiper/components/pagination/pagination.css";
import "swiper/css";
SwiperCore.use([Navigation, Pagination]);
const Carousel = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const navigationPrevRef = useRef(null);
  return (
    <>
      <div className="Row__slider--mask left" ref={navigationPrevRef}>
        <MdChevronLeft
          //   className="Row__slider--mask-icon left"
          size={20}
          color="red"
        />
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        controller={{ control: controlledSwiper }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide
        // key={result.id}
        // className={insertPositionClassName(i)}
        // onMouseOver={rightMouseOver}
        // onMouseOut={rightMouseOut}
        >
          {/* <RowPoster
          item={result}
          isLarge={isLarge}
          isFavourite={result.isFavourite}
          key={result.id}
        /> */}
          teste
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export { Carousel };
