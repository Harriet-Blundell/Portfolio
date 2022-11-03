import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Wrapper } from "../styles/SharedStyles.styled";
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
  text-align: center;
`;

export default function ThirdScreen() {
  const skillsImages = [
    {
      imageSrc: javaScriptLogo,
      imageAlt: 'JavaScript Logo'
    },
    {
      imageSrc: nextJsLogo,
      imageAlt: 'NextJS Logo'
    },
    {
      imageSrc: nodeLogo,
      imageAlt: 'Node Logo'
    },
    {
      imageSrc: html5Logo,
      imageAlt: 'HTML 5 Logo'
    },
    {
      imageSrc: cssLogo,
      imageAlt: 'CSS Logo'
    },
    {
      imageSrc: sassLogo,
      imageAlt: 'SASS Logo'
    },
    {
      imageSrc: expressLogo,
      imageAlt: 'Express Logo'
    },
    {
      imageSrc: contentfulLogo,
      imageAlt: 'Contentful Logo'
    },
    {
      imageSrc: reactLogo,
      imageAlt: 'React Logo'
    },
    {
      imageSrc: handlebarsLogo,
      imageAlt: 'Handlebars Logo'
    },
    {
      imageSrc: gatsbyLogo,
      imageAlt: 'Gatsby Logo'
    }
  ];

  return (
    <Wrapper primary content={"center"}>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true, dynamicBullets: true }}
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
