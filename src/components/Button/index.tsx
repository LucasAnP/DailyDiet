import { Container, Icon, Text } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  addIcon?: boolean;
};

export function Button({ title, addIcon = true, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      {addIcon && <Icon />}
      <Text>{title}</Text>
    </Container>
  );
}
