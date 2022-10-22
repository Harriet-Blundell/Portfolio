import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './SharedStyles';

const ContentTitle = styled.h1`
  font-size: 4rem;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
`;

const Content = styled.p`
  font-size: 1.5rem;
  color: #FFFFFF;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export default function SecondScreen() {
  return (
    <Wrapper secondary>
      <ContentTitle>Hello,</ContentTitle>
      <Content>
        I’m Harriet. I’m a Mid-Level Software Engineer and Tech Lead, based in North West, England, with over two years experience in web and mobile development applications.
      </Content>
    </Wrapper>
  )
}
