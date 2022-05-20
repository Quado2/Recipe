import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentPage = 'recipe';
  title = 'Recipe';

  // onNavigate(feature: string) {
  //   this.currentPage = feature;
  // }
}
