import { MealStorageDTO } from "@storage/meal/mealStorageDTO";

export function calculeIfMealsInDiet(meals: MealStorageDTO[]) {
  let totalOfMeals = 0;
  let insideDiet = 0;
  let outSideDiet = 0;
  let sequenceOfPlates = 0;
  let percentDiet = 0;

  meals?.forEach((meal) => {
    if (meal?.data) {
      let sequence = 0;
      meal?.data?.forEach((element) => {
        totalOfMeals++;
        if (element.insideDiet) {
          insideDiet++;
          sequence++;
        } else {
          outSideDiet++;
        }
      });
      if (sequence > sequenceOfPlates) sequenceOfPlates = sequence;
    }
  });

  percentDiet = ((insideDiet / totalOfMeals) * 100).toFixed(2);

  return {
    percentDiet,
    sequenceOfPlates,
    totalOfMeals,
    insideDiet,
    outSideDiet,
  };
}
