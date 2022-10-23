import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Wrapper } from "../SharedStyles";
import styled from "styled-components";
import {
  javaScriptLogo,
  nextJsLogo,
  nodeLogo,
  html5Logo,
  cssLogo,
  sassLogo,
  expressLogo,
  contentfulLogo,
  reactLogo,
  handlebarsLogo,
  gatsbyLogo,
} from "../images.js";
import "swiper/css";

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
`;


export default function ThirdScreen() {
  const skillsImages = [
    javaScriptLogo,
    nextJsLogo,
    nodeLogo,
    html5Logo,
    cssLogo,
    sassLogo,
    expressLogo,
    contentfulLogo,
    reactLogo,
    handlebarsLogo,
    gatsbyLogo,
  ];

  return (
    <Wrapper primary content={"flex-start"}>
      <Title>SKILLS</Title>
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {skillsImages.map((img, i) => {
          return (
            <SwiperSlide>
              <img src={img} alt={img}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}

/* IMPLEMENT SWIPER */
