import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #212529;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const ContentTitle = styled.h1`
  font-size: 4rem;
  color: #FFFFFF;
`;

const Content = styled.p`
  font-size: 2.5rem;
  color: #FFFFFF;
  text-align: center;
`;

export default function SecondScreen() {
  return (
    <Wrapper>
      <ContentTitle>Hello,</ContentTitle>
      <Content>
        I’m Harriet. I’m a Mid-Level Software Engineer and Tech Lead, based in North West, England, with over two years experience in web and mobile development applications.
      </Content>
    </Wrapper>
  )
}
