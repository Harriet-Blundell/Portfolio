import React from 'react';
import { Wrapper } from '../styles/SharedStyles.styled';
import { Container, ContentTitle, Content } from '../styles/SecondScreen.styled.js';

export default function SecondScreen() {
  return (
    <Wrapper secondary content={"center"}>
      <Container>
        <ContentTitle>Hello,</ContentTitle>
        <Content>
          I’m Harriet. I’m a Mid-Level Software Engineer and Tech Lead, based in North West, England, with over two years experience in web and mobile development applications.
        </Content>
      </Container>
    </Wrapper>
  )
}
