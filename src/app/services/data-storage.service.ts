import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './recipe.service';
import { RecipeService2 } from './recipe2.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  RECIPE_URL = 'https://recipe-b4181-default-rtdb.firebaseio.com/recipes.json';

  constructor(
    private http: HttpClient,
    private recipeService2: RecipeService2,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService2.getRecipes();
    this.http.put(this.RECIPE_URL, recipes).subscribe((respData) => {
      console.log(respData);
    });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(this.RECIPE_URL)
      .pipe(
        map((recipes2) => {
          return recipes2.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap(recipe => {
          this.recipeService2.setRecipes(recipe);
        })
      )
      ;
  }
}
