import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeNewComponent } from "./recipes/recipe-new/recipe-new.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeResolverService } from "./services/recipe-resolver.service";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
  {path: "", redirectTo: "recipes", pathMatch:"full"},
  {path: "recipes", component: RecipesComponent, children: [
   {path: "", component: RecipeStartComponent, pathMatch: "full"},
   {path: "new", component: RecipeNewComponent}, 
   {path: ":id", component: RecipeDetailComponent,resolve: [RecipeResolverService]},
   {path: ":id/edit", component: RecipeNewComponent, resolve: [RecipeResolverService]}
  
  ]},
  {path: "shopping-list", component: ShoppingListComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule{

}