import styled from 'styled-components';
import displayPicture from '../assets/displayPicture@1x.png';
import { Wrapper } from '../SharedStyles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #FFFFFF;
  margin: 0px;
  text-align: center;
  padding-top: 54px;
  font-family: 'Montserrat', sans-serif;
`;

const SubTitle = styled.h2`
  font-size: 1.25rem;
  color: #FFFFFF;
  text-align: center;
  padding-top: 64px;
  font-family: 'Montserrat', sans-serif;

`;

const DisplayPicture = styled.img`
  width: 100%;
  @media (min-width: 436px) {
    width: 322px;
  }
`;

const ScrollDowns = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width:34px;
  height: 55px;
`;

const Mousey = styled.div`
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
`;

const Scroller = styled.div`
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #fff;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(.15,.41,.69,.94);
  animation-iteration-count: infinite;

  @keyframes scroll {
    0% { opacity: 0; }
    10% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(15px); opacity: 0;}
  }
`;

export default function firstScreen() {
  return (
    <Wrapper primary content={"center"}>
      <Container>
        <DisplayPicture src={displayPicture} />
        <Title>
          HARRIET BLUNDELL
        </Title>
        <SubTitle>
          SOFTWARE ENGINEER
        </SubTitle>
        <ScrollDowns>
          <Mousey>
            <Scroller />
          </Mousey>
        </ScrollDowns>
      </Container>
    </Wrapper>
  )
}
