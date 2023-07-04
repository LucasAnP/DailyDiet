import { Header } from "@components/Header";
import {
  ClickIcon,
  Container,
  Meals,
  Percent,
  SectionHeaderTitle,
  Subtitle,
} from "./styles";
import { useState, useCallback } from "react";
import { SectionList } from "react-native";
import { Button } from "@components/Button";
import { Section } from "@components/Section";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Route } from "@routes/enums";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Highlight } from "@components/Highlight";
import { calculeIfMealsInDiet } from "@utils/CalculeIfMealsInDiet";
import { MealStorageDTO } from "@storage/meal/mealStorageDTO";

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [mealsPercentage, setMealsPercentage] = useState(0);
  const [dailyMeals, setDailyMeals] = useState<MealStorageDTO[]>([
    {
      date: "13/02/25",
      data: [
        { title: "Primeira refeicao", insideDiet: true, time: "18:00" },
        { title: "Segunda refeicao", insideDiet: false, time: "20:00" },
      ],
    },

    {
      date: "02/07/23",
      data: [{ title: "Primeira refeicao", insideDiet: true, time: "20:00" }],
    },
  ]);

  const handleGoStatisticsScreen = () => {
    navigation.navigate(Route.STATISTICS, {
      percentage: mealsPercentage,
      meals: dailyMeals,
      negative: mealsPercentage < 50,
    });
  };

  const handleGoNewMeal = () => {
    navigation.navigate(Route.NEWMEAL);
  };

  const calculePercent = () => {
    const { percentDiet } = calculeIfMealsInDiet(dailyMeals);
    setMealsPercentage(percentDiet);
  };

  useFocusEffect(
    useCallback(() => {
      calculePercent();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Percent
        activeOpacity={0.7}
        onPress={handleGoStatisticsScreen}
        negative={mealsPercentage < 50}
      >
        <ClickIcon />
        <Highlight
          title={`${mealsPercentage}%`}
          subtitle="of meals in the diet"
        />
      </Percent>
      <Meals>
        <Subtitle>Meals</Subtitle>
        <Button title="New meal" onPress={handleGoNewMeal} />
        <SectionList
          sections={dailyMeals}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Section
              time={item.time}
              title={item.title}
              insideDiet={item.insideDiet}
            />
          )}
          renderSectionHeader={({ section: { date } }) => (
            <SectionHeaderTitle>{date}</SectionHeaderTitle>
          )}
        />
      </Meals>
    </Container>
  );
}
