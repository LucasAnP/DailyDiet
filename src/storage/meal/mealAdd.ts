import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealStorageDTO } from "./mealStorageDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealAdd(meal: MealStorageDTO) {
  try {
    const storedMeals = await mealGetAll();

    let temporaryMeals: MealStorageDTO[] = [];
    if (storedMeals.length == 0) {
      temporaryMeals.push(meal);
    }
    storedMeals.map((item) => {
      if (item.date === meal.date) {
        item.data.push(meal?.data[0]);
        temporaryMeals.splice(0, temporaryMeals.length, item);
      }
    });
    const newMealArray = JSON.stringify(temporaryMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, newMealArray);
  } catch (error) {
    throw error;
  }
}
