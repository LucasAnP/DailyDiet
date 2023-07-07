import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealStorageDTO } from "./mealStorageDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealDelete({ meal }: MealStorageDTO) {
  try {
    const storedMeals = await mealGetAll();
    const storedNewArray = storedMeals.map((item, itemIndex) => {
      if (item.date === meal.date) {
        item.data.forEach((_, index) => {
          if ((item.data[index] = meal)) item.data.splice(index, 1);
        });
      }
      if (item.data.length <= 1) {
        storedMeals.splice(itemIndex, 1);
      }
      return item;
    });
    const newArray = JSON.stringify(storedNewArray);
    await AsyncStorage.setItem(MEAL_COLLECTION, newArray);
  } catch (error) {
    throw error;
  }
}
