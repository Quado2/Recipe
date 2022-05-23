import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>()
  selIngredient = new Subject<number>();

  private ingredients: Ingredient[] = [ 
    new Ingredient("Maggi", 50),
    new Ingredient("Crayfish", 200),
]

getIngredients(){
  return this.ingredients.slice();
}

getIngredient(index: number){
  return this.ingredients[index]
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

editIngredient(ingredient: Ingredient, index: number){
  this.ingredients[index] = ingredient;
  this.ingredientChanged.next(this.ingredients.slice());
}

deleteIngredient(index: number){
this.ingredients.splice(index, 1);
this.ingredientChanged.next(this.ingredients);
}

}