import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  currentRecipe: Recipe

  ngOnInit(): void {
  }

  // onRecipeChange(recipe: Recipe){
  //   this.currentRecipe = recipe
  // }

}
