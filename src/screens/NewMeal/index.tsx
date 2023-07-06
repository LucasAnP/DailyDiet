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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealAdd } from "@storage/meal/mealAdd";
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";
import { useNavigation } from "@react-navigation/native";
import { Route } from "@routes/enums";

type whichSelectedProps = "FIRST" | "SECOND" | "";

export function NewMeal() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(false);
  const [whichSelected, setWhichSelected] = useState<whichSelectedProps>("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  var today = new Date();
  const [date, setDate] = useState(
    today.toLocaleDateString("en-GB").toString()
  );
  const [hour, setHour] = useState(
    today.getHours() + ":" + today.getMinutes() + ":".toString()
  );

  async function handleSubmitForm() {
    try {
      const newMealData = {
        date,
        data: [
          {
            name,
            description,
            time: hour,
            insideDiet: whichSelected === "FIRST" ? true : false,
          },
        ],
      };

      await mealAdd(newMealData);
      navigation.navigate(Route.NEWMEALSUCCESS, {
        success: newMealData.data[0].insideDiet,
      });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("New meal", error.message);
      } else {
        console.warn(error);
        Alert.alert("New meal", "Unable to add a new meal.");
      }
    }
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
