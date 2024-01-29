import { Injectable } from '@angular/core';

import { Recipe } from '../models/Recipes';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesList: Recipe[] = [];
  private recipesSubject = new BehaviorSubject<Recipe[]>([]);
  recipes$ = this.recipesSubject.asObservable();

  constructor() { }

  getRecipes(){
    return this.recipesList;
  }

  getOneRecipe(_id){
    return this.recipesList.find(recipe => recipe.id === _id);
  }

  addRecipe(recipe : Recipe){
    this.recipesList.unshift(recipe);
    this.recipesSubject.next(this.recipesList.slice());
  }

  editRecipe(newRecipeEdit){
    const index = this.recipesList.findIndex(recipe => recipe.id === newRecipeEdit.id);
    this.recipesList[index] = newRecipeEdit;
  }

  deleteRecipe(_id){
    this.recipesList.splice(_id, 1);
  }

  addIngredientToRecipe(recipeId: number, ingredient: string) {
    const index = this.recipesList.findIndex(recipe => recipe.id === recipeId);
    if (index !== -1) {
      this.recipesList[index].ingredients.push(ingredient);
      this.recipesSubject.next(this.recipesList.slice());
    }
  }

}