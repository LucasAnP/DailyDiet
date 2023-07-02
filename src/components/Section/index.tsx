import { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import { Container } from "./styles";
import { FlatListProps } from "react-native";

interface Props {
  date: string;
  title: string;
  insideDiet: boolean;
}

export function Section({ date, title, insideDiet }: Props) {
  return <Container></Container>;
}
