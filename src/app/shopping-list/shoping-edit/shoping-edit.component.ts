import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.scss'],
})
export class ShopingEditComponent implements OnInit, OnDestroy {
  shoppingSub: Subscription;
  index: number;
  editMode: boolean = false;
  editingIngredient: Ingredient;
  @ViewChild('f', { static: false }) slForm;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.shoppingSub = this.shoppingListService.selIngredient.subscribe(
      (index: number) => {
        this.index = index;
        this.editMode = true;
        this.editingIngredient = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editingIngredient.name,
          amount: this.editingIngredient.amount,
        });
      }
    );
  }

  onSubmit(f: NgForm) {
    
    const { name, amount } = f.value;
    console.log({ name, amount });
    const ingredient = new Ingredient(name, amount);
    if(this.editMode){
      this.shoppingListService.editIngredient(ingredient, this.index)
    } else{
      this.shoppingListService.addIngredient(ingredient);
    }
   f.reset();
    this.editMode = false;
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.index)
    this.onClear()
  }

  testSome(){
    this.recipeService.deleteRecipe(1);
  }

  ngOnDestroy(): void {
    this.shoppingSub.unsubscribe();
  }


}
