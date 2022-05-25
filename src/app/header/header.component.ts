import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  collapsed = true;

  constructor(private storageService: DataStorageService) {}
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
