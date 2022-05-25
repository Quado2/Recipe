import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  RECIPE_URL = 'https://recipe-b4181-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storerRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.RECIPE_URL, recipes).subscribe((respData) => {
      console.log(respData);
    });
  }

  fetchRecipes(){
    this.http.get<Recipe[]>(this.RECIPE_URL).subscribe(resp => {
      this.recipeService.setRecipes(resp)
    })
  }
}
