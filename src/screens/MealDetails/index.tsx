import { Alert } from "react-native";
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
import { useRoute } from "@react-navigation/native";
import { Button } from "@components/Button";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { mealDelete } from "@storage/meal/mealDelete";

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

  async function deleteMeal() {
    await mealDelete({
      meal: {
        date: params.date,
        data: params.data,
      },
    });
  }

  function handleDeleteMeal() {
    Alert.alert(
      "Deletar",
      "Tem certeza que deseja deletar esse meat?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => deleteMeal(),
        },
      ],
      { cancelable: false }
    );
  }

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
        addIcon="EDIT"
        style={{ marginHorizontal: 24, marginBottom: 9 }}
      />
      <Button
        title="Delete meal"
        filled={false}
        addIcon="DELETE"
        onPress={handleDeleteMeal}
        style={{
          marginHorizontal: 24,
          marginBottom: 32,
        }}
      />
    </Container>
  );
}
