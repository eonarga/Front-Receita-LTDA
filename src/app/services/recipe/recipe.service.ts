import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from 'src/app/models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    { 
      id: 1,
      name: 'pudim',
      ingredients: 'leite condensado, ovos, leite',
      prepareMode: 'misturar tudo e assar',
      imageUrl: '32432423.jpeg' 
    },
  ];

  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }

  getRecipeById(id: number): Observable<Recipe | undefined> {
    const recipe = this.recipes.find((r) => r.id === id);
    return of(recipe);
  }

  addRecipe(recipe: Recipe): void {
    // Lógica para adicionar uma nova receita ao array
    this.recipes.push(recipe);
  }

  updateRecipe(recipe: Recipe): void {
    // Lógica para atualizar a receita no array
    const index = this.recipes.findIndex((r) => r.id === recipe.id);
    if (index !== -1) {
      this.recipes[index] = recipe;
    }
  }
}
