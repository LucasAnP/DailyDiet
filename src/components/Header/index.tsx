import LogoImg from "@assets/images/Logo.svg";
import { BackButton, BackIcon, Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean;
  title?: string;
};

export function Header({ showBackButton = false, title }: Props) {
  const navigation = useNavigation();

  const handleOpenGroup = () => {
    navigation.navigate("home");
  };

  return (
    <Container>
      {!showBackButton ? (
        <LogoImg />
      ) : (
        <BackButton onPress={handleOpenGroup}>
          <BackIcon />
        </BackButton>
      )}
      {title && <Title>{title}</Title>}
    </Container>
  );
}
