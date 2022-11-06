import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #ffffff;
  margin: 0px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

export const SubTitle = styled.h2`
  font-size: 1.25rem;
  color: #ffffff;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

export const DisplayPicture = styled.img`
  width: 65%;
  border-radius: 100%;
  border: 5px solid #ffffff;
  @media (min-width: 436px) {
    width: 322px;
  }
`;

export const Mousey = styled.div`
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
  // margin-top: 20%;
`;

export const Scroller = styled.div`
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #fff;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;

  @keyframes scroll {
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
`;

export const HeadingsContainer = styled.div`
  display: block;
`;
