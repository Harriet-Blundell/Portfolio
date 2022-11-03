import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => (props.primary ? "#222a30" : "#212529")};
  justify-content: ${(props) => props.content};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;
