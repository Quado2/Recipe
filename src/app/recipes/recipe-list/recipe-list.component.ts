import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A test Recipe","This is a great test", "https://static01.nyt.com/images/2013/06/26/dining/26JPFLEX1/26JPFLEX1-articleLarge-v3.jpg"),
    new Recipe("Another Recipe","This is even a greater test", "https://www.thespruceeats.com/thmb/a39vP2ggOZJr_0DZJfUac_XPBU8=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/yam-fufu-2138088-hero-01-3366d155060e480abaf33cc67031dc9d.jpg")
  ]

  @Output() secondRecipeEmit = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {
  }

  onChildRecipe(recipe: Recipe){
    this.secondRecipeEmit.emit(recipe)
  }

}
