import styled from 'styled-components';
import displayPicture from '../assets/displayPicture@1x.png'

const Wrapper = styled.div`
  background-color: #27323E;
  height: 1027px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #FFFFFF;
  margin: 0px;
  text-align: center;
  padding-top: 54px;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #FFFFFF;
  text-align: center;
  padding-top: 64px;
`;

const DisplayPicture = styled.img`
  width: 100%;
  @media (min-width: 436px) {
    width: 322px;
  }
`;

export default function firstScreen() {
  return (
    <Wrapper>
      <DisplayPicture src={displayPicture} />
      <Title>
        HARRIET BLUNDELL
      </Title>
      <SubTitle>
        SOFTWARE ENGINEER
      </SubTitle>
    </Wrapper>
  )
}
