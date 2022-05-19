import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  ingredientChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [ 
    new Ingredient("Maggi", 50),
    new Ingredient("Crayfish", 200),
]

getIngredients(){
  return this.ingredients.slice();
}

addIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientChanged.emit(this.ingredients);
}

}