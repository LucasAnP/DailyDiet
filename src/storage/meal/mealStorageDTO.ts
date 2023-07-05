export interface MealStorageDTO {
  date: string;
  data: {
    name: string;
    description: string;
    time: string;
    insideDiet: boolean;
  }[];
}
