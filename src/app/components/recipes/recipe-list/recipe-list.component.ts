import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IRecipe } from 'src/app/models/recipe';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: IRecipe[] = [];
  dataSource: MatTableDataSource<IRecipe>;

  @ViewChild('input') input: any; // Adicionando ViewChild para acessar o input no template

  constructor(private router: Router) {
    this.loadRecipes();
    this.dataSource = new MatTableDataSource(this.recipes); // Inicializa o MatTableDataSource
  }

  ngOnInit(): void {
    // Carregar as receitas do localStorage ao iniciar o componente
    this.loadRecipes();
    this.dataSource = new MatTableDataSource(this.recipes); // Inicializa o MatTableDataSource
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

  displayedColumns = ['name', 'ingredients', 'prepareMode', 'imageUrl'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
