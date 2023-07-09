import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealStorageDTO } from "./mealStorageDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealEdit({ meal }: MealStorageDTO) {
  try {
    const storedMeals = await mealGetAll();
    console.log(storedMeals);

    storedMeals.map((item, index) => {
      if (item.date === meal.date) {
        item.data.forEach((data, indexItem) => {
          if ((data = meal.data)) {
            storedMeals[index].data.splice(indexItem, 1, meal.data[0]);
          }
        });
      }
    });

    const newMealArray = JSON.stringify(storedMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, newMealArray);
  } catch (error) {
    throw error;
  }
}
