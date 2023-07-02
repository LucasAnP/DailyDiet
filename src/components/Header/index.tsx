import LogoImg from "@assets/images/Logo.svg";
import { BackButton, BackIcon, Container } from "./styles";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {!showBackButton ? (
        <LogoImg />
      ) : (
        <BackButton onPress={() => {}}>
          <BackIcon />
        </BackButton>
      )}
    </Container>
  );
}
