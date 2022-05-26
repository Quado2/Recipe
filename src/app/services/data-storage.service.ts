import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './recipe.service';
import { RecipeService2 } from './recipe2.service';


@Injectable({ providedIn: 'root' })
export class DataStorageService {
  RECIPE_URL = 'https://recipe-b4181-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService2: RecipeService2, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.RECIPE_URL, recipes).subscribe((respData) => {
      console.log(respData);
    });
  }

  fetchRecipes(){
    this.http.get<Recipe[]>(this.RECIPE_URL).subscribe(resp => {
      console.log("in storage service")
      this.recipeService2.setRecipes(resp)
    })
  }

  

}
