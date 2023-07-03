import LogoImg from "@assets/images/Logo.svg";
import { BackButton, BackIcon, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
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
    </Container>
  );
}
