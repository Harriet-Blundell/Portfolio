import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Wrapper } from "../styles/SharedStyles.styled";
import { Title } from "../styles/ThirdScreen.styled.js";
import { skillsImages } from "../utils";
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
      <Swiper className="swiper-container" slidesPerView={3} grabCursor={true}>
        {skillsImages.map((item) => {
          return (
            <SwiperSlide width="363.333px" padding-left="10%">
              <img src={item.imageSrc} alt={item.imageAlt}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}
