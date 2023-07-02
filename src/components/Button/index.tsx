import { Container, Icon, Text } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  addIcon?: boolean;
};

export function Button({ title, addIcon = true }: Props) {
  return (
    <Container>
      {addIcon && <Icon />}
      <Text>{title}</Text>
    </Container>
  );
}
