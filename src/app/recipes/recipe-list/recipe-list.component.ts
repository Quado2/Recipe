import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { RecipeService2 } from 'src/app/services/recipe2.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;
  lifeSub: Subscription

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private recipeService2: RecipeService2,
    private storageService: DataStorageService
    ) { }

  ngOnInit(): void {
    this.storageService.fetchRecipes().subscribe();
    this.subscription = this.recipeService2.recipeChanged.subscribe((recipes: Recipe[]) => {
      console.log("Recipes has changed, this is the new one: \n", recipes)
      this.recipes = recipes
    })

  }

  OnNewRecipe(){
    this.router.navigate(["new"],{relativeTo: this.route})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
