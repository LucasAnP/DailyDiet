import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealStorageDTO } from "./mealStorageDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealAdd(meal: MealStorageDTO) {
  try {
    const storedMeals = await mealGetAll();

    let temporaryMeals: MealStorageDTO[] = storedMeals;

    if (temporaryMeals.length == 0) {
      temporaryMeals.push(meal);
    } else {
      temporaryMeals.map((item, index) => {
        if (item.date === meal.date) {
          temporaryMeals[index].data.push(meal?.data[0]);
        } else {
          if (!temporaryMeals.includes(meal)) {
            temporaryMeals.push(meal);
          }
        }
      });
    }

    const newMealArray = JSON.stringify(temporaryMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, newMealArray);
  } catch (error) {
    throw error;
  }
}
