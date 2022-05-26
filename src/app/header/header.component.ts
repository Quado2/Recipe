import { Component, } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import {RecipeService2 } from '../services/recipe2.service';
import { DataStorageService } from '../services/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  collapsed = true;

  constructor(private storageService: DataStorageService, private recipeService2: RecipeService2) {}
  // @Output() featureEmit = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureEmit.emit(feature);
  // }

  onSave() {
    this.storageService.storeRecipes();
  }

  onFetch() {
    this.storageService.fetchRecipes();
  }

  

}
