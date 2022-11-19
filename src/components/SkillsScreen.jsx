import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Wrapper, Title } from "../styles/SharedStyles.styled";
import { skillsImages } from "../utils";
import "../index.css";
import "swiper/css";

export default function ThirdScreen() {
  return (
    <Wrapper
      primary
      alignItem="flex-start"
      justifyContent="center"
      flexWrap="wrap"
    >
      <Title paddingTop="100px">SKILLS</Title>
      <Swiper
        grabCursor={true}
        breakpoints={{
          436: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {skillsImages.map((item) => {
          return (
            <SwiperSlide className="swiper-slide-container" width="363.333px">
              <img src={item.imageSrc} alt={item.imageAlt}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}
