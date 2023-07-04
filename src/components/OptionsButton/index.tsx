import { CircleIcon, Container, Text } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  insideDiet?: boolean;
  isSelected: boolean;
};

export function OptionsButton({
  insideDiet = false,
  isSelected = false,
  ...rest
}: Props) {
  return (
    <Container
      activeOpacity={0.7}
      isSelected={isSelected}
      insideDiet={insideDiet}
      {...rest}
    >
      <CircleIcon insideDiet={insideDiet} />
      <Text>{insideDiet ? "Yes" : "No"}</Text>
    </Container>
  );
}
