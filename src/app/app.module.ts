import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CrudComponent } from './components/crud/crud.component';
import { DashboardRecipeListComponent } from './components/dashboard-recipe-list/dashboard-recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipesListComponent,
    NewRecipeComponent,
    DashboardComponent,
    CrudComponent,
    DashboardRecipeListComponent,
    RecipeDetailComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
