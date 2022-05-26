import { Component, } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Life } from '../services/life.service';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  collapsed = true;

  constructor(private storageService: DataStorageService, private lifeService: Life) {}
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

  onChangeLife(){
    this.lifeService.changeLife("great")
  }

}
