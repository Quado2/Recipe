import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService2 } from 'src/app/services/recipe2.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe
  id;


  constructor(private recipeService2: RecipeService2 ,private recipeService: RecipeService, private router: Router, private route: ActivatedRoute, private storageService: DataStorageService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
        this.recipe = this.recipeService2.getRecipeById(this.id);
      }
    )


  }

  onToShoppingList(ingredients: Ingredient[]){
   this.recipeService.addIngredients(ingredients);
  }

  onEditRecipe(){
    this.router.navigate(["edit"], {relativeTo:this.route})
  }

  onDeleteRecipe(){
    this.recipeService2.deleteRecipe(this.id);
    this.router.navigate(["/recipes"])
  }

  

}
