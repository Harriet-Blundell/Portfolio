import React from 'react';
import { Wrapper } from '../SharedStyles';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5rem;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
`;

export default function ThirdScreen() {
  return (
    <Wrapper primary content={"flex-start"}>
      <Title>
        SKILLS
      </Title>
    </Wrapper>
  )
}

/* IMPLEMENT SWIPER */
