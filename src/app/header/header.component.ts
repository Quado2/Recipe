import { Component, } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  collapsed = true;

  constructor(private storageService: DataStorageService, private recipeServie: RecipeService) {}
  // @Output() featureEmit = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureEmit.emit(feature);
  // }

  onSave() {
    this.storageService.storerRecipes();
  }

  onFetch() {
    this.storageService.fetchRecipes();
  }

}
