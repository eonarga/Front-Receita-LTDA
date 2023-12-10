import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  email: string = '';
  password: string = '';
  constructor(private router: Router) {}
  login(): void {
    // Lógica de autenticação, se necessário
    // Se a autenticação for bem-sucedida, navegue para a lista de receitas
    this.router.navigate(['/recipe-list']);
  }
}
