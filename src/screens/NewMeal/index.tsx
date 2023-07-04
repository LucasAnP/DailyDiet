import { useState } from "react";
import { Header } from "@components/Header";
import {
  ButtonContainer,
  Buttons,
  Container,
  Content,
  DateInput,
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

type whichSelectedProps = "FIRST" | "SECOND" | "";

export function NewMeal() {
  const [selected, setSelected] = useState(false);
  const [whichSelected, setWhichSelected] = useState<whichSelectedProps>("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  var today = new Date();
  const [date, setDate] = useState(
    today.toLocaleDateString("en-GB").toString()
  );
  const [hour, setHour] = useState(
    today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds().toString()
  );

  function handleSubmitForm() {
    console.log({
      name,
      description,
      date,
      hour,
      whichSelected,
    });
  }

  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton title="New meal" />
      </HeaderContainer>
      <Content>
        <InputLabel>Name</InputLabel>
        <InputName value={name} onChangeText={setName} numberOfLines={1} />

        <InputLabel>Description</InputLabel>
        <Description>
          <DescriptionInput
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={8}
          />
        </Description>

        <Row>
          <InputColumn style={{ marginRight: 20 }}>
            <InputLabel>Date</InputLabel>
            <DateInput
              value={date}
              onChangeText={setDate}
              type="datetime"
              options={{
                format: "DD/MM/YYYY",
              }}
              keyboardType="numeric"
            />
          </InputColumn>

          <InputColumn>
            <InputLabel>Hour</InputLabel>
            <Time
              value={hour}
              onChangeText={setHour}
              type="datetime"
              options={{
                format: "HH:mm",
              }}
              keyboardType="numeric"
            />
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
          <Button
            title="Register meal"
            disabled={
              !(selected && !!name && !!description && !!date && !!hour)
            }
            onPress={handleSubmitForm}
          />
        </ButtonContainer>
      </Content>
    </Container>
  );
}
