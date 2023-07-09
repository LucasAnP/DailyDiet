import { Container, DeleteIcon, EditIcon, Icon, Text } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  addIcon?: "EDIT" | "DELETE" | "ADD";
  filled?: boolean;
  icon?: boolean;
};

export function Button({
  title,
  addIcon = "ADD",
  filled = true,
  icon = true,
  ...rest
}: Props) {
  return (
    <Container activeOpacity={0.7} filled={filled} {...rest}>
      {icon && addIcon == "ADD" && <Icon filled={filled} />}
      {icon && addIcon == "EDIT" && <EditIcon filled={filled} />}
      {icon && addIcon == "DELETE" && <DeleteIcon filled={filled} />}
      <Text filled={filled}>{title}</Text>
    </Container>
  );
}
