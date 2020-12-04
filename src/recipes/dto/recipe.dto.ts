export class RecipeModel {
  title: string;

  ingredients: string[];

  link: string;

  gif: string;
}

export class RecipeDTO {
  keywords: string[];

  recipes: RecipeModel[];
}
