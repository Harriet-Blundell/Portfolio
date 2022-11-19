import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Wrapper, Title } from "../styles/SharedStyles.styled.js";
import {
  Box,
  Content,
  ProjectTitle,
  BottomText,
  ProjectImage,
} from "../styles/ProjectsScreen.styled.js";
import { projectsData } from "../utils";
import "../index.css";
import "swiper/css";

export default function ProjectsScreen() {
  return (
    <Wrapper alignItem="flex-start" justifyContent="center" flexWrap="wrap">
      <Title paddingTop="100px">PROJECTS</Title>
      <Swiper
        grabCursor={true}
        breakpoints={{
          436: {
            slidesPerView: 1,
          },
          1125: {
            slidesPerView: 2,
          },
        }}
      >
        {projectsData.map((project) => {
          return (
            <SwiperSlide className="swiper-slide-container">
              <Box>
                <ProjectImage src={project.imageSrc} />
                <ProjectTitle>{project.title}</ProjectTitle>
                <Content>{project.info}</Content>
                <BottomText>{project.moreInfo}</BottomText>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}
