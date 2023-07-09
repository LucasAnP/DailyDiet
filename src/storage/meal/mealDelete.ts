import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealStorageDTO } from "./mealStorageDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealDelete({ meal }: MealStorageDTO) {
  try {
    const storedMeals = await mealGetAll();

    let temporaryMeals: MealStorageDTO[] = storedMeals;
    temporaryMeals.forEach((item, itemIndex) => {
      if (item.date === meal.date) {
        item.data.forEach((_, index) => {
          if ((temporaryMeals[itemIndex].data[index] = meal)) {
            if (temporaryMeals[itemIndex].data.length <= 1) {
              temporaryMeals.splice(itemIndex, 1);
            } else {
              temporaryMeals[itemIndex].data.splice(index, 1);
            }
          }
        });
      }
    });
    const newArray = JSON.stringify(temporaryMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, newArray);
  } catch (error) {
    throw error;
  }
}
