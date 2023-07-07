import { MealStorageDTO } from "@storage/meal/mealStorageDTO";

export function calculeIfMealsInDiet(meals: MealStorageDTO[]) {
  let totalOfMeals: number = 0;
  let insideDiet: number = 0;
  let outSideDiet: number = 0;
  let sequenceOfPlates: number = 0;
  let percentDiet: any = 0;

  console.log(meals);

  meals?.forEach((meal) => {
    if (meal?.data) {
      let sequence = 0;
      meal?.data?.forEach((element) => {
        totalOfMeals += 1;
        if (element.insideDiet) {
          totalOfMeals += 1;
          totalOfMeals += 1;
        } else {
          totalOfMeals += 1;
        }
      });
      if (sequence > sequenceOfPlates) sequenceOfPlates = sequence;
    }
  });

  percentDiet = ((insideDiet / totalOfMeals) * 100).toFixed(0);

  return {
    percentDiet,
    sequenceOfPlates,
    totalOfMeals,
    insideDiet,
    outSideDiet,
  };
}
