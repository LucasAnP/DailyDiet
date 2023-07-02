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
import { useState } from "react";
import { SectionList } from "react-native";
import { Button } from "@components/Button";
import { Section } from "@components/Section";

export function Home() {
  const [mealsPercentage, setMealsPercentage] = useState(0);
  const [dailyMeals, setDailyMeals] = useState([
    {
      date: "13/02/25",
      data: [
        { title: "Primeira refeicao", insideDiet: true },
        { title: "Segunda refeicao", insideDiet: false },
      ],
    },

    {
      date: "02/07/23",
      data: [{ title: "Primeira refeicao", insideDiet: true }],
    },
  ]);

  return (
    <Container>
      <Header />
      <Percent activeOpacity={0.7}>
        <ClickIcon />
        <PercentTitle>{mealsPercentage}%</PercentTitle>
        <PercentSubtitle>of meals in the diet</PercentSubtitle>
      </Percent>
      <Meals>
        <Subtitle>Meals</Subtitle>
        <Button title="New meal" />
        <SectionList
          sections={dailyMeals}
          keyExtractor={(_, index) => index}
          renderItem={({ item }) => <Section date={item.date} />}
          renderSectionHeader={({ section: { date } }) => <></>}
        />
      </Meals>
    </Container>
  );
}
