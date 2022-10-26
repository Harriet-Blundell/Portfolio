import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => (props.primary ? "#222a30" : "#212529")};
  justify-content: ${props => props.content};
  padding: 20px;
  height: 100vh;
`;
