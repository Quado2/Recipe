import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Life } from 'src/app/services/life.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;
  lifeSub: Subscription
  currentLife: string;

  constructor(private recipeService: RecipeService, 
    private router:Router,
    private route: ActivatedRoute,
    private lifeService: Life
    ) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.currentLife = this.lifeService.getLife()
    this.subscription = this.recipeService.recipeChanged.subscribe((recipes: Recipe[]) => {
      console.log("Recipes has changed, this is the new one: \n", recipes)
      this.recipes = recipes
    })
    this.lifeSub = this.lifeService.lifeChanged.subscribe((newLIfe) => {
      this.currentLife = newLIfe
    })
  }

  OnNewRecipe(){
    
    this.router.navigate(["new"],{relativeTo: this.route})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
