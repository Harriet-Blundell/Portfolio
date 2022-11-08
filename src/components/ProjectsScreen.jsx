import React from "react";
import projectImg from "../assets/learn-coding-online-for-free 1.png";
import { Wrapper, Title } from "../styles/SharedStyles.styled.js";
import {
  Container,
  Box,
  InnerBox,
  Content,
  ProjectTitle,
  BottomText,
  ProjectImage
} from "../styles/ProjectsScreen.styled.js";

export default function ProjectsScreen() {
  return (
    <Wrapper
      justifyContent="space-evenly"
      alignItem="center"
      flexDirection="column"
    >
      <Title>PROJECTS</Title>
      <Container>
        <Box>
          <ProjectImage src={projectImg} />
          <InnerBox>
            <ProjectTitle>Box 1</ProjectTitle>
            <Content>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Content>
            <BottomText>Read more</BottomText>
          </InnerBox>
        </Box>
        <Box>
          <ProjectImage src={projectImg} />
          <ProjectTitle>Box 2</ProjectTitle>
          <Content>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Content>
          <BottomText>Read more</BottomText>
        </Box>
      </Container>
    </Wrapper>
  );
}

// Separate out box component to make the code cleaner?
