import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const ProjectTitle = styled.h1`
  font-size: 1.5rem;
`;

export const Content = styled.p`
  font-size: 0.9rem;
`;

export const BottomText = styled.p`
  font-size: 0.9rem;
`;

export const ProjectImage = styled.img``;
