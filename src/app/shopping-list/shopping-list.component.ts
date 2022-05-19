import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [ 
    new Ingredient("Maggi", 50),
    new Ingredient("Crayfish", 200),
]
  constructor() { }

  ngOnInit(): void {
  }

  onUpdateIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
