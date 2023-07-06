import { CircleIcon, Container, Time, TimeContainer, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  time: string;
  title: string;
  insideDiet: boolean;
};

export function Section({ time, title, insideDiet, ...rest }: Props) {
  return (
    <Container {...rest}>
      <TimeContainer>
        <Time>{time}</Time>
      </TimeContainer>
      <Title numberOfLines={1}>{title}</Title>
      <CircleIcon insideDiet={insideDiet} />
    </Container>
  );
}
