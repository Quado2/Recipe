import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({providedIn: "root"})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("A test Recipe",
    "This is a great test", 
    "https://static01.nyt.com/images/2013/06/26/dining/26JPFLEX1/26JPFLEX1-articleLarge-v3.jpg",
    [
      new Ingredient("Meat", 5),
      new Ingredient("Okro", 60),
      new Ingredient("Egusi", 2)
    ]),
    new Recipe("Another Recipe",
    "This is even a greater test",
    "https://www.thespruceeats.com/thmb/a39vP2ggOZJr_0DZJfUac_XPBU8=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/yam-fufu-2138088-hero-01-3366d155060e480abaf33cc67031dc9d.jpg",
    [
      new Ingredient("Ogbono", 4),
      new Ingredient("Maggi", 4)
    ])
  ]

  constructor(private slService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredients(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}