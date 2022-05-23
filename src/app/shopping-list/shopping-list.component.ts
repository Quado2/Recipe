import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
 
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private igChangeSub: Subscription;
  ingredients: Ingredient[] 
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientChanged.subscribe((ingredients) => {
      this.ingredients = ingredients;
    })
  }

  onUpdateIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  onSelect(index: number){
  
    this.shoppingListService.selIngredient.next(index)
  }

}
