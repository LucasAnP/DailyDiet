import { Header } from "@components/Header";
import {
  ClickIcon,
  Container,
  Meals,
  Percent,
  PercentSubtitle,
  PercentTitle,
  Subtitle,
} from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Percent activeOpacity={0.7}>
        <ClickIcon />
        <PercentTitle>90,86%</PercentTitle>
        <PercentSubtitle>of meals in the diet</PercentSubtitle>
      </Percent>
      <Meals>
        <Subtitle>Meals</Subtitle>
      </Meals>
    </Container>
  );
}
