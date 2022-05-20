import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>()

  private ingredients: Ingredient[] = [ 
    new Ingredient("Maggi", 50),
    new Ingredient("Crayfish", 200),
]

getIngredients(){
  return this.ingredients.slice();
}

addIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientChanged.next(this.ingredients);
}

addIngredients(ingredients: Ingredient[]){
  this.ingredients.push(...ingredients)
  this.ingredientChanged.next(ingredients);
}

setIngredients(ingredients: Ingredient[]){
  this.ingredients = ingredients.slice()
}

}