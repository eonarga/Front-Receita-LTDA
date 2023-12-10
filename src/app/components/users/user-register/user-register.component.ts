import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(private router: Router) {}
  register(): void {
    // Lógica de registro, se necessário
    // Se o registro for bem-sucedido, navegue para a lista de receitas

    this.router.navigate(['/recipe-list']);
  }
}
