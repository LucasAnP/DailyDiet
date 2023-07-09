import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";
import { NewMealSuccess } from "@screens/NewMealSuccess";
import { MealDetails } from "@screens/MealDetails";
import { Route } from "./enums";
import { EditMeal } from "@screens/EditMeal";

const { Screen, Navigator } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={Route.HOME} component={Home} />
      <Screen name={Route.STATISTICS} component={Statistics} />
      <Screen name={Route.NEWMEAL} component={NewMeal} />
      <Screen name={Route.NEWMEALSUCCESS} component={NewMealSuccess} />
      <Screen name={Route.MEALDETAILS} component={MealDetails} />
      <Screen name={Route.EDITMEAL} component={EditMeal} />
    </Navigator>
  );
};
