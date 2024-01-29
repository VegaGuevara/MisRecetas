import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/Recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  @Output() sendPosition = new EventEmitter<number>();

  myRecipes: Recipe[];
  ingredientsVisible: boolean[];

  constructor(private listServ: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.myRecipes = this.listServ.getRecipes();
    this.ingredientsVisible = Array(this.myRecipes.length).fill(false);
    console.log("Mis Recetas : ", this.myRecipes);
  }

  deleteRecipe(_id: number): void {
    this.listServ.deleteRecipe(_id);
  }

  getPositions(_id: number): void {
    this.sendPosition.emit(_id);
  }

  toggleIngredients(index: number): void {
    this.ingredientsVisible[index] = !this.ingredientsVisible[index];
  }

  editRecipe(index: number): void {
    this.router.navigate(['/recipe', 'edit', index]);
  }
}
