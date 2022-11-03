import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Wrapper } from "../styles/SharedStyles.styled";
import { Title } from "../styles/ThirdScreen.styled.js";
import { skillsImages } from "../utils";
import "swiper/css";

export default function ThirdScreen() {
  return (
    <Wrapper primary content={"center"}>
      <Swiper
        slidesPerView={3}
        grabCursor={true}
        centeredSlides={true}
      >
        {skillsImages.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.imageSrc} alt={item.imageAlt}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}

/* IMPLEMENT SWIPER */
