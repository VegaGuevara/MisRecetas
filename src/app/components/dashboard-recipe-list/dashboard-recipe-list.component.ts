import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/Recipes';

@Component({
  selector: 'app-dashboard-recipe-list',
  templateUrl: './dashboard-recipe-list.component.html',
  styleUrls: ['./dashboard-recipe-list.component.css']
})
export class DashboardRecipeListComponent implements OnInit {

  myRecipes: Recipe[];
  ingredientsVisible: boolean[];
  searchTerm: string = '';
  filteredRecipes: Recipe[];
  lastAddedRecipe: string | undefined;

  constructor(private recipeService: RecipeService, private router: Router) { } // Inyecta Router

  ngOnInit() {
    this.myRecipes = this.recipeService.getRecipes();
    this.ingredientsVisible = Array(this.myRecipes.length).fill(false);
    this.filteredRecipes = this.recipeService.getRecipes();
    this.recipeService.recipes$.subscribe(recipes => {
      this.myRecipes = recipes;
      this.updateLastAddedRecipe(); 
    });
  }

  toggleIngredients(index: number): void {
    this.ingredientsVisible[index] = !this.ingredientsVisible[index];
  }

  applySearchFilter(): void {    
    this.updateFilteredRecipes();
  }
  
  private updateFilteredRecipes(): void {
    this.filteredRecipes = this.recipeService.getRecipes().filter(recipe =>
      recipe.recipe_name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addRecipe(recipe: Recipe): void {
    this.recipeService.addRecipe(recipe);
    this.updateLastAddedRecipe();
    this.myRecipes.unshift(recipe);
  }

  private updateLastAddedRecipe(): void {
    const recipes = this.recipeService.getRecipes();
    
    if (recipes.length > 0) {
      this.lastAddedRecipe = recipes[0].recipe_name;
    } else {
      this.lastAddedRecipe = undefined;
    }
  }

  viewRecipeDetails(recipeId: number): void {
    this.router.navigate(['/recipe', recipeId]);
  }
}
