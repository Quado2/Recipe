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

  constructor(private shoppingListService: ShoppingListService) {}

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

  onAdd(f: NgForm) {
    
    const { name, amount } = f.value;
    console.log({ name, amount });
    const ingredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(ingredient);
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.shoppingSub.unsubscribe();
  }
}
