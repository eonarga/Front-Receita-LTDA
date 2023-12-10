import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  constructor(private router: Router) {}

  goToRegisterRecipe(): void {
    // Navegar para a tela de cadastro de receitas
    this.router.navigate(['/recipe-register']);
  }
}
