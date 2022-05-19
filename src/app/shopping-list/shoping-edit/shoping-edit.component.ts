import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.scss']
})
export class ShopingEditComponent implements OnInit {

  @ViewChild("nameRef", {static: false}) nameInput: ElementRef
  @ViewChild("amountRef", {static: false}) amountInput: ElementRef
  

  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(){
   
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(ingredient)

  }

}
