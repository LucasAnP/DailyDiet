import { Button } from "@components/Button";
import { Container, Subtitle, Title } from "./styles";
import IllustrationSVG from "@assets/images/Illustration.svg";
import IllustrationFailSVG from "@assets/images/IllustrationFail.svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Route } from "@routes/enums";

type RouteParams = {
  success: number;
};

export function NewMealSuccess() {
  const navigation = useNavigation();
  const route = useRoute();
  const { success } = route?.params as RouteParams;

  function handleGoHome() {
    navigation.navigate(Route.HOME);
  }

  return (
    <Container>
      {success ? (
        <>
          <Title>Keep it up!</Title>
          <Subtitle>You stayed on the diet. Very well.</Subtitle>
          <IllustrationSVG />
          <Button
            title="Go to home"
            onPress={handleGoHome}
            addIcon={false}
            style={{ marginTop: 32 }}
          />
        </>
      ) : (
        <>
          <Title fail>What a pity!</Title>
          <Subtitle>
            You went off the diet this time, but keep pushing yourself and don't
            give up!
          </Subtitle>
          <IllustrationFailSVG />
          <Button
            title="Go to home"
            onPress={handleGoHome}
            addIcon={false}
            style={{ marginTop: 32 }}
          />
        </>
      )}
    </Container>
  );
}
