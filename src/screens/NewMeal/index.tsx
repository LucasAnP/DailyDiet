import { useState } from "react";
import { Header } from "@components/Header";
import {
  ButtonContainer,
  Buttons,
  Container,
  Content,
  Date,
  Description,
  DescriptionInput,
  HeaderContainer,
  InputColumn,
  InputLabel,
  InputName,
  Row,
  Time,
} from "./styles";
import { OptionsButton } from "@components/OptionsButton";
import { Button } from "@components/Button";

type whichSelectedProps = "FIRST" | "SECOND";

export function NewMeal() {
  const [selected, setSelected] = useState(false);
  const [whichSelected, setWhichSelected] = useState<whichSelectedProps>("");

  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton title="New meal" />
      </HeaderContainer>
      <Content>
        <InputLabel>Name</InputLabel>
        <InputName />

        <InputLabel>Description</InputLabel>
        <Description>
          <DescriptionInput />
        </Description>

        <Row>
          <InputColumn style={{ marginRight: 20 }}>
            <InputLabel>Date</InputLabel>
            <Date />
          </InputColumn>

          <InputColumn>
            <InputLabel>Hour</InputLabel>
            <Time />
          </InputColumn>
        </Row>
        <InputLabel>Is it inside diet?</InputLabel>
        <Buttons>
          <OptionsButton
            insideDiet
            onPress={() => {
              setSelected(true);
              setWhichSelected("FIRST");
            }}
            isSelected={whichSelected === "FIRST"}
          />
          <OptionsButton
            onPress={() => {
              setSelected(true);
              setWhichSelected("SECOND");
            }}
            isSelected={whichSelected === "SECOND"}
          />
        </Buttons>
        <ButtonContainer>
          <Button title="Register meal" />
        </ButtonContainer>
      </Content>
    </Container>
  );
}
