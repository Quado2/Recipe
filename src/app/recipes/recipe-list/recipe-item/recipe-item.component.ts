import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeEmit = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {}

  onSelect(recipe: Recipe) {
    this.recipeEmit.emit(recipe);
  }
}
