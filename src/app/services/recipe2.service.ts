import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecipeService2{

  lifeChanged = new Subject<any>();
  
  life = "normal";

  changeLife(newLife: string){
    this.life = newLife;
    this.lifeChanged.next(this.life);
  }
}