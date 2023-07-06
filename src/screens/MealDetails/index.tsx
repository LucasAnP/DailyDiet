import { Header } from "@components/Header";
import {
  CircleIcon,
  Container,
  Content,
  Description,
  HeaderContainer,
  InsideContainer,
  InsideDietTitle,
  TimeTitle,
  Title,
} from "./styles";
import { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import { useRoute } from "@react-navigation/native";
import { Button } from "@components/Button";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";

type Props = {
  date: string;
  data: {
    name: string;
    description: string;
    time: string;
    insideDiet: boolean;
  }[];
};

export function MealDetails() {
  const route = useRoute();
  const theme = useTheme();
  const params = route.params;

  return (
    <Container>
      <StatusBar backgroundColor={theme.COLORS.GREEN_LIGHT} />
      <HeaderContainer>
        <Header showBackButton title="Meal" />
      </HeaderContainer>
      <Content>
        <Title>{params?.data?.name}</Title>
        <Description>{params?.data?.description}</Description>
        <TimeTitle>Date and Hour</TimeTitle>
        <Description>{`${params?.date} at ${params?.data?.time}`}</Description>
        <InsideContainer>
          <CircleIcon insideDiet={params?.data?.insideDiet} />
          <InsideDietTitle>
            {params?.data?.insideDiet ? "Inside diet" : "Outside diet"}
          </InsideDietTitle>
        </InsideContainer>
      </Content>
      <Button
        title="Edit meal"
        style={{ marginHorizontal: 24, marginBottom: 9 }}
      />
      <Button
        title="Delete meal"
        style={{
          marginHorizontal: 24,
          marginBottom: 32,
        }}
      />
    </Container>
  );
}
