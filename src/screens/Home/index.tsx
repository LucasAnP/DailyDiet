import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import {
  ClickIcon,
  Container,
  Meals,
  Percent,
  SectionHeaderTitle,
  Subtitle,
} from "./styles";
import { Button } from "@components/Button";
import { Section } from "@components/Section";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Route } from "@routes/enums";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Highlight } from "@components/Highlight";
import { calculeIfMealsInDiet } from "@utils/CalculeIfMealsInDiet";
import { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import { mealGetAll } from "@storage/meal/mealGetAll";

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [mealsPercentage, setMealsPercentage] = useState(0);
  const [dailyMeals, setDailyMeals] = useState<MealStorageDTO[]>([]);

  function calculePercent() {
    if (dailyMeals.length > 0) {
      const { percentDiet } = calculeIfMealsInDiet(dailyMeals);
      setMealsPercentage(percentDiet);
    }
  }

  async function getMeals() {
    try {
      const mealsOfStorage = await mealGetAll();
      setDailyMeals(mealsOfStorage);
      calculePercent();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Meals", error.message);
      } else {
        console.warn(error);
        Alert.alert("Meals", "Error when getting meals.");
      }
    }
  }

  function handleGoStatisticsScreen() {
    navigation.navigate(Route.STATISTICS, {
      percentage: mealsPercentage,
      meals: dailyMeals,
      negative: mealsPercentage < 50,
    });
  }

  function handleGoNewMeal() {
    navigation.navigate(Route.NEWMEAL);
  }

  useFocusEffect(
    useCallback(() => {
      getMeals();
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

        <FlatList
          data={dailyMeals}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <>
              <SectionHeaderTitle>{item?.date}</SectionHeaderTitle>
              {item?.data?.map((item, index) => (
                <Section
                  key={`${item.name}-${index}`}
                  time={item.time}
                  title={item.name}
                  insideDiet={item.insideDiet}
                />
              ))}
            </>
          )}
        />
      </Meals>
    </Container>
  );
}
