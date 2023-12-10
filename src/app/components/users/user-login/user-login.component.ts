import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';

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
    // Recupera os usuários salvos no localStorage
    const storedUsersString: string | null = localStorage.getItem('users');
    const users: IUser[] = storedUsersString
      ? JSON.parse(storedUsersString)
      : [];

    // Verifica se há um usuário com as credenciais fornecidas
    const user = users.find(
      (u) => u.email === this.email && u.password === this.password
    );

    if (user) {
      // Se a autenticação for bem-sucedida, navegue para a lista de receitas
      this.router.navigate(['/recipe-list']);
    } else {
      console.log('Credenciais inválidas');
    }
  }
}
