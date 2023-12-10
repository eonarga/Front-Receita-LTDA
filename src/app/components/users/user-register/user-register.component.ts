import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  user: IUser = {
    id: 0,
    name: '',
    email: '',
    password: '',
  };
  constructor(private router: Router) {}
  register(): void {
    // Lógica de registro, se necessário
    if (this.user.name && this.user.email && this.user.password) {
      // Recupera os Usuários existentes no
      const storedUsersString: string | null = localStorage.getItem('user');
      const users: IUser[] = storedUsersString
        ? JSON.parse(storedUsersString)
        : [];

      // Gera id para usuário
      this.user.id = this.generateUserId(users);

      //Adiciona o usuário ao array

      users.push(this.user);

      // Salva o array atualizado no localStorage
      localStorage.setItem('users', JSON.stringify(users));

      // Navega de volta para a tela de listagem de receitas
      this.router.navigate(['/recipe-list']);
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  }

  private generateUserId(users: IUser[]): number {
    //Gera um id único para a nova receita
    return users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
  }
}
