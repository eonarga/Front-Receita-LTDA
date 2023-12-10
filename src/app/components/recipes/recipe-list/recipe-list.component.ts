import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IRecipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: IRecipe[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Carregar as receitas do localStorage ao iniciar o componente
    this.loadRecipes();
  }

  loadRecipes(): void {
    const storedRecipesString: string | null = localStorage.getItem('recipes');
    if (storedRecipesString) {
      this.recipes = JSON.parse(storedRecipesString);
    }
  }

  goToRegisterRecipe(): void {
    // Navegar para a tela de cadastro de receitas
    this.router.navigate(['/recipe-register']);
  }
}
