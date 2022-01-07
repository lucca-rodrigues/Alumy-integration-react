import { React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Banner } from "../../../../Components/Banner";
SwiperCore.use([Autoplay]);

const BannerSlider = ({ data }) => {
  return (
    <Swiper
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
    >
      {data?.map((item) => (
        <SwiperSlide key={item?.id}>
          <Banner data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { BannerSlider };
