import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.scss']
})
export class RecipeNewComponent implements OnInit {
 id: number;
 editMode: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
    })
  }


}
