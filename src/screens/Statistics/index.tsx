import { useEffect, useState } from "react";
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
import { calculeIfMealsInDiet } from "@utils/CalculeIfMealsInDiet";
import { MealStorageDTO } from "@storage/meal/mealStorageDTO";

type RouteParams = {
  percentage: number;
  meals: MealStorageDTO[];
};

export function Statistics() {
  const route = useRoute();
  const { percentage, meals } = route?.params as RouteParams;
  const [mealsValue, setMealsValue] = useState(0);
  const [mealsInsideDiet, setMealsInsideDiet] = useState(0);
  const [mealsOutsideDiet, setMealsOutsideDiet] = useState(0);
  const [sequenceOfPlatesInsideDiet, setSequenceOfPlatesInsideDiet] =
    useState(0);

  function calculateMeals() {
    const { insideDiet, outSideDiet, totalOfMeals, sequenceOfPlates } =
      calculeIfMealsInDiet(meals);

    setMealsValue(totalOfMeals);
    setMealsInsideDiet(insideDiet);
    setMealsOutsideDiet(outSideDiet);
    setSequenceOfPlatesInsideDiet(sequenceOfPlates);
  }

  useEffect(() => {
    if (meals.length > 0) calculateMeals();
  }, []);

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
            title={sequenceOfPlatesInsideDiet.toString()}
            subtitle="best sequence os plates inside of diet"
          />
        </Sequence>

        <Total>
          <Highlight
            title={mealsValue.toString()}
            subtitle="meals registered"
          />
        </Total>

        <Info>
          <Success>
            <Highlight
              title={mealsInsideDiet.toString()}
              subtitle="meals inside diet"
            />
          </Success>
          <Fail>
            <Highlight
              title={mealsOutsideDiet.toString()}
              subtitle="meals outside diet"
            />
          </Fail>
        </Info>
      </Content>
    </Container>
  );
}
