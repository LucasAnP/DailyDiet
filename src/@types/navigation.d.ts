import { NewMealSuccess } from "@screens/NewMealSuccess";
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
    }
  }
}
