import { Header } from "@components/Header";
import {
  ClickIcon,
  Container,
  Meals,
  Percent,
  SectionHeaderTitle,
  Subtitle,
} from "./styles";
import { useState } from "react";
import { SectionList } from "react-native";
import { Button } from "@components/Button";
import { Section } from "@components/Section";
import { useNavigation } from "@react-navigation/native";
import { Route } from "@routes/enums";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Highlight } from "@components/Highlight";

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [mealsPercentage, setMealsPercentage] = useState(0);
  const [dailyMeals, setDailyMeals] = useState([
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
    navigation.navigate(Route.STATISTICS, { percentage: mealsPercentage });
  };

  return (
    <Container>
      <Header />
      <Percent activeOpacity={0.7} onPress={handleGoStatisticsScreen}>
        <ClickIcon />
        <Highlight
          title={`${mealsPercentage}%`}
          subtitle="of meals in the diet"
        />
      </Percent>
      <Meals>
        <Subtitle>Meals</Subtitle>
        <Button title="New meal" />
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
