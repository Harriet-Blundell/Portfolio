import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => (props.primary ? "#27323E" : "#212529")};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;
