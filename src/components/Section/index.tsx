import { MealStorageDTO } from "@storage/meal/mealStorageDTO";
import { CircleIcon, Container, Time, TimeContainer, Title } from "./styles";
import { FlatListProps } from "react-native";

interface Props {
  time: string;
  title: string;
  insideDiet: boolean;
}

export function Section({ time, title, insideDiet }: Props) {
  return (
    <Container>
      <TimeContainer>
        <Time>{time}</Time>
      </TimeContainer>
      <Title numberOfLines={1}>{title}</Title>
      <CircleIcon insideDiet={insideDiet} />
    </Container>
  );
}
