import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Recipe } from "../recipes/recipe.model";
import { DataStorageService } from "./data-storage.service";
import { RecipeService2 } from "./recipe2.service";

@Injectable({providedIn: "root"})
export class RecipeResolverService implements Resolve<Recipe[]>{
  
  constructor(private storageService: DataStorageService, private recipeService: RecipeService2){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
   
    const recipes = this.recipeService.getRecipes();

    if(recipes.length === 0){
      return this.storageService.fetchRecipes();
    } else{
      return recipes
    }

    
  }


}