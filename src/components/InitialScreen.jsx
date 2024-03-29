import displayPicture from "../assets/displayPicture.png";
import {
  Container,
  DisplayPicture,
  Title,
  SubTitle,
  Mousey,
  Scroller,
  HeadingsContainer,
} from "../styles/InitialScreen.styled.js";
import { Wrapper } from "../styles/SharedStyles.styled.js";

export default function firstScreen() {
  return (
    <Wrapper primary justifyContent="center">
      <Container>
        <DisplayPicture src={displayPicture} />
        <HeadingsContainer>
          <Title>HARRIET BLUNDELL</Title>
          <SubTitle>SOFTWARE ENGINEER</SubTitle>
        </HeadingsContainer>
        <Mousey>
          <Scroller />
        </Mousey>
      </Container>
    </Wrapper>
  );
}
