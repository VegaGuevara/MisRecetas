import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']  // Cambiado styleUrl a styleUrls
})
export class RecipesComponent {

  ingredient: string = '';

  myRecipe;
  recipeFound;

  constructor(private listServ: RecipeService) {}

  getPositions($event) {
    this.myRecipe = this.listServ.getOneRecipe($event);
    this.recipeFound = this.myRecipe;
  }

  editRecipe() {
    this.listServ.editRecipe(this.recipeFound);
  }

}