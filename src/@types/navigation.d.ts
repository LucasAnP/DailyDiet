import { NewMealSuccess } from "@screens/NewMealSuccess";
import { MealStorageDTO } from "@storage/meal/mealStorageDTO";
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        percentage: number;
      };
      newMeal: undefined;
      newMealSuccess: {
        success: boolean;
      };
      mealDetails: MealStorageDTO;
    }
  }
}
