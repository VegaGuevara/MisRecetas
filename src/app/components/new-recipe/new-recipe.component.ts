import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {

  myId = 1;
  showIngredientWarning = false;
  showRecipeNameWarning = false;
  showDescriptionWarning = false;
  recipeAdded = false;
  modalVisible: boolean= true;

  newRecipe = {
    id: this.myId,
    recipe_name: '',
    description: '',
    ingredients: [''],
    image: '',
  };

  constructor(private listServ: RecipeService) { }

  addRecipe() {
    const validRecipe =
      this.newRecipe.ingredients.length >= 1 &&
      this.newRecipe.ingredients.every(ingredient => ingredient.trim() !== '') &&
      this.newRecipe.recipe_name.trim() !== '' &&
      this.newRecipe.description.trim() !== '';
  
    if (validRecipe) {
      console.log(validRecipe)
      this.listServ.addRecipe(this.newRecipe);
      this.myId++;
      this.resetForm();
      this.modalVisible = true;
    } else {
      this.showIngredientWarning = this.newRecipe.ingredients.length === 0 || this.newRecipe.ingredients.some(ingredient => ingredient.trim() === '');
      this.showRecipeNameWarning = this.newRecipe.recipe_name.trim() === '';
      this.showDescriptionWarning = this.newRecipe.description.trim() === '';
      this.modalVisible = false;
    }
  }

  addIngredient() {
    if (this.newRecipe.ingredients[this.newRecipe.ingredients.length - 1].trim() !== '') {
      this.newRecipe.ingredients.push('');
      this.showIngredientWarning = false;
    } else {
      this.showIngredientWarning = true;
    }
  }

  resetForm() {
    this.newRecipe = {
      id: this.myId,
      recipe_name: '',
      description: '',
      ingredients: [''],
      image: '',
    };
    this.showIngredientWarning = false;
    this.showRecipeNameWarning = false;
    this.showDescriptionWarning = false;
    this.recipeAdded = false;
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  removeIngredient(index: number) {
    this.newRecipe.ingredients.splice(index, 1);
  }

}
