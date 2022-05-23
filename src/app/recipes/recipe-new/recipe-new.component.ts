import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.scss'],
})
export class RecipeNewComponent implements OnInit {
  id: number;
  editMode: boolean;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([])

    if (this.editMode) {
      let recipe: Recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.imagePath;
      if(recipe.ingredients){
        for( let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
            "name": new FormControl(ingredient.name, Validators.required),
            "amount": new FormControl(ingredient.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }
    this.recipeForm = new FormGroup({
      "name":  new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'imagePath': new FormControl(recipeImagePath,Validators.required),
      "ingredients": recipeIngredients,
    })
  }

  get ingredientsForm(){
    return (this.recipeForm.get('ingredients') as FormArray).controls
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        "name":new FormControl(null, Validators.required),
        "amount": new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

}
