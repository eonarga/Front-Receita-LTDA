import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  private users: IUser[] = [];
  private isLoggedInVar = false;

  register(user: IUser): Observable<boolean> {
    // Simula um backend que retorna um Observable
    const isEmailUnique = !this.users.some((u) => u.email === user.email);
    if (isEmailUnique) {
      // Gera um ID único (pode ser mais robusto em uma aplicação real)
      user.id = this.users.length + 1;

      // Adiciona o novo usuário ao array
      this.users.push(user);

      return of(true); // Registro bem-sucedido
    } else {
      return of(false); // Email já registrado
    }
  }

  isLoggedIn(): boolean {
    return this.isLoggedInVar;
  }

  login(email: string, password: string): boolean {
    // Lógica de autenticação simulada
    if (email === 'email' && password === 'password') {
      this.isLoggedInVar = true;
      return true;
    } else {
      this.isLoggedInVar = false;
      return false;
    }
  }

  logout(): void {
    this.isLoggedInVar = false;
  }
}
