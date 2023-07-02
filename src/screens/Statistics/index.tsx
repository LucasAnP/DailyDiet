import { Header } from "@components/Header";
import {
  Container,
  Content,
  Fail,
  HeaderContainer,
  Info,
  Sequence,
  Success,
  Title,
  Total,
} from "./styles";
import { Highlight } from "@components/Highlight";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  percentage: number;
};

export function Statistics() {
  const route = useRoute();
  const { percentage } = route?.params as RouteParams;

  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton />
        <Highlight title={`${percentage}%`} subtitle="of meals in the diet" />
      </HeaderContainer>
      <Content>
        <Title>General statistics</Title>
        <Sequence>
          <Highlight
            title="22"
            subtitle="best sequence os plates inside of diet"
          />
        </Sequence>

        <Total>
          <Highlight title="22" subtitle="meals registered" />
        </Total>

        <Info>
          <Success>
            <Highlight title="99" subtitle="meals inside diet" />
          </Success>
          <Fail>
            <Highlight title="99" subtitle="meals outside diet" />
          </Fail>
        </Info>
      </Content>
    </Container>
  );
}
