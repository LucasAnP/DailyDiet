import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealStorageDTO } from "./mealStorageDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealAdd(meal: MealStorageDTO) {
  try {
    const storedMeals = await mealGetAll();

    let temporaryMeals: MealStorageDTO[] = storedMeals;

    if (temporaryMeals.length === 0) {
      temporaryMeals.push(meal);
    } else {
      for (let index = 0; index < temporaryMeals.length; index++) {
        if (temporaryMeals[index].date === meal.date) {
          return temporaryMeals[index].data.push(meal?.data[0]);
        } else {
          return temporaryMeals.push(meal);
        }
      }
    }
    const newMealArray = JSON.stringify(temporaryMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, newMealArray);
  } catch (error) {
    throw error;
  }
}
