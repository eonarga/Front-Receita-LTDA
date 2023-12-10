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

  constructor(private router: Router) {
    this.loadRecipes();
  }

  ngOnInit(): void {
    // Carregar as receitas do localStorage ao iniciar o componente
    this.loadRecipes();
  }

  loadRecipes(): void {
    const storedRecipesString: string | null = localStorage.getItem('recipes');
    if (storedRecipesString) {
      this.recipes = JSON.parse(storedRecipesString);
      this.dataSource = this.recipes; // Atualiza o dataSource quando as receitas são carregadas
    }
  }

  goToRegisterRecipe(): void {
    // Navegar para a tela de cadastro de receitas
    this.router.navigate(['/recipe-register']);
  }

  displayedColumns = ['name', 'ingredients', 'prepareMode', 'imageUrl'];
  dataSource: IRecipe[] = [];
  
  /*applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/
}
