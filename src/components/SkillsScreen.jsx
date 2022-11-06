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
      <Title>SKILLS</Title>
      <Swiper
        className="swiper-container"
        grabCursor={true}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          436: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {skillsImages.map((item) => {
          return (
            <SwiperSlide
              className="swiper-slide-container"
              width="363.333px"
              padding-left="10%"
            >
              <img src={item.imageSrc} alt={item.imageAlt}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}
