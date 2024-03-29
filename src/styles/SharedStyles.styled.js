import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => (props.primary ? "#222a30" : "#212529")};
  justify-content: ${(props) => props.justifyContent};
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? "column" : "row")};
  align-items: ${(props) => props.alignItem};
  min-height: 100vh;
  padding: 20px;
  flex-wrap: ${(props) => props.flexWrap};
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  padding-top: ${(props) => props.paddingTop};
`;
