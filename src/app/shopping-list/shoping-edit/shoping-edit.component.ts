import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.scss']
})
export class ShopingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(f:NgForm){
   console.log(f)
const {name, amount} = f.value
console.log({name, amount})
    const ingredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(ingredient)

  }

}
