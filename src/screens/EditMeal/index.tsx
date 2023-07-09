import { useState } from "react";

import { Alert } from "react-native";
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
import { useNavigation, useRoute } from "@react-navigation/native";
import { OptionsButton } from "@components/OptionsButton";
import { Button } from "@components/Button";
import { mealEdit } from "@storage/meal/mealEdit";
import { Route } from "@routes/enums";

type whichSelectedProps = "FIRST" | "SECOND" | "";

export function EditMeal() {
  const navigation = useNavigation();

  const route = useRoute();
  const { params } = route.params;
  const [selected, setSelected] = useState(true);
  const [whichSelected, setWhichSelected] = useState<whichSelectedProps>(
    params?.data?.insideDiet ? "FIRST" : "SECOND"
  );
  const [name, setName] = useState(params?.data?.name.toString());
  const [description, setDescription] = useState(params?.data?.description);
  const [date, setDate] = useState(params?.date);
  const [hour, setHour] = useState(params?.data?.time);

  async function handleSubmitForm() {
    try {
      await mealEdit({
        meal: {
          date,
          data: [
            {
              name,
              description,
              time: hour,
              insideDiet: whichSelected === "FIRST" ? true : false,
            },
          ],
        },
      });
      navigation.navigate(Route.HOME);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Edit meal", error.message);
      } else {
        console.warn(error);
        Alert.alert("Edit meal", "Unable to edit the selected meal.");
      }
    }
  }

  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton title="Edit meal" />
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
            title="Save changes"
            icon={false}
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
