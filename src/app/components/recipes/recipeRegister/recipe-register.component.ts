import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IRecipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-register',
  templateUrl: './recipe-register.component.html',
  styleUrls: ['./recipe-register.component.css'],
})
export class RecipeRegisterComponent {
  recipe: IRecipe = {
    id: 0, // O id será gerado automaticamente
    name: '',
    ingredients: '',
    prepareMode: '',
    imageUrl: '',
  };

  constructor(private router: Router) {}

  onSubmit(): void {
    // Verifica se os campos obrigatórios foram preenchidos
    if (
      this.recipe.name &&
      this.recipe.ingredients &&
      this.recipe.prepareMode
    ) {
      // Recupera as receitas existentes no localStorage
      const storedRecipesString: string | null =
        localStorage.getItem('recipes');
      const recipes: IRecipe[] = storedRecipesString
        ? JSON.parse(storedRecipesString)
        : [];

      // Gera um novo id para a receita
      this.recipe.id = this.generateRecipeId(recipes);

      // Adiciona a nova receita ao array
      recipes.push(this.recipe);

      // Salva o array atualizado no localStorage
      localStorage.setItem('recipes', JSON.stringify(recipes));

      // Navega de volta para a tela de listagem de receitas
      this.router.navigate(['/recipe-list']);
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  }

  private generateRecipeId(recipes: IRecipe[]): number {
    // Gera um id único para a nova receita
    return recipes.length > 0
      ? Math.max(...recipes.map((recipe) => recipe.id)) + 1
      : 1;
  }
}
