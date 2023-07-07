import { Container, DeleteIcon, EditIcon, Icon, Text } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  addIcon?: "EDIT" | "DELETE" | "ADD";
  filled?: boolean;
};

export function Button({
  title,
  addIcon = "ADD",
  filled = true,
  ...rest
}: Props) {
  return (
    <Container activeOpacity={0.7} filled={filled} {...rest}>
      {addIcon == "ADD" && <Icon filled={filled} />}
      {addIcon == "EDIT" && <EditIcon filled={filled} />}
      {addIcon == "DELETE" && <DeleteIcon filled={filled} />}
      <Text filled={filled}>{title}</Text>
    </Container>
  );
}
